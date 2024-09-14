export default function map(){
    const map = document.createElement("div")
    
    let im = document.createElement("img")
    im.className = "height30 width100"
    im.src = "https://draxter077.github.io/ouvidoriasPublicas/globe.jpg"

    map.appendChild(im)
    return(map)
}