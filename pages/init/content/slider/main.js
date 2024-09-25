import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function slider(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSlider{
            width: 200%;
            height: 100%;
            position: fixed;
            display: flex;
            flex-direction: row;
            top: 0%;
            transition: translate var(--transitionTime);
        }`

    const slider = document.createElement("div")
    slider.className = "initContentSlider"
    slider.id = "initBodySlider"
    slider.appendChild(leftSide())
    slider.appendChild(rightSide())
    return(slider)
}