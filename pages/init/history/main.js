import road from "./road/main.js"

export default function history(){
    let style = `
        {
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 100dvh;
            padding: 0px 10px 10px;
            background: var(--backgroundColorBlue);
        }` 

    const history = createElementToPage(undefined, "div", style)
    history.id = "História"
    history.appendChild(road())
    return(history)
}