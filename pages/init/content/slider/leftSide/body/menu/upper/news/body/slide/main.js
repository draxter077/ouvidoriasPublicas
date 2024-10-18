import option from "./option/main.js"

export default function slide(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperNewsBody>div{
            height: 100%;
            width: 100%;
            padding: 10px;
            overflow: scroll;
        }
    `
    const slide = document.createElement("div")
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