import main from "./main/main.js"
import option from "./option/main.js"
import news from "./news.js"

export default function list(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 100%;
        }`

    const list = createElementToPage(undefined, "div", style)
    list.appendChild(main(news.main))
    for(let i = 0; i < news.list.length; i++){
        let e = news.list[i]
        list.appendChild(option(e.title, e.date, e.location, e.link))
    }
    return(list)
}