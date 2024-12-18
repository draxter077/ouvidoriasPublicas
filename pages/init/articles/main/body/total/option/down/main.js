import place from "./place/main.js"
import date from "./date/main.js"

export default function down(d, l){
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
    down.appendChild(place(l))
    down.appendChild(date(d))
    return(down)
}