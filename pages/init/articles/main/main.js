import top from "./top/main.js"
import body from "./body/main.js"

export default function main(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 90%;
            padding: 20px;
            border-radius: 15px;
            background: var(--colorWhite);
        }
        :responsive{
            height: 85%;
        }`

    const main = createElementToPage(undefined, "div", style)
    main.appendChild(top())
    main.appendChild(body())
    return(main)
}