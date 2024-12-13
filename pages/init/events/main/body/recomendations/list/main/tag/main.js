export default function tag(){
    let style = `
        {
            position: absolute;
            bottom: 0%;
            width: 100%;
            background: var(--colorWhite);
            border-radius: 0px 0px 5px 5px;
            padding: 5px;
        }`

    const tag = createElementToPage(undefined, "div", style)
    tag.innerHTML = "Evento principal"
    return(tag)
}