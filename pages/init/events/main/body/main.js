import option from "./option/main.js"

export default function body(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            height: 95%;
            padding: 5px;
            overflow: scroll;
            margin: 20px 0px 0px 0px;
        }`

    const body = createElementToPage(undefined, "div", style)
    for(let i = 0; i < 2000; i++){
        body.appendChild(option())
    }
    return(body)
}