import option from "./option/main.js"
import news from "./news/main.js"

export default function upper(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpper{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideBodyMenuUpper{
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                height: fit-content;
            }
        }
    `

    const upper = document.createElement("div")
    upper.className = "initContentSliderLeftSideBodyMenuUpper"
    upper.appendChild(news())
    upper.appendChild(option("Postagens"))
    upper.appendChild(option("Eventos"))
    return(upper)
}