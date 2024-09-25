export default function rightSide(){
    document.getElementsByTagName("style")[0].innerHTMl += `
        .initContentSliderRightSide{
            width: 50%;
            height: 100%;
            padding: 20px;
        }`

    const rightSide = document.createElement("div")
    rightSide.className = "initContentSliderRightSide"
    rightSide.id = "rightSide"
    return(rightSide)
}