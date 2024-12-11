import main from "./main/main.js"

export default function maps(){
    let style = `
        {
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 100dvh;
            padding: 0px 10px 10px;
            background: green;
        }` 

    const maps = createElementToPage(undefined, "div", style)
    maps.id = "Mapa"
    maps.appendChild(main())
    return(maps)
}