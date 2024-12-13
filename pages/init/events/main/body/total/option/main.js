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
            margin: 0px 15px 15px 0px;
            padding: 5px 10px;
            background: none;
            cursor: pointer;
            transition: box-shadow var(--transitionTime);
        }
        :hover{
            box-shadow: 0px 0px 7px 0px var(--colorBlack);
        }
        :responsive{
            width: 40%;
        }`

    const option = createElementToPage(undefined, "button", style)
    option.appendChild(up())
    option.appendChild(down())
    option.onclick = function a(e){
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[6].style.translate = "0%"
    }
    return(option)
}