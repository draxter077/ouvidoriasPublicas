import title from "./title/main.js"
import logo from "./logo/main.js"

export default function brand(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        :responsive{
            flex-direction: column;
        }
    `

    const brand = createElementToPage(undefined, "div", style)
    brand.appendChild(logo())
    brand.appendChild(title())
    return(brand)
}