import { header } from "../../modules/header";
import { useHttp } from "../../modules/https.request";

header()


const movie_id = location.search.split('=').at(-1)


const { request } = useHttp()

request(`/movie/${movie_id}`, 'get')
    .then(res => console.log(res))

