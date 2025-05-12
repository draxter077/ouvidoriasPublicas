import title from "./title/main.js"
import search from "./search/main.js"

export default function section(t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            width:48%;
            height:400px;
        }
        :responsive{
            width:95%;
            height:300px;
            margin:0px 0px 20px 0px;
        }`

    const section = cE("div", style)
    section.id = t.toLowerCase()
    section.appendChild(title(t))
    section.appendChild(search())
    return(section)
}