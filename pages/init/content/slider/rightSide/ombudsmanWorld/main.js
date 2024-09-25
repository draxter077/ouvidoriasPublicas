import top from "./top/main.js"
import body from "./body/main.js"

export default function ombudsmanWorld(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorld{
            width: 100%;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
            padding: 10px 15px;
        }`

    const ombudsmanWorld = document.createElement("div")
    ombudsmanWorld.className = "initContentSliderRightSideOmbudsmanWorld"
    ombudsmanWorld.appendChild(top())
    ombudsmanWorld.appendChild(body())
    return(ombudsmanWorld)
}