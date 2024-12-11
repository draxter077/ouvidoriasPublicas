export default function right(){
    let style = `
        {
            width: 50%;
            height: 100%;
            background: yellow;
        }`

    const right = createElementToPage(undefined, "div", style)
    right.innerHTML = "Opções"
    return(right)
}