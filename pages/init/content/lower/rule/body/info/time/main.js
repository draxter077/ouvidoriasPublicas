export default function time(t){
    let style = `
        {
            width: 100%;
            text-align: right;
            font-size: 12px;
            color: var(--colorBlack);
            font-style: italic;
            margin: 10px 0px;
        }`

    const time = createElementToPage(undefined, "div", style)
    time.innerHTML = t
    return(time)
}