export default function data(d){
    document.getElementsByTagName("style")[0].innerHTML += `
    .initContentSliderRightSideOmbudsmanWorldBodyRightSideOptionDetailBodyInfo>div:nth-child(2){
        color: var(--colorBlack);
    }`

    const data = document.createElement("div")
    data.innerHTML = d
    return(data)
}