import title from "./title/main.js"
import body from "./body/main.js"

export default function news(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 25%;
            height: 100%;
            margin: 0px 0px 10px 0px;
        }
        :responsive{
            width: 100%;
        }
    `

    const news = createElementToPage(undefined, "div", style)
    news.appendChild(title())
    news.appendChild(body())
    return(news)
}