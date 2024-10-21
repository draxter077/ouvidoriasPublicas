export default function title(){
    let style = `
        {
            width: 100%;
            text-align: center;
            font-size: 30px;
            color: var(--colorOrange);
            font-weight: 900;
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    return(title)
}