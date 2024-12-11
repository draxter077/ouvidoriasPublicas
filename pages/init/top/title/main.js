export default function title(){
    let style = `
        {
            font-size: 35px;
            opacity: 1;
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = "Ouvidorias Públicas"
    return(title)
}