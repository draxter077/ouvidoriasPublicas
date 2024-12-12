import world from "./world/main.js"
import brazil from "./brazil/main.js"

export default function list(){
    let style = `
        {
            width: 200%;
            height: 100%;
            display: flex;
            flex-direction: row;
            transition: translate var(--transitionTime);
        }`

    const list = createElementToPage(undefined, "div", style)
    list.appendChild(world())
    list.appendChild(brazil())
    return(list)
}