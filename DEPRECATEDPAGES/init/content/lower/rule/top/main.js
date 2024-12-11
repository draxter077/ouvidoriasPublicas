import back from "./back/main.js"

export default function top(){
    let style = `
        {
            width: 100%;
        }`
    
    const top = createElementToPage(undefined, "div", style)
    top.appendChild(back())
    return(top)
}