export default function title(t){
    let style = `
        {
            width: 100%;
            text-align: center;
            font-size: 30px;
            color: var(--colorOrange);
            font-weight: 900;
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = t
    return(title)
}