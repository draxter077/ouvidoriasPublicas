import logo from "./logo/main.js"
import links from "./links/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            background:var(--colorBlue);
            padding:10px 20px;
            box-shadow:0px 0px 5px 0px var(--colorBlue);
        }
        :responsive{
            flex-direction:column;
            padding:10px;
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    head.appendChild(links())
    return(head)
}