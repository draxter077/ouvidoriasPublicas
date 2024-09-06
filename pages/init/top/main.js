import title from "./title/main.js"

export default function top(){
    const top = document.createElement("div")
    top.className = "initTop"
    top.appendChild(title())
    return(top)
}