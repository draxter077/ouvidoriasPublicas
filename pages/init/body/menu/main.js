import option from "./option/main.js"

export default function menu(){
    const menu = document.createElement("div")
    let op = ["História", "Mapa mundi", "Mapa Brasil", "Eventos"]
    for(let i = 0; i < op.length; i++){
        menu.appendChild(option(op[i]))
    }
    return(menu)
}