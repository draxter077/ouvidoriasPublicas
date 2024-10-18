export default function title(t){
    document.getElementsByTagName("style")[0].innerHTML += `
    .initContentSliderRightSideOmbudsmanWorldBodyRightSideOptionDetailBodyInfo>div:nth-child(1){
        color: var(--colorBlue);
        font-weight: 900;
    }`

    const title = document.createElement("div")
    title.innerHTML = t
    return(title)
}