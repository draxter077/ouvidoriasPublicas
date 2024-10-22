import menu from "./menu/main.js"

export default function body(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            padding: 20px;
            overflow-y: scroll;
        }`

    const body = createElementToPage(undefined, "div", style)
    body.appendChild(menu(body.className))
    return(body)
}