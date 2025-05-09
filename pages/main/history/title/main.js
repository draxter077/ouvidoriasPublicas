export default function title(){
    let style = `
        {
            width:100%;
            font-size:32px;
            color:var(--colorBlue);
            padding:0px 10px;
            border-bottom:1px solid var(--colorBlue);
            margin:0px 0px 10px 0px;
        }`

    const title = cE("div", style)
    title.innerHTML = "História"
    return(title)
}