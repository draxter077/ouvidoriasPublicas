import slider from "./slider/main.js"

export default function background(){
    let style = `
        {
            width: 100%;
            height: 100%;
            overflow: hidden;
            opacity: 0;
            animation: fadeIn var(--transitionTime) var(--animationDelay0) forwards;
        }`

    const background = createElementToPage(undefined, "div", style, undefined)
    background.appendChild(slider())
    return(background)
}