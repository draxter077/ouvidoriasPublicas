export default function back(){
    let style = `
        {
            color: var(--colorBlue);
            cursor: pointer;
            transition: color var(--transitionTime);
            background: none;
        }
        :hover{
            color: var(--colorOrange);
        }`

    const back = createElementToPage(undefined, "button", style)
    back.innerHTML = "Voltar"
    back.onclick = function a(){
        document.getElementById("initContent").style.translate = "0% 0%"
    }
    return(back)
}