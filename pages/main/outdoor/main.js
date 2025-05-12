import scroller from "./scroller/main.js"
import articles from "./articles/main.js"

export default function outdoor(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:fit-content;
            overflow-x:hidden;
            margin:20px 0px 0px 0px;
        }`

    const outdoor = cE("div", style)
    outdoor.appendChild(scroller())
    outdoor.appendChild(articles())
    return(outdoor)
}