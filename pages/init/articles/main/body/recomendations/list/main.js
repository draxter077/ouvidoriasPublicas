import main from "./main/main.js"
import option from "./option/main.js"
import articles from "./articles.js"

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
    list.appendChild(main(articles.main))
    for(let i = 0; i < articles.list.length; i++){
        let e = articles.list[i]
        list.appendChild(option(e.title, e.date, e.author, e.link))
    }
    return(list)
}