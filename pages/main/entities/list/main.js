import scroller from "./scroller/main.js"

export default function list(){
    let style = `
        {
            width:40%;
            height:500px;
            overflow-y:scroll;
        }
        :responsive{
            width:100%;
            height:200px;
        }`

    const list = cE("div", style)
    list.appendChild(scroller())
    return(list)
}