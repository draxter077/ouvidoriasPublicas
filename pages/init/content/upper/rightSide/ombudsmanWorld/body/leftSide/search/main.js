import input from "./input/main.js"

export default function search(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideSearch{
            width: 100%;
        }
            
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanWorldBodyLeftSideSearch{
                margin: 10px 0px 0px 0px;
            }
        }`

    const search = document.createElement("div")
    search.className = "initContentSliderRightSideOmbudsmanWorldBodyLeftSideSearch"
    search.appendChild(input())
    return(search)
}