import title from "./title/main.js"
import img from "./img/main.js"
import time from "./time/main.js"

export default function info(){
    let style = `
        {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }`
    
    const info = createElementToPage(undefined, "div", style)
    info.appendChild(title())
    info.appendChild(img())
    info.appendChild(time())
    return(info)
}