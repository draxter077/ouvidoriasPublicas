import search from "./search/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0px 0px 10px 0px;
        }`

    const top = createElementToPage(undefined, "div", style)
    top.appendChild(search())
    return(top)
}