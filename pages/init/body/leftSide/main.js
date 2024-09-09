import posts from "./posts/main.js"
import events from "./events/main.js"
import articles from "./articles/main.js"

export default function leftSide(){
    const leftSide = document.createElement("div")
    leftSide.appendChild(posts())
    leftSide.appendChild(events())
    leftSide.appendChild(articles())
    return(leftSide)
}