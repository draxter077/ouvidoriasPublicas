import slider from "./slider/main.js"

export default function content(){
    const content = document.createElement("div")
    content.className = "width100 height100 positionFixed top0"
    content.appendChild(slider())
    return(content)
}