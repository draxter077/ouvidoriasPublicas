import title from "./title/main.js"
import posts_ from "./posts/main.js"

export default function posts(){
    const posts = document.createElement("div")
    posts.className = "initBodyLeftSidePosts"
    posts.appendChild(title())
    posts.appendChild(posts_())
    return(posts)
}