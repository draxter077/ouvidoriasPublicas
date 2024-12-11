import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function upper(){
    let style = `
        {
            width: 200%;
            height: 50%;
            display: flex;
            flex-direction: row;
            transition: translate var(--transitionTime);
        }`

    const upper = createElementToPage(undefined, "div", style)
    upper.id = "initBodySlider"
    upper.appendChild(leftSide())
    upper.appendChild(rightSide())
    return(upper)
}