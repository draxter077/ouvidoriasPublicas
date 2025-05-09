import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
        }
        :responsive{
            flex-wrap:wrap;
            justify-content:center;
            margin:10px 0px 0px 0px;
        }`

    const links = cE("div", style)
    links.appendChild(link("História"))
    links.appendChild(link("Entidades"))
    links.appendChild(link("Notícias"))
    links.appendChild(link("Artigos"))
    links.appendChild(link("Sobre"))
    return(links)
}