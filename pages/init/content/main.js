import slider from "./slider/main.js"

export default function content(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContent{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0%;
            opacity: 0;
            animation: fadeIn var(--transitionTime) var(--animationDelay1) forwards;
        }`

    const content = document.createElement("div")
    content.className = "initContent"
    content.appendChild(slider())
    return(content)
}