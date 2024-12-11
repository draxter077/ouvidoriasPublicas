import author from "./author/main.js"
import date from "./date/main.js"

export default function down(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            font-size: 12px;
            font-style: italic;
        }`

    const down = createElementToPage(undefined, "div", style)
    down.appendChild(author())
    down.appendChild(date())
    return(down)
}