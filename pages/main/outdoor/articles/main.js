import article from "./article/main.js"

export default function articles(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-evenly;
            width:100%;
            margin:30px 0px 0px 0px;
        }`

    const articles = cE("div", style)
    articles.appendChild(article("Modelo de Ouvidorias Públicas no Brasil", "Manoel Eduardo Alves Camargo e Gomes"))
    articles.appendChild(article("Modelo de Ouvidorias Públicas no Brasil", "Manoel Eduardo Alves Camargo e Gomes"))
    articles.appendChild(article("Modelo de Ouvidorias Públicas no Brasil", "Manoel Eduardo Alves Camargo e Gomes"))
    articles.appendChild(article("Modelo de Ouvidorias Públicas no Brasil", "Manoel Eduardo Alves Camargo e Gomes"))
    return(articles)
}