import map from "./map/main.js"
import list from "./list/main.js"

export default function entities(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            width:100%;
            margin:40px 0px 0px 0px;
            background:var(--colorBlue);
            padding:20px;
            box-shadow:0px 0px 10px 10px var(--colorBlue);
        }
        :responsive{
            flex-direction:column;
            align-items:center;
        }`
    
    const entities = cE("div", style)
    entities.id = "entidades"
    entities.appendChild(map())
    entities.appendChild(list())
    return(entities)
}