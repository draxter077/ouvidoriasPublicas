import title from "./title/main.js"
import detail from "./detail/main.js"

export default function option(t, i){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0px 0px 10px 0px;
        }`
    const option = createElementToPage(undefined, "div", style)
    option.appendChild(title(t))
    option.appendChild(detail(i))
    option.id = t.toLowerCase()
    return(option)
}