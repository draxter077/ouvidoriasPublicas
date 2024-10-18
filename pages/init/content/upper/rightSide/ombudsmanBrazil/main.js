import top from "./top/main.js"
import body from "./body/main.js"

export default function ombudsmanBrazil(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazil{
            width: 100%;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
            padding: 10px 15px;
            box-shadow: 0px 0px 5px 0px var(--colorBlack);
        }`

    const ombudsmanBrazil = document.createElement("div")
    ombudsmanBrazil.className = "initContentSliderRightSideOmbudsmanBrazil"
    ombudsmanBrazil.appendChild(top())
    ombudsmanBrazil.appendChild(body())
    return(ombudsmanBrazil)
}