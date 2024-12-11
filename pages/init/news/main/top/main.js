import search from "./search/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }`

    const top = createElementToPage(undefined, "div", style)
    top.appendChild(search())
    return(top)
}