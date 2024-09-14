import slider from "./slider/main.js"

export default function background(){
    const background = document.createElement("div")
    background.className = "width100dvw height100 overflowHidden animationFadeInDelay0"
    background.appendChild(slider())
    return(background)
}