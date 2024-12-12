import list from "./list/main.js"

export default function right(){
    let style = `
        {
            width: 50%;
            height: 100%;
            overflow: hidden;
        }`

    const right = createElementToPage(undefined, "div", style)
    right.appendChild(list())
    return(right)
}