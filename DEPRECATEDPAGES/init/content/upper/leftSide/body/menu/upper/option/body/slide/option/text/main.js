export default function text(t){
    let style = `
        {
            width: 100%;
            padding: 0px 0px 0px 10px;
            line-height: 1.0;
        }`

    const text = createElementToPage(undefined, "div", style)
    text.innerHTML = t
    return(text)
}