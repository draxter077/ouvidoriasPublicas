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

    const ob = {info: {title: "TESTE", time: "Conteúdo do site atualizado às 00/00/2022 às 10h41"}, text: "testesitesitesiets", imgs: []}

    lower.appendChild(option("Sobre nós", lower.className, ob))
    lower.appendChild(option("Links", lower.className, ob))
    lower.appendChild(option("Bibliografias", lower.className, ob))
    return(lower)
}