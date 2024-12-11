import upper from "./upper/main.js"
import lower from "./lower/main.js"

export default function menu(parentClass){
    let style = `
        {
            display: flex;
            flex-direction: column; 
            align-items: center;
            width: 100%;
            height: 100%;
        }`

    const menu = createElementToPage(parentClass+">div", "div", style)
    menu.appendChild(upper())
    menu.appendChild(lower())
    return(menu)
}