let img = import.meta.env.VITE_BASE_IMG

export function reloadCards(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {

        let card = document.createElement("div")
        let card_img = document.createElement("div")
        let rate = document.createElement("div")
        let after = document.createElement("div")
        let span = document.createElement("span")
        let title = document.createElement("h3")
        let genres = document.createElement("p")

        card.className = "card"
        card_img.className = "card_img"
        card_img.style.backgroundImage = `url("${img + item.poster_path}")`
        card_img.setAttribute("data-backdrop", `url("${img + item.backdrop_path}")`)

        rate.className = "rate"
        rate.innerHTML = item.vote_average

        after.className = "after"
        span.innerHTML = "Movie card"

        title.className = "title"
        title.innerHTML = item.title

        genres.className = "genres"
        genres.innerHTML = item.genre_ids

        card.append(card_img, title, genres)
        card_img.append(rate, after)
        after.append(span)
        place.append(card)

        span.onclick = () => {
            location.assign('/pages/movies/?id=' + item.id)
        }

    }

}