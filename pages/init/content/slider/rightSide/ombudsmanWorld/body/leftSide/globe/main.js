import img from "./img/main.js"

export default function globe(){
    const globe = document.createElement("div")
    globe.className = "width100 flexColumn alignItemsCenter"
    globe.appendChild(img())
    return(globe)
}