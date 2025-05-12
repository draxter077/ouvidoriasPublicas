import title from "./title/main.js"
import section from "./section/main.js"


import text from "./text.js"

export default function history(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:95%;
            margin:40px 0px 0px 0px;
        }`

    const history = cE("div", style)
    history.id = "história"
    history.appendChild(title())

    for(let i = 0; i < text.length; i++){
        let t = 1
        if(i%2==0){t = 0}
        history.appendChild(section(text[i].text, text[i].src, text[i].w, text[i].t, t))
    }
    return(history)
}