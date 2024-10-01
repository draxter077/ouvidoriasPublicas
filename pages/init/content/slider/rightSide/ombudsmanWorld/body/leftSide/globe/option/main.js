export default function option(t, top, left){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe>div{
            position: absolute;
            background: var(--colorBlack);
            height: 7px;
            width: 7px;
            border-radius: 10px;
            cursor: pointer;
            transition: height var(--transitionTime), width var(--transitionTime);
        }
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe>div:hover{
            height: 15px;
            width: 15px;
        }`

    const option = document.createElement("div")
    option.title = t
    option.style.top = top
    option.style.left = left

    option.onclick = function a(){
        const el = document.getElementById(t)
        el.scrollIntoView({behavior: "smooth"})
    }
    return(option)
}