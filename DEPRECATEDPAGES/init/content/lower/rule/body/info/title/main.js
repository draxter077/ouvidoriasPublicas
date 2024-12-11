export default function title(t){
    let style = `
        {
            width: 80%;
            text-align: center;
            font-size: 22px;
            color: var(--colorOrange);
            font-weight: 900;
        }
        :responsive{
            width: 100%;
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = t
    return(title)
}