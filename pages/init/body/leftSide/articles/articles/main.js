import article from "./article/main.js"

export default function articles_(){
    const articles = document.createElement("div")
    articles.className = "initBodyLeftSideArticlesArticles"
    articles.appendChild(article())
    articles.appendChild(article())
    articles.appendChild(article())
    articles.appendChild(article())
    articles.appendChild(article())
    articles.appendChild(article())
    return(articles)
}