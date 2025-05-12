import scroller from "./scroller/main.js"

export default function search(){
    let style = `
        {
            width:100%;
            height:100%;
            overflow-y:scroll;
        }`

    const search = cE("div", style)
    search.appendChild(scroller())
    return(search)
}