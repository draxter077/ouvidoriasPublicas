import option from "./option/main.js"

export default function upper(){
    let style = `
        {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }
        :responsive{
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: fit-content;
        }
    `

    const upper = createElementToPage(undefined, "div", style)
    upper.appendChild(option("Notícias"))
    upper.appendChild(option("Publicações"))
    upper.appendChild(option("Eventos"))
    return(upper)
}