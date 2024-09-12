import menu from "./menu/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "width80 height100 flexRow alignItemsCenter justifyContentFlexEnd animationFadeIn margin20px0px0px0px"
    body.appendChild(menu())
    return(body)
}