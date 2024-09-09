import title from "./title/main.js"
import post from "./post/main.js"

export default function posts(){
    const posts = document.createElement("div")
    posts.appendChild(title())
    posts.appendChild(post())
    posts.appendChild(post())
    posts.appendChild(post())
    posts.appendChild(post())
    return(posts)
}