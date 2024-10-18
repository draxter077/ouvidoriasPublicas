import upper from "./upper/main.js"
import lower from "./lower/main.js"

export default function content(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 200%;
            position: fixed;
            top: 0%;
            opacity: 0;
            transition: translate var(--transitionTime);
            animation: fadeIn var(--transitionTime) var(--animationDelay1) forwards;
        }`

    const content = createElementToPage(undefined, "div", style)
    content.appendChild(upper())
    content.appendChild(lower())
    return(content)
}