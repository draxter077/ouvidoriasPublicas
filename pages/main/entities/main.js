export default function entities(){
    let style = `
        {
            width:95%;
            height:150px;
            margin:40px 0px 0px 0px;
            background:black;
        }`
    
    const entities = cE("div", style)
    entities.id = "entidades"
    return(entities)
}