export const getGifs = async(category) => {
  const limit = 5;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=8hPhdpBd8Cu2gmLROO4MmLuS2ZSSGBKH&q=${category}&limit=${limit}`

  const respuesta = await fetch(url);

  const { data = [] } = await respuesta.json();

  const gifsNuevas = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }
  })
  return gifsNuevas;
}


// 8hPhdpBd8Cu2gmLROO4MmLuS2ZSSGBKH