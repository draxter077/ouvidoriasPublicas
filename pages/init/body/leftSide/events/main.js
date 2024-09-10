import title from "./title/main.js"
import events_ from "./events/main.js"

export default function events(){
    const events = document.createElement("div")
    events.className = "initBodyLeftSideEvents"
    events.appendChild(title())
    events.appendChild(events_())
    return(events)
}