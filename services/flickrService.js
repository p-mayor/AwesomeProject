import { REACT_APP_FLICKR_API_KEY } from '@env'

function flickrService() {
    const proxyServer = "https://shrouded-mountain-15003.herokuapp.com/"
    const domain = "https://flickr.com"
    const path = "/services/rest/"
    const apiKey = REACT_APP_FLICKR_API_KEY
    console.log(apiKey)
    const queryString = `api_key=${apiKey}&format=json&nojsoncallback=1`
    + `&method=flickr.photos.search&safe_search=1&per_page=5`
    + `&lat=25.7617&lon=-80.1918&text=sunset`

    const URL = `${proxyServer + domain + path}?${queryString}`

    return fetch(URL).then((response) => {
        return response.json()
    }).catch(err=>{
        console.warn(err.message)
    })
}

export default flickrService;