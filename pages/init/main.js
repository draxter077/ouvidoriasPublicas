import top from "./top/main.js"
import apresentation from "./apresentation/main.js"
import maps from "./maps/main.js"
import events from "./events/main.js"
import news from "./news/main.js"
import articles from "./articles/main.js"

export default function init(){
    let style = `
        {
            width: 100%;
            height: 100%;
        }`

    const init = createElementToPage(undefined, "div", style)
    init.appendChild(top())
    init.appendChild(apresentation())
    init.appendChild(maps())
    init.appendChild(events())
    init.appendChild(news())
    init.appendChild(articles())
    return(init)
}