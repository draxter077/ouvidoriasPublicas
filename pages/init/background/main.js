import slider from "./slider/main.js"

export default function background(){
    document.getElementsByTagName('style')[0].innerHTML += `
        .initBackground{
            width: 100%;
            height: 100%;
            overflow: hidden;
            opacity: 0;
            animation: fadeIn var(--transitionTime) var(--animationDelay0) forwards;
        }`

    const background = document.createElement("div")
    background.className = "initBackground"
    background.appendChild(slider())
    return(background)
}