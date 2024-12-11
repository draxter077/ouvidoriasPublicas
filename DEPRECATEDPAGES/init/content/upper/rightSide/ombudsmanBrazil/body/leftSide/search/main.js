import input from "./input/main.js"

export default function search(){
    let style = `
        {
            width: 100%;
        }
        :responsive{
            margin: 10px 0px 0px 0px;
        }`

    const search = createElementToPage(undefined, "div", style)
    search.appendChild(input())
    return(search)
}