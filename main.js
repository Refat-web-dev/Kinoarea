import { header } from "./modules/header";
import { useHttp } from "./modules/https.request";
import { reloadCards, reloadTrailers } from "./modules/reload";
import axios from "axios"

let body = document.body

header()

const { request } = useHttp()

let some_trailers = document.querySelector(".some_trailers")
let trailers_player_btn = document.querySelector(".trailers_player_btn")
let popular_films = document.querySelector(".popular_films")


request(`/movie/popular`, 'get')
    .then(res => {

        reloadCards(res.data.results.slice(0, 8), cards)
        reloadCards(res.data.results.slice(0, 4), popular_films)

        let cards_images = document.querySelectorAll(".card_img")

        cards_images.forEach(card_img => {

            let key = card_img.getAttribute("data-backdrop")

            card_img.onmouseenter = () => {
                setTimeout(() => {
                    body.style.backgroundImage = key
                }, 500);
            }

            card_img.onmouseleave = () => {
                body.style.backgroundImage = `url("/images/joker.png")`
            }
        })

        reloadTrailers(res.data.results, some_trailers)
    })

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmRhODA1NGUyN2ExZTk1YTJhMTJkZDE5OThjYWZiYiIsInN1YiI6IjY0YmU3MzQzZTlkYTY5MDEwZDQxOTAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L7H6NDnAI8ToptlYW-nNps0pq-TcMn_e0IwlZDIBjkI'
    }
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });

let tabs = document.querySelectorAll(".tabs li")

tabs.forEach(tab => {

    tab.onclick = () => {
        tabs.forEach(tab => tab.classList.remove("active_tab"))

        tab.classList.add("active_tab")
    }

})
let tabs_time = document.querySelectorAll(".tabs_time li")

tabs_time.forEach(tab => {

    tab.onclick = () => {
        tabs_time.forEach(tab => tab.classList.remove("active_tab"))

        tab.classList.add("active_tab")
    }

})

let cards = document.querySelector(".cards")

let social_icons = [
    "vk",
    "instagram",
    "facebook",
    "twitter"
]

let social = document.querySelector(".social_sub")

let more = document.createElement("li")

more.innerHTML = "..."
more.style.cursor = "pointer"
more.style.paddingBottom = "10px"

for (let icon of social_icons) {
    let li_social = document.createElement("li")
    let a_social = document.createElement("a")
    let icon_social = document.createElement("img")

    icon_social.src = `/icons/${icon}.svg`
    icon_social.alt = `${icon}`
    a_social.href = "#"

    a_social.append(icon_social)
    li_social.append(a_social)
    social.append(li_social, more)
}