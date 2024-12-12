import world from "./world/main.js"
import brazil from "./brazil/main.js"

export default function globe(){
    let style = `
        {
            width: 200%;
            height: 100%;
            display: flex;
            flex-direction: row;
            transition: translate var(--transitionTime);
        }`

    const globe = createElementToPage(undefined, "div", style)
    globe.appendChild(world())
    globe.appendChild(brazil())
    return(globe)
}