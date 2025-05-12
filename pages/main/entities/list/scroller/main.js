import option from "./option/main.js"

export default function scroller(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const scroller = cE("div", style)

    for(let i = 0; i < 100; i++){
        scroller.appendChild(option())
    }

    return(scroller)
}