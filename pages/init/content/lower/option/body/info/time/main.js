export default function time(){
    let style = `
        {
            width: 100%;
            text-align: right;
            font-size: 15px;
            color: var(--colorBlack);
            font-style: italic;
        }`

    const time = createElementToPage(undefined, "div", style)
    time.innerHTML = "10/08/2024 às 10h00"
    return(time)
}