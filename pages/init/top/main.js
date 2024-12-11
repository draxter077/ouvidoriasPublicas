import title from "./title/main.js"
import menu from "./menu/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 2;
            width: 100%;
            padding: 5px 50px;
            background: var(--colorWhite);
            box-shadow: 0px 0px 10px 0px var(--colorBlack);
        }`

    const top = createElementToPage(undefined, "div", style)
    top.appendChild(title())
    top.appendChild(menu())
    return(top)
}