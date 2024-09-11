import img from "./img/main.js"

export default function slider(){
    const slider = document.createElement("div")
    slider.className = "flexColumn alignItemsCenter height100"
    slider.appendChild(img())
    return(slider)
}