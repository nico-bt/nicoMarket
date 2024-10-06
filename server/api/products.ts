export interface NormalizedProduct {
  id: string
  title: string
  price: number
  image: string
  url: string
  source: "MercadoLibre" | "Amazon"
}

export interface apiResponse {
  products: NormalizedProduct[]
  paging: {
    total: number
    primary_results: number
    offset: number
    limit: number
  }
}

export default defineEventHandler(async (event): Promise<apiResponse> => {
  let { query, page = 1, sort = "relevance" } = getQuery(event)

  if (!query) {
    throw createError({
      statusCode: 400,
      statusMessage: "Query is required",
    })
  }

  const limit = 50
  const offset = (Number(page) - 1) * limit

  try {
    const data = await $fetch<any>(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&offset=${offset}&limit=${limit}&sort=${sort}`
    )

    // Normalize data
    const productsMercadoLibre: NormalizedProduct[] = data.results.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        url: product.permalink,
        source: "MercadoLibre",
      }
    })

    return {
      products: productsMercadoLibre,
      paging: data.paging,
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    })
  }
})
