export default function tag(){
    let style = `
        {
            position: absolute;
            bottom: 0%;
            width: 100%;
            background: var(--backgroundColorWhite);
        }`

    const tag = createElementToPage(undefined, "div", style)
    tag.innerHTML = "Evento principal"
    return(tag)
}