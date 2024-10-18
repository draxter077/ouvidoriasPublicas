import title from "./title/main.js"
import data from "./data/main.js"

export default function info(i){
    document.getElementsByTagName("style")[0].innerHTML += `
    .initContentSliderRightSideOmbudsmanBrazilBodyRightSideOptionDetailBodyInfo{
        display: flex;
        flex-direction: column;
    }`

    const info = document.createElement("div")
    info.className = "initContentSliderRightSideOmbudsmanBrazilBodyRightSideOptionDetailBodyInfo"
    info.appendChild(title(i.title))
    info.appendChild(data(i.data))
    return(info)
}