import author from "./author/main.js"
import date from "./date/main.js"

export default function down(d, a){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            font-size: 10px;
            font-style: italic;
        }`

    const down = createElementToPage(undefined, "div", style)
    down.appendChild(author(a))
    down.appendChild(date(d))
    return(down)
}