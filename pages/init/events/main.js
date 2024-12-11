import main from "./main/main.js"

export default function events(){
    let style = `
        {
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 100dvh;
            padding: 0px 10px 10px;
            background: yellow;
        }` 

    const events = createElementToPage(undefined, "div", style)
    events.id = "Eventos"
    events.appendChild(main())
    return(events)
}