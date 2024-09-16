import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function slider(){
    const slider = document.createElement("div")
    slider.className = "width200 height100 positionFixed flexRow top0"
    slider.id = "initBodySlider"
    slider.appendChild(leftSide())
    slider.appendChild(rightSide())
    return(slider)
}