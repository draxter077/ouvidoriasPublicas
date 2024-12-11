import rule from "../../../../../../lower/rule/main.js"

export default function option(t, parentClass, ob){
    let style = `
        {
            width: 22%;
            text-align: center;
            background: var(--colorBlue);
            color: var(--colorWhite);
            padding: 10px 15px;
            border-radius: 15px;
            font-size: 21px;
            cursor: pointer;
            box-shadow: 0px 0px 5px 0px var(--colorBlack);
            transition: background var(--transitionTime);
        }
        :hover{
            background: var(--colorOrange);
        }
        :responsive{
            width: 100%;
            margin: 0px 0px 10px 0px;
        }
    }`
    const option = createElementToPage(parentClass+">div", "div", style)
    option.innerHTML = t
    option.onclick = function a(){
        document.getElementById("lowerPage").innerHTML = ""
        document.getElementById("lowerPage").appendChild(rule(ob))
        document.getElementById("initContent").style.translate = "0% -50%"
    }
    return(option)
}