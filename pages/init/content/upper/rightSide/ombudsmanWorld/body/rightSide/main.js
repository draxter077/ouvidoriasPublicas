import option from "./option/main.js"
import countries from './countries/main.js'

export default function rightSide(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyRightSide{
            width: 50%;
            height: 90%;
            padding: 10px;
            overflow: scroll;
        }
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanWorldBodyRightSide{
                width: 100%;
                height: 100%;
            }
        }`

    const rightSide = document.createElement("div")
    rightSide.className = "initContentSliderRightSideOmbudsmanWorldBodyRightSide"
    const cs = countries.countries;
    for(let i = 0; i < cs.length; i++){
        rightSide.appendChild(option(cs[i].name, cs[i].info))
    }
    return(rightSide)
}