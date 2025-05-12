import section from "./section/main.js"

export default function news_articles(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            width:95%;
            margin:40px 0px 0px 0px;
        }
        :responsive{
            flex-direction:column;
        }`

    const news_articles = cE("div", style)
    news_articles.appendChild(section("Notícias"))
    news_articles.appendChild(section("Artigos"))
    return(news_articles)
}