import info from "./info/main.js"

export default function body(i){
    let style = `
        {
            border-radius: 0px 0px 15px 15px;
            border: 1px solid var(--colorBlue);
            border-top: none;
            padding: 15px 20px;
            color: var(--colorBlue);
            margin: 0px 15px;
        }`

    const body = createElementToPage(undefined, "div", style)

    for(let j = 0; j < i.length; j++){
        body.appendChild(info(i[j]))
    }

    return(body)
}