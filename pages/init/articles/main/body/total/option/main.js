import up from "./up/main.js"
import down from "./down/main.js"
import toClick from "./toClick/main.js"

export default function option(t, d, a, h){
    let style = `
        {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 24%;
            box-shadow: 0px 0px 2px 0px var(--colorBlack);
            border-radius: 5px;
            margin: 0px 15px 15px 0px;
            padding: 5px 10px;
            background: none;
            cursor: pointer;
            transition: box-shadow var(--transitionTime);
        }
        :hover{
            box-shadow: 0px 0px 10px 0px var(--colorBlue);
        }
        :responsive{
            display: none;
        }`

    const option = createElementToPage(undefined, "button", style)
    option.appendChild(up(t))
    option.appendChild(down(d, a))
    option.appendChild(toClick(h))
    return(option)
}