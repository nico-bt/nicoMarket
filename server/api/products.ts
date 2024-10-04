export interface NormalizedProduct {
  id: string
  title: string
  price: number
  image: string
  url: string
  source: "MercadoLibre" | "Amazon"
}

export default defineEventHandler(async (event) => {
  const { query } = getQuery(event)

  if (!query) {
    throw createError({
      statusCode: 400,
      statusMessage: "Query is required",
    })
  }

  try {
    const data = await $fetch<any>(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)

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
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    })
  }
})
