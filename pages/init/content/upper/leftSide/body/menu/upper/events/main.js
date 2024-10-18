import title from "./title/main.js"
import body from "./body/main.js"

export default function events(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 25%;
            height: 100%;
            margin: 0px 0px 10px 0px;
        }`
    let mobStyle = `
        {
            width: 100%;
        }
    `

    const events = createElementToPage(undefined, "div", style, mobStyle)
    events.appendChild(title())
    events.appendChild(body())
    return(events)
}