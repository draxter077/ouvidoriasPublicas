import option from "./option/main.js"
import ouvids from './ouvids.js'

export default function brazil(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
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
    for(let i = 0; i < ouvids.length; i++){
        brazil.appendChild(option(ouvids[i].name, ouvids[i].info))
    }
    return(brazil)
}