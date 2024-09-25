import prior from "./prior/main.js"
import info from "./info/main.js"

export default function menu(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenu{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            padding: 20px 25px;
            border-radius: 15px;
            font-size: 15px;
        }`


    const menu = document.createElement("div")
    menu.className = "initContentSliderLeftSideBodyMenu"
    menu.appendChild(prior())
    menu.appendChild(info())
    return(menu)
}