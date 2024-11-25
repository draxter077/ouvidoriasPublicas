import option from "./option/main.js"
import news from "./news.js"
import pubs from "./pubs.js"
import events from "./events.js"

export default function upper(){
    let style = `
        {
            width: 80%;
            height: 90%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }
        :responsive{
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: fit-content;
            width: 100%;
        }`

    const upper = createElementToPage(undefined, "div", style)
    upper.appendChild(option("Notícias", news))
    upper.appendChild(option("Publicações", pubs))
    upper.appendChild(option("Eventos", events))
    return(upper)
}