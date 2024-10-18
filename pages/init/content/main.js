import slider from "./slider/main.js"
import lower from "./lower/main.js"

export default function content(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContent{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 200%;
            position: fixed;
            top: 0%;
            opacity: 0;
            transition: translate var(--transitionTime);
            animation: fadeIn var(--transitionTime) var(--animationDelay1) forwards;
        }`

    const content = document.createElement("div")
    content.className = "initContent"
    content.appendChild(slider())
    content.appendChild(lower())
    return(content)
}