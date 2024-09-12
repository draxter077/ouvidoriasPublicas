import top from "./top/main.js"
import body from "./body/main.js"

export default function content(){
    const content = document.createElement("div")
    content.className = "width100 height100 positionFixed flexColumn alignItemsCenter top0"
    content.appendChild(top())
    content.appendChild(body())
    return(content)
}