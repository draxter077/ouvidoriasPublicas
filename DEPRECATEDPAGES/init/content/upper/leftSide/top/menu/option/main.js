export default function option(t, f){
    let style = `
        {
            font-size: 21px;
            padding: 5px 20px;
            margin: 0px 0px 0px 10px;
            background: var(--colorBlue);
            color: var(--colorWhite);
            border-radius: 25px;
            height: fit-content;
            transition: background var(--transitionTime);
            cursor: pointer;
        }
        :hover{
            background: var(--colorOrange);
        }`

    const option = createElementToPage(undefined, "button", style)
    option.innerHTML = t
    option.onclick = function a(){
        let d = document.getElementById("initBodySlider")
        d.style.translate = "-50%"
        let rightSide = document.getElementById("rightSide")
        rightSide.innerHTML = ""
        rightSide.appendChild(f())
    }
    return(option)
}