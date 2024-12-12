import option from "./option/main.js"

export default function total(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            overflow: scroll;
            width: 70%;
            height: 100%;
            padding: 5px 5px 5px 10px;
        }`

    const total = createElementToPage(undefined, "div", style)
    for(let i = 0; i < 100; i++){
        total.appendChild(option())
    }
    return(total)
}