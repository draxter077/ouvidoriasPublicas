export default function option(t, top, left){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe>div{
            position: absolute;
            background: var(--colorBlack);
            height: 5px;
            width: 5px;
            border-radius: 10px;
            cursor: pointer;
            transition: height var(--transitionTime), width var(--transitionTime);
        }
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe>div:hover{
            height: 15px;
            width: 15px;
        }`

    const option = document.createElement("div")
    option.title = t
    option.style.top = top
    option.style.left = left

    option.onclick = function a(){
        const el = document.getElementById(t.toLowerCase())
        el.scrollIntoView({behavior: "smooth"})
        el.children[1].style.maxHeight = "200px"
    }
    return(option)
}