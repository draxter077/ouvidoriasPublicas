import road from "./road/main.js"

export default function apresentation(){
    let style = `
        {
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 100dvh;
            padding: 0px 10px 10px;
        }` 

    const apresentation = createElementToPage(undefined, "div", style)
    apresentation.id = "Apresentação"
    apresentation.appendChild(road())
    return(apresentation)
}