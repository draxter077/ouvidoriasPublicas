export default function text(txt){
    let style = `
        {
            color:var(--colorBlack);
            font-size:17px;
            text-align:justify;
            width:90%;
        }`

    const text = cE("div", style)
    text.innerHTML = txt
    return(text)
}