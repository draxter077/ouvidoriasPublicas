import title from "./title/main.js"
import menu from "./menu/main.js"

export default function top(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideTop{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            font-size: 40px;
            background: var(--colorWhite);
            color: var(--colorOrange);
            opacity: 0;
            width: 0%;
            animation: fadeIn var(--transitionTime) var(--animationDelay1) forwards, widther var(--transitionTime) var(--animationDelay1) forwards;
        }
            
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideTop{
                flex-direction: column;
                width: 100%;
                opacity: 0;
                animation: fadeIn var(--transitionTime) var(--animationDelay1) forwards;
            }
        }`

    const top = document.createElement("div")
    top.className = "initContentSliderLeftSideTop"
    top.appendChild(title())
    top.appendChild(menu())
    return(top)
}