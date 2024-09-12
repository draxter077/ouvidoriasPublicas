import slider from "./slider/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "width100 height100 animationFadeInDelay2"
    body.appendChild(slider())
    return(body)
}