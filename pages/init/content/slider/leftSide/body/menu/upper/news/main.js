import title from "./title/main.js"
import body from "./body/main.js"

export default function news(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperNews{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 25%;
            height: 100%;
        }
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideBodyMenuUpperNews{
                width: 100%;
            }
        }
    `

    const news = document.createElement("div")
    news.className = "initContentSliderLeftSideBodyMenuUpperNews"
    news.appendChild(title())
    news.appendChild(body())
    return(news)
}