import top from "./top/main.js"
import history from "./history/main.js"
import maps from "./maps/main.js"
import events from "./events/main.js"
import news from "./news/main.js"
import articles from "./articles/main.js"

import reader from "./reader/main.js"

export default function init(){
    let style = `
        {
            width: 100%;
            height: 100%;
        }`

    const init = createElementToPage(undefined, "div", style)
    init.appendChild(top())
    init.appendChild(history())
    init.appendChild(maps())
    init.appendChild(events())
    init.appendChild(news())
    init.appendChild(articles())
    init.appendChild(reader())
    return(init)
}