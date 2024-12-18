import option from "./option/main.js"
import countries from './countries.js'

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
    for(let i = 0; i < countries.length; i++){
        world.appendChild(option(countries[i].name, countries[i].info))
    }
    return(world)
}