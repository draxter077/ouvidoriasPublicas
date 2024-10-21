export default function option(t){
    let style = `
        {
            width: 100%;
            border-bottom: 1px solid var(--colorBlack);
            padding: 10px;
            cursor: pointer;
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorOrange);
        }`

    const option = createElementToPage(undefined, "div", style)
    option.innerHTML = t
    option.onclick = function a(){
        document.getElementById("initContent").style.translate = "0% -50%"
    }
    return(option)
}