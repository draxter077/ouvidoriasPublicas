export default function title(){
    let style = `
        {
            font-size: 35px;
            font-weight: 900;
            color: var(--colorOrange);
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = "Ouvidorias Públicas"
    return(title)
}