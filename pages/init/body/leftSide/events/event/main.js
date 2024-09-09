import photo from "./photo/main.js"
import title from "./title/main.js"

export default function event(){
    const event = document.createElement("div")
    event.className = "initBodyEventsEvent"
    event.appendChild(photo())
    event.appendChild(title())
    return(event)
}