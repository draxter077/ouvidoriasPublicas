export default function top(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideTop{
            width: 100%;
            padding: 10px 15px;
            text-align: center;
            font-size: 40px;
            background: var(--colorWhite);
            border-radius: 15px;
            opacity: 0;
            width: 0%;
            animation: fadeIn var(--transitionTime) var(--animationDelay1) forwards, widther var(--transitionTime) var(--animationDelay1) forwards;
        }`

    const top = document.createElement("div")
    top.className = "initContentSliderLeftSideTop"
    top.innerHTML = "Ouvidorias Públicas"
    return(top)
}