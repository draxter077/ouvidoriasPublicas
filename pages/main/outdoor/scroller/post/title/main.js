export default function title(t){
    let style = `
        {
            position:absolute;
            bottom:0%;
            left:0%;
            width:100%;
            padding:10px;
            color:var(--colorWhite);
            background:var(--colorBlack07);
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}