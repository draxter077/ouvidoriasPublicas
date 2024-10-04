import option from "./option/main.js"
import ombudsmanBrazil from "../../../rightSide/ombudsmanBrazil/main.js"
import ombudsmanWorld from "../../../rightSide/ombudsmanWorld/main.js"

export default function menu(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideTopMenu{
            display: flex;
            flex-direction: row;
        }
            
        .initContentSliderLeftSideTopMenu>button{
            font-size: 21px;
            padding: 5px 10px;
            margin: 0px 0px 0px 10px;
            background: var(--colorBlue);
            color: var(--colorWhite);
            border-radius: 5px;
            height: fit-content;
            transition: background var(--transitionTime);
            cursor: pointer;
        }
        .initContentSliderLeftSideTopMenu>button:hover{
            background: var(--colorOrange);
        }
            
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideTopMenu{
                margin: 10px 0px 0px 0px;
            }
        }`
    const menu = document.createElement("div")
    menu.className = "initContentSliderLeftSideTopMenu"
    menu.appendChild(option("no Brasil", ombudsmanBrazil))
    menu.appendChild(option("no Mundo", ombudsmanWorld))
    return(menu)
}