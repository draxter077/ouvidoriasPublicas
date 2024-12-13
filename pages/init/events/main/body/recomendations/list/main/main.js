import img from "./img/main.js"
import tag from "./tag/main.js"

export default function main(){
    let style = `
        {
            position: relative;
            width: 100%;
            height: 200px;
            margin: 0px 0px 20px 0px;
        }`

    const main = createElementToPage(undefined, "div", style)
    main.appendChild(img())
    main.appendChild(tag())
    return(main)
}