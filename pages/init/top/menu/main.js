import option from "./option/main.js"

export default function menu(){
    const menu = document.createElement("div")
    let os = ["Mapa Mundi", "Mapa Brasil"]
    for(let i = 0; i < os.length; i++){
        menu.appendChild(option(os[i]))
    }
    return(menu)
}