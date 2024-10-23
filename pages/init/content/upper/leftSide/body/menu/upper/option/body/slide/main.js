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
    const slide = createElementToPage(parentClass+">div", "div", style)
    slide.appendChild(option("https://www.ibe.edu.br/wp-content/uploads/2018/11/255772-8-tecnicas-para-se-destacar-em-uma-reuniao-de-negocios.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))
    slide.appendChild(option(undefined, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    slide.appendChild(option(undefined, "teste"))
    return(slide)
}