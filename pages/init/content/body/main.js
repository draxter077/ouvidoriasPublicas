import menu from "./slider/leftSide/menu/main.js"
import slider from "./slider/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "width100 height100"
    //body.className = "width80 height100 flexRow alignItemsCenter justifyContentFlexEnd animationFadeInDelay2 margin20px0px0px0px"
    body.appendChild(slider())
    return(body)
}