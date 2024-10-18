import body from "./body/main.js"

export default function detail(i){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyRightSideOptionDetail{
            max-height: 0px;
            transition: max-height var(--transitionTime);
            overflow: scroll;
        }`

    const detail = document.createElement("div")
    detail.className = "initContentSliderRightSideOmbudsmanBrazilBodyRightSideOptionDetail"
    detail.appendChild(body(i))
    return(detail)
}