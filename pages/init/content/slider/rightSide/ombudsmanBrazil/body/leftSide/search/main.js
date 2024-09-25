import input from "./input/main.js"

export default function search(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideSearch{
            width: 100%;
        }
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideSearch>input{
            width: 100%;
            border-radius: 10px;
            border: 1px solid var(--colorBlue);
            padding: 10px 15px;
        }`

    const search = document.createElement("div")
    search.className = "initContentSliderRightSideOmbudsmanBrazilBodyLeftSideSearch"
    search.appendChild(input())
    console.log(search)
    return(search)
}