import option from "./option/main.js"

export default function lower(){
    let style = `
        {
            height: 50%;
            width: 100%;
            padding: 20px;
        }
    `

    const lower = createElementToPage(undefined, "div", style)
    lower.appendChild(option())
    return(lower)
}