import posts from "./posts/main.js"
import events from "./events/main.js"
import articles from "./articles/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "initBody"
    body.appendChild(posts())
    body.appendChild(events())
    body.appendChild(articles())
    return(body)
}