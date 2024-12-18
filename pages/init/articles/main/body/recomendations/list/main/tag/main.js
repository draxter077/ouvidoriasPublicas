import up from "./up/main.js"
import down from "./down/main.js"

export default function tag(t, d, a){
    let style = `
        {
            position: absolute;
            display: flex;
            flex-direction: column;
            text-align: left;
            bottom: 0%;
            width: 100%;
            background: var(--colorWhite);
            border-radius: 0px 0px 5px 5px;
            box-shadow: 0px 0px 5px 0px var(--colorBlack);
            padding: 5px 10px;
        }`

    const tag = createElementToPage(undefined, "div", style)
    tag.appendChild(up(t))
    tag.appendChild(down(d, a))
    return(tag)
}