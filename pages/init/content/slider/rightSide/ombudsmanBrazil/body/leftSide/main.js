import globe from "./globe/main.js"
import search from "./search/main.js"

export default function leftSide(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSide{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            height: 90%;
        }  
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanBrazilBodyLeftSide{
                width: 100%;
                height: fit-content;
            }
        }`

    const leftSide = document.createElement("div")
    leftSide.className = "initContentSliderRightSideOmbudsmanBrazilBodyLeftSide"
    leftSide.appendChild(globe())
    leftSide.appendChild(search())
    return(leftSide)
}