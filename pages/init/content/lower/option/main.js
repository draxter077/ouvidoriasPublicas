import top from "./top/main.js"
import body from "./body/main.js"

export default function option(){
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

    const option = createElementToPage(undefined, "div", style)
    option.appendChild(top())
    option.appendChild(body())
    return(option)
}