import text from "./text/main.js"
import img from "./img/main.js"

export default function section(txt, src, w, t, type){
    let style = `
        {
            display:flex;
            flex-direction:${type == 0 ? "row" : "row-reverse"};
            align-items:center;
            width:95%;
            margin:5px 0px;
        }
        :responsive{
            flex-direction:column;
            width:100%;
        }`

    const section = cE("div", style)
    section.appendChild(text(txt))
    section.appendChild(img(src, w, t))
    return(section)
}