import title from "./title/main.js"
import articles_ from "./articles/main.js"

export default function articles(){
    const articles = document.createElement("div")
    articles.className = "initBodyLeftSideArticles"
    articles.appendChild(title())
    articles.appendChild(articles_())
    return(articles)
}