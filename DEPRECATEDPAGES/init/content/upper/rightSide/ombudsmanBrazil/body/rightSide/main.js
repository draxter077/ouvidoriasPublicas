import option from "./option/main.js"
import countries from './countries/main.js'

export default function rightSide(){
    let style = `
        {
            width: 50%;
            height: 90%;
            padding: 10px;
            overflow: scroll;
        }
        :responsive{
            width: 100%;
            height: 100%;
        }`

    const rightSide = createElementToPage(undefined, "div", style)
    const cs = countries.countries;
    for(let i = 0; i < cs.length; i++){
        rightSide.appendChild(option(cs[i].name, cs[i].info))
    }
    return(rightSide)
}