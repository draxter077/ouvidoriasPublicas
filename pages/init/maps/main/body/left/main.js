import globe from "./globe/main.js"

export default function left(){
    let style = `
        {
            width: 50%;
            height: 100%;
            overflow: hidden;
        }
        :responsive{
            width: 100%;    
        }`

    const left = createElementToPage(undefined, "div", style)
    left.appendChild(globe())
    return(left)
}