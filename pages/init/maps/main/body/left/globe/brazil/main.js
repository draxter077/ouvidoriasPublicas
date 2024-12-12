import globe from "./globe/main.js"

export default function brazil(){
    let style = `
        {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }`

    const brazil = createElementToPage(undefined, "div", style)
    brazil.appendChild(globe())
    return(brazil)
}