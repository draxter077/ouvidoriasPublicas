import option from "./option/main.js"
import countries from './countries/main.js'

export default function world(){
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

    const world = createElementToPage(undefined, "div", style)
    const cs = countries.countries;
    for(let i = 0; i < cs.length; i++){
        world.appendChild(option(cs[i].name, cs[i].info))
    }
    return(world)
}