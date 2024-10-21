export default function news(){
    let style = `
        {
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
        }
        :responsive{
            background: red;
        }`

    const el = createElementToPage(undefined, "div", style)
    return(el)
}