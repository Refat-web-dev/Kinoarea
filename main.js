import { header } from "./modules/header";
import { useHttp } from "./modules/https.request";
import { reloadCards } from "./modules/reload";
import axios from "axios"

let body = document.body

header()

const { request } = useHttp()

request(`/movie/popular`, 'get')
    .then(res => {
        console.log(res.data.results);
        reloadCards(res.data.results.slice(0, 8), cards)
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
    })

let tabs = document.querySelectorAll(".tabs li")

tabs.forEach(tab => {

    tab.onclick = () => {
        tabs.forEach(tab => tab.classList.remove("active_tab"))

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

