import option from "./option/main.js"
import countries from './countries/main.js'

export default function brazil(){
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

    const brazil = createElementToPage(undefined, "div", style)
    const cs = countries.countries;
    for(let i = 0; i < cs.length; i++){
        brazil.appendChild(option(cs[i].name, cs[i].info))
    }
    return(brazil)
}