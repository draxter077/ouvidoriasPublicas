import title from "./title/main.js"
import time from "./time/main.js"

export default function info(ob){
    let style = `
        {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }`
    
    const info = createElementToPage(undefined, "div", style)
    info.appendChild(title(ob.title))
    info.appendChild(time(ob.time))
    return(info)
}