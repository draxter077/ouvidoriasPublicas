export default function rightSide(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyRightSide{
            width: 50%;
        }`

    const rightSide = document.createElement("div")
    rightSide.className = "initContentSliderRightSideOmbudsmanWorldBodyRightSide"
    rightSide.innerHTML = "right"
    return(rightSide)
}