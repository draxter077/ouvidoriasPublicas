import title from "./title/main.js"
import body from "./body/main.js"

export default function option(t, ob){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 30%;
            height: 100%;
            margin: 0px 0px 10px 0px;
        }
        :responsive{
            width: 100%;
        }
    `

    const option = createElementToPage(undefined, "div", style)
    option.appendChild(title(t))
    option.appendChild(body(ob))
    return(option)
}