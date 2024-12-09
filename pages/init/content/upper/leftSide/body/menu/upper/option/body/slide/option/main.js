import img from "./img/main.js"
import text from "./text/main.js"
import rule from "../../../../../../../../../lower/rule/main.js"

export default function option(src, t, ob){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 48%;
            border-top: 1px solid var(--colorBlack);
            padding: 10px;
            cursor: pointer;
            color: var(--colorBlack);
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorOrange);
        }
        :hover>img{
            padding: 5px;
        }
        :responsive{
            width: 100%;
        }`

    const option = createElementToPage(undefined, "div", style)
    option.onclick = async function a(){
        document.getElementById("lowerPage").innerHTML = ""
        document.getElementById("lowerPage").appendChild(rule(ob))
        document.getElementById("initContent").style.translate = "0% -50%"
        if(document.getElementsByTagName("iframe").length != 0){
            document.getElementsByTagName("iframe")[0].parentElement.style.height = "100%"
            await new Promise(r => setTimeout(r, 750));
            document.getElementsByTagName("iframe")[0].scrollIntoView({behavior: "smooth"})
        }
    }
    option.appendChild(img(src))
    option.appendChild(text(t))
    return(option)
}