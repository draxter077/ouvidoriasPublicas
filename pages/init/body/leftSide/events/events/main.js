import event from "./event/main.js"

export default function events_(){
    const events = document.createElement("div")
    events.className = "initBodyLeftSideEventsEvents"
    events.appendChild(event())
    events.appendChild(event())
    events.appendChild(event())
    events.appendChild(event())
    events.appendChild(event())
    return(events)
}