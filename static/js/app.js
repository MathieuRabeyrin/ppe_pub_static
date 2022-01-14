document.addEventListener("DOMContentLoaded", () => {
  const getData = async () => {
    const APIKEY = "f1417be0"
    const URL = `http://www.omdbapi.com/?s=spider-man&apikey=${APIKEY}`  
    const result = await fetch(URL)
    const data = await result.json()
    return data.Search
  }

  getData()
    .then(data => {
      let list = document.querySelector("ul")

      data.forEach(film =>
        list.innerHTML += `<li><img src="${film.Poster}"></li>`
      );
    })
})