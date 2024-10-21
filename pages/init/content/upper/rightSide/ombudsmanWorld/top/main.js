import back from "./back/main.js"

export default function top(){
    let style = `
        {
            margin: 0px 0px 10px 0px;
        }`
    
    const top = createElementToPage(undefined, "div", style)
    top.appendChild(back())
    return(top)
}