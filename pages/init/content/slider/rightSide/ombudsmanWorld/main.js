import top from "./top/main.js"
import body from "./body/main.js"

export default function ombudsmanWorld(){
    const ombudsmanWorld = document.createElement("div")
    ombudsmanWorld.className = "width100 height100 backgroundColorWhite borderRadius15px padding10px15px"
    ombudsmanWorld.appendChild(top())
    ombudsmanWorld.appendChild(body())
    return(ombudsmanWorld)
}