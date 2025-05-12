export default function title(t){
    let style = `
        {
            font-size:32px;
            color:var(--colorBlue);
            border-bottom:1px solid var(--colorBlue);
            padding:0px 10px;
        }
        :responsive{
            font-size:28px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}