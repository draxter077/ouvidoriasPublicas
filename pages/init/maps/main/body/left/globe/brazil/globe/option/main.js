export default function option(t, top, left){
    let style = `
        {
            position: absolute;
            background: var(--colorBlack);
            height: 5px;
            width: 5px;
            border-radius: 10px;
            cursor: pointer;
            transition: height var(--transitionTime), width var(--transitionTime);
        }
        :hover{
            height: 15px;
            width: 15px;
        }`

    const option = createElementToPage(undefined, "div", style)
    option.title = t
    option.style.top = top
    option.style.left = left

    option.onclick = function a(){
        const el = document.getElementById(t.toLowerCase())
        el.scrollIntoView({behavior: "smooth", block: "nearest"})
        el.children[1].style.maxHeight = "200px"
        el.children[0].style.background = "var(--colorOrange)"
    }
    return(option)
}