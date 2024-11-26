import option from "./option/main.js"
import options from "./options.js"

export default function lower(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 70%;
            height: fit-content;
            margin: 10px 0px 0px 0px;
        }
        :responsive{
            flex-direction: column;
            width: 100%;
            margin: 0px;
        }`

    const lower = createElementToPage(undefined, "div", style)
    
    for(let i = 0; i < options.length; i++){
        lower.appendChild(option(options[i].info.title, lower.className, options[i]))
    }
    return(lower)
}