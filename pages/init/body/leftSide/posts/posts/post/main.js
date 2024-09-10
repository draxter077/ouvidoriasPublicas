import title from "./title/main.js"
import authorDate from "./authorDate/main.js"

export default function post(){
    const post = document.createElement("div")
    post.appendChild(title())
    post.appendChild(authorDate())
    return(post)
}