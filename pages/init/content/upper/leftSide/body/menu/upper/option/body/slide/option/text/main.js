export default function text(t){
    let style = `
        {
            padding: 0px 0px 0px 10px;
            line-height: 1.0;
            text-align: justify;
        }`

    const text = createElementToPage(undefined, "div", style)
    text.innerHTML = t
    return(text)
}