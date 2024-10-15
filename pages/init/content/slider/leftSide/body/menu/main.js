import upper from "./upper/main.js"
import lower from "./lower/main.js"

export default function menu(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBody>div{
            display: flex;
            flex-direction: column; 
            align-items: center;
            width: 100%;
            height: 100%;
        }`

    const menu = document.createElement("div")
    menu.appendChild(upper())
    menu.appendChild(lower())
    return(menu)
}