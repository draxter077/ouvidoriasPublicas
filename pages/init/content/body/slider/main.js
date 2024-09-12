import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function slider(){
    const slider = document.createElement("div")
    slider.className = "width200 height100 flexRow"
    slider.id = "1"
    
    slider.appendChild(leftSide())
    slider.appendChild(rightSide())

    return(slider)
}