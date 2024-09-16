import back from "./back/main.js"

export default function top(){
    const top = document.createElement("div")
    top.className = "width100"
    top.appendChild(back())
    return(top)
}