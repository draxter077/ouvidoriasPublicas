export default function time(t){
    let style = `
        {
            width: 100%;
            text-align: right;
            font-size: 15px;
            color: var(--colorBlack);
            font-style: italic;
        }`

    const time = createElementToPage(undefined, "div", style)
    time.innerHTML = t
    return(time)
}