export default defineEventHandler(async (event) => {
  const id = event.context.params.id

  try {
    const [product, description] = await Promise.all([
      $fetch(`https://api.mercadolibre.com/items/${id}`),
      $fetch(`https://api.mercadolibre.com/items/${id}/description`),
    ])

    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product Not Found",
      })
    }

    const normalizedProduct = {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      image: product?.pictures[0].url,
      url: product?.permalink,
      source: "MercadoLibre",
      description: description?.plain_text || "",
    }

    return normalizedProduct
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Internal Server Error",
    })
  }
})
