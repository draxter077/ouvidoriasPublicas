import option from "./option/main.js"

export default function lower(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 50%;
            height: fit-content;
            margin: 10px 0px 0px 0px;
        }
        :responsive{
            flex-direction: column;
            width: 100%;
            margin: 0px;
        }`

    const lower = createElementToPage(undefined, "div", style)
    lower.appendChild(option("Sobre nós", lower.className))
    lower.appendChild(option("Links", lower.className))
    lower.appendChild(option("Bibliografias", lower.className))
    return(lower)
}