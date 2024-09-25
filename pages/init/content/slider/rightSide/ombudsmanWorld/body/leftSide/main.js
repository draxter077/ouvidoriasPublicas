import globe from "./globe/main.js"
import search from "./search/main.js"

export default function leftSide(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSide{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            height: 90%;
        }  
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanWorldBodyLeftSide{
                width: 100%;
                height: fit-content;
            }
        }`

    const leftSide = document.createElement("div")
    leftSide.className = "initContentSliderRightSideOmbudsmanWorldBodyLeftSide"
    leftSide.appendChild(globe())
    leftSide.appendChild(search())
    return(leftSide)
}