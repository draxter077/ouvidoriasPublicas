import option from "./option/main.js"

export default function body(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperNewsBody{
            height: 300px;
            background: var(--colorWhite);
            border-radius: 0px 0px 15px 15px;
            max-height: 0px;
            overflow: scroll;
            transition: max-height var(--transitionTime), border-radius var(--transitionTime);
        }
    `

    const body = document.createElement("div")
    body.className = "initContentSliderLeftSideBodyMenuUpperNewsBody"
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    body.appendChild(option("Teste"))
    return(body)
}