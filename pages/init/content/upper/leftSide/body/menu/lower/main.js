import option from "./option/main.js"

export default function lower(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            height: fit-content;
            margin: 10px 0px 0px 0px;
        }
        :responsive{
            flex-direction: column;
            width: 100%;
            margin: 0px;
        }`

    const lower = createElementToPage(undefined, "div", style)

    const aboutUs = {info: {title: "Sobre nós", time: "Desenvolvido em 25/10/2024"}, text: "<p>Algum texto a ser definido pelo Dr. Manoel</p>", imgs: []}
    const links = {info: {title: "Links relevantes", time: "Atualizado em 25/10/2024"}, text: "<a href='https://www.camargoegomes.com/' target='_blank'>Camargo e Gomes Advogados</a>", imgs: []}
    const biblio = {info: {title: "Bibliografias", time: "Conteúdo do site atualizado às 00/00/2022 às 10h41"}, text: "Bibliografias a serem definidas", imgs: []}
    const history = {info: {title: "História", time: "Conteúdo do site atualizado às 00/00/2022 às 10h41"}, text: "História do ombudsman", imgs: []}
    
    lower.appendChild(option("Sobre nós", lower.className, aboutUs))
    lower.appendChild(option("Links", lower.className, links))
    lower.appendChild(option("Bibliografias", lower.className, biblio))
    lower.appendChild(option("História", lower.className, history))
    return(lower)
}