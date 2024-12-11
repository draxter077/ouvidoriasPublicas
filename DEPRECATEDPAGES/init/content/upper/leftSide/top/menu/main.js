import option from "./option/main.js"
import ombudsmanBrazil from "../../../rightSide/ombudsmanBrazil/main.js"
import ombudsmanWorld from "../../../rightSide/ombudsmanWorld/main.js"

export default function menu(){
    let style = `
        {
            display: flex;
            flex-direction: row;
        }
        :responsive{
            margin: 10px 0px 0px 0px;
        }`
        
    const menu = createElementToPage(undefined, "div", style)
    menu.appendChild(option("no Brasil", ombudsmanBrazil))
    menu.appendChild(option("no Mundo", ombudsmanWorld))
    return(menu)
}