import menu from "./menu/main.js"

export default function body(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBody{
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            padding: 20px;
        }`

    const body = document.createElement("div")
    body.className = "initContentSliderLeftSideBody"
    body.appendChild(menu())
    return(body)
}