import top from "./top/main.js"
import body from "./body/main.js"

export default function ombudsmanWorld(){
    let style = `
        {
            width: 100%;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0px 0px 5px 0px var(--colorBlack);
        }`

    const ombudsmanWorld = createElementToPage(undefined, "div", style)
    ombudsmanWorld.appendChild(top())
    ombudsmanWorld.appendChild(body())
    return(ombudsmanWorld)
}