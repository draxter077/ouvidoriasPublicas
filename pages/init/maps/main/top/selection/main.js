import button from "./button/main.js"

export default function selection(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 5px;
            box-shadow: 0px 0px 1px 0px var(--colorBlack);
        }
        >button{
            background: var(--colorWhite);
            padding: 5px 10px;
            cursor: pointer;
            transition: color var(--transitionTime), background var(--transitionTime);
        }
        >button:nth-child(1){
            border-radius: 5px 0px 0px 5px;
            border-right: 1px solid var(--colorBlack);
            background: var(--colorBlue);
            color: var(--colorWhite);
        }
        >button:nth-child(2){
            border-radius: 0px 5px 5px 0px;
        }`

    const selection = createElementToPage(undefined, "div", style)
    selection.appendChild(button("Mundo"))
    selection.appendChild(button("Brasil"))
    return(selection)
}