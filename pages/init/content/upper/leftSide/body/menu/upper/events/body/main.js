export default function body(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperEventsBody{
            height: 100%;
            background: var(--colorWhite);
            border-radius: 0px 0px 15px 15px;
            max-height: 0px;
            transition: max-height var(--transitionTime), border-radius var(--transitionTime);
        }
    `

    const body = document.createElement("div")
    body.className = "initContentSliderLeftSideBodyMenuUpperEventsBody"
    return(body)
}