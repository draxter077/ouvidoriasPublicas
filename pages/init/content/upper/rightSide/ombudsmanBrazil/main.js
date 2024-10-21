import top from "./top/main.js"
import body from "./body/main.js"

export default function ombudsmanBrazil(){
    let style = `
        {
            width: 100%;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
            padding: 10px 15px;
            box-shadow: 0px 0px 5px 0px var(--colorBlack);
        }`

    const ombudsmanBrazil = createElementToPage(undefined, "div", style)
    ombudsmanBrazil.appendChild(top())
    ombudsmanBrazil.appendChild(body())
    return(ombudsmanBrazil)
}