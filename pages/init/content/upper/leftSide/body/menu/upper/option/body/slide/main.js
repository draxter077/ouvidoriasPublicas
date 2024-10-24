import option from "./option/main.js"

export default function slide(parentClass){
    let style = `
        {
            height: 100%;
            width: 100%;
            padding: 0px 10px;
            overflow: scroll;
        }
    `

    const tex = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
        </p>`

    const ims = ["https://www.gov.br/ouvidorias/pt-br/assuntos/noticias/2019/07/controladoria-marca-presenca-na-x-asamblea-general-del-instituto-latinoamericano-de-ombudsman-ilo/img-20190718-wa0031.jpg", 
        "https://turkmenportal.com/images/uploads/blogs/webp/150886ee4c21d7dca3cf2702e5f688b2.webp",
        "https://www.theioi.org/images/9h60o/lblarge/Singning-of-MoU-between-ILO-and-IOI-Oct-2014.png?v=1630447473",
        "https://www.theioi.org/images/7etvn/lblarge/Dr-Carlos-R-Constenla-and-Dame-Beverley-A-Wakem.png?v=1630447473",
        "https://www.gov.br/planalto/en/latest-news/2024/06/president-lula-meets-with-ilo-director-general-gilbert-houngbo/lula-e-diretor-da-oit.jpg/@@images/4b90f986-1280-468f-97c5-81137e7b11cc.jpeg",
        "https://www.mpal.mp.br/wp-content/uploads/2024/05/reuniao-ouvidores.jpg",
        "https://defensoria.org.ar/wp-content/uploads/2022/11/ILO.jpg"]

    const ob = {info: {title: "Ipsum Literis", time: "21/10/2024 às 10h42"},text: tex,imgs: ims}

    const slide = createElementToPage(parentClass+">div", "div", style)
    slide.appendChild(option("https://www.ibe.edu.br/wp-content/uploads/2018/11/255772-8-tecnicas-para-se-destacar-em-uma-reuniao-de-negocios.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", ob))
    slide.appendChild(option(undefined, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    slide.appendChild(option(undefined, "teste", ob))
    return(slide)
}