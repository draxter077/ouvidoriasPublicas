export default function title(t){
    let style = `
        {
            color: var(--colorBlue);
            font-weight: 900;
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = t
    return(title)
}