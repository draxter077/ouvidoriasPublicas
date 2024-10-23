import img from "./img/main.js"
import text from "./text/main.js"

export default function option(src, t){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            border-top: 1px solid var(--colorBlack);
            padding: 10px;
            cursor: pointer;
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorOrange);
        }`

    const option = createElementToPage(undefined, "div", style)
    option.onclick = function a(){
        document.getElementById("initContent").style.translate = "0% -50%"
    }
    option.appendChild(img(src))
    option.appendChild(text(t))
    return(option)
}