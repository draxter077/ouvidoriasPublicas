import option from "./option/main.js"

export default function slide(parentClass){
    let style = `
        {
            height: 100%;
            width: 100%;
            padding: 10px;
            overflow: scroll;
        }
    `
    const slide = createElementToPage(parentClass+">div", "div", style)
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    slide.appendChild(option("teste"))
    return(slide)
}