import globe from "./globe/main.js"
import search from "./search/main.js"

export default function leftSide(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            height: 90%;
        }  
        :responsive{
            width: 100%;
            height: fit-content;
        }`

    const leftSide = createElementToPage(undefined, "div", style)
    leftSide.appendChild(globe())
    leftSide.appendChild(search())
    return(leftSide)
}