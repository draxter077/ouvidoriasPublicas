export default function back(){
    let style = `
        {
            background: var(--colorWhite);
            color: var(--colorBlue);
            cursor: pointer;
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorOrange);
        }`
    const back = createElementToPage(undefined, "button", style)
    back.innerHTML = "Voltar"
    back.onclick = function a(){
        document.getElementById("initBodySlider").style.translate = "0%"
    }
    return(back)
}