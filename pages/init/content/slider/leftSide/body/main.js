import menu from "./menu/main.js"

export default function body(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBody{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            padding: 20px;
        }`

    const body = document.createElement("div")
    body.className = "initContentSliderLeftSideBody"
    body.appendChild(menu())
    return(body)
}