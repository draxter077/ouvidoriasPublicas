import article from "./article/main.js"

export default function articles(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-evenly;
            width:100%;
            margin:10px 0px 0px 0px;
        }`

    const articles = cE("div", style)
    articles.appendChild(article())
    articles.appendChild(article())
    articles.appendChild(article())
    articles.appendChild(article())
    return(articles)
}