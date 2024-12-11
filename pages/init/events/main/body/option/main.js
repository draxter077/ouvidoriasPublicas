import up from "./up/main.js"
import down from "./down/main.js"

export default function option(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 24%;
            box-shadow: 0px 0px 2px 0px var(--colorBlack);
            border-radius: 5px;
            margin: 0px 10px 10px 0px;
            padding: 5px 10px;
            background: none;
            cursor: pointer;
            transition: box-shadow var(--transitionTime);
        }
        :hover{
            box-shadow: 0px 0px 7px 0px var(--colorBlack);
        }`

    const option = createElementToPage(undefined, "button", style)
    option.appendChild(up())
    option.appendChild(down())
    return(option)
}