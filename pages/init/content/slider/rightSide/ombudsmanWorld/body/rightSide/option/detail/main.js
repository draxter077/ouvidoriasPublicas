import body from "./body/main.js"

export default function detail(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyRightSideOptionDetail{
            max-height: 0px;
            transition: max-height var(--transitionTime);
            overflow: hidden;
        }`

    const detail = document.createElement("div")
    detail.className = "initContentSliderRightSideOmbudsmanWorldBodyRightSideOptionDetail"
    detail.appendChild(body())
    return(detail)
}