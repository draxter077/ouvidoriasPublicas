import top from "./top/main.js"
import body from "./body/main.js"

export default function rule(ob){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0px 0px 5px 0px var(--colorBlack);
        }`

    const rule = createElementToPage(undefined, "div", style)
    rule.appendChild(top())
    rule.appendChild(body(ob))
    return(rule)
}