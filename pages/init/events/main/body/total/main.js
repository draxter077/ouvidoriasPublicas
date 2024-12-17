import option from "./option/main.js"
import events from "./events.js"

export default function total(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            overflow: scroll;
            width: 70%;
            height: 100%;
            padding: 5px 5px 5px 10px;
        }
        :responsive{
            width: 100%;
        }`

    const total = createElementToPage(undefined, "div", style)
    for(let i = 0; i < events.length; i++){
        let e = events[i]
        total.appendChild(option(e.title, e.date, e.location, e.link))
    }
    return(total)
}