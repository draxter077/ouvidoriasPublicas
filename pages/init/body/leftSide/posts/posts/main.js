import post from "./post/main.js"

export default function posts_(){
    const posts = document.createElement("div")
    posts.className = "initBodyLeftSidePostsPosts"
    posts.appendChild(post())
    posts.appendChild(post())
    posts.appendChild(post())
    posts.appendChild(post())
    posts.appendChild(post())
    posts.appendChild(post())
    return(posts)
}