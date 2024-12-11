export default function left(){
    let style = `
        {
            width: 50%;
            height: 100%;
            background: orange;
        }`

    const left = createElementToPage(undefined, "div", style)
    left.innerHTML = "Globo"
    return(left)
}