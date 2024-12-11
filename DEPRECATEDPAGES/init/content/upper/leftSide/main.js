import top from "./top/main.js"
import body from "./body/main.js"

export default function leftSide(){
    let style = `
        {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }`

    const leftSide = createElementToPage(undefined, "div", style)
    leftSide.appendChild(top())
    leftSide.appendChild(body())
    return(leftSide)
}