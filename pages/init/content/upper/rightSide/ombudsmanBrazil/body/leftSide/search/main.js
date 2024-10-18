import input from "./input/main.js"

export default function search(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideSearch{
            width: 100%;
        }
            
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideSearch{
                margin: 10px 0px 0px 0px;
            }
        }`

    const search = document.createElement("div")
    search.className = "initContentSliderRightSideOmbudsmanBrazilBodyLeftSideSearch"
    search.appendChild(input())
    return(search)
}