import img from "./img/main.js"

export default function imgs(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }`

    const imgs = createElementToPage(undefined, "div", style)
    imgs.appendChild(img("https://www.gov.br/ouvidorias/pt-br/assuntos/noticias/2019/07/controladoria-marca-presenca-na-x-asamblea-general-del-instituto-latinoamericano-de-ombudsman-ilo/img-20190718-wa0031.jpg"))
    imgs.appendChild(img("https://turkmenportal.com/images/uploads/blogs/webp/150886ee4c21d7dca3cf2702e5f688b2.webp"))
    imgs.appendChild(img("https://www.theioi.org/images/9h60o/lblarge/Singning-of-MoU-between-ILO-and-IOI-Oct-2014.png?v=1630447473"))
    imgs.appendChild(img("https://www.theioi.org/images/7etvn/lblarge/Dr-Carlos-R-Constenla-and-Dame-Beverley-A-Wakem.png?v=1630447473"))
    imgs.appendChild(img("https://www.gov.br/planalto/en/latest-news/2024/06/president-lula-meets-with-ilo-director-general-gilbert-houngbo/lula-e-diretor-da-oit.jpg/@@images/4b90f986-1280-468f-97c5-81137e7b11cc.jpeg"))
    imgs.appendChild(img("https://www.mpal.mp.br/wp-content/uploads/2024/05/reuniao-ouvidores.jpg"))
    imgs.appendChild(img("https://defensoria.org.ar/wp-content/uploads/2022/11/ILO.jpg"))
    return(imgs)
}