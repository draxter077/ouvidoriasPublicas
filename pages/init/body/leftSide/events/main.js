import title from "./title/main.js"
import event from "./event/main.js"

export default function events(){
    const events = document.createElement("div")
    events.appendChild(title())
    events.appendChild(event())
    events.appendChild(event())
    return(events)
}