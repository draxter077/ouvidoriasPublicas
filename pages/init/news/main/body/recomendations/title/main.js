export default function title(){
    let style = `
        {
            width: 100%;
            font-size: 25px;
            margin: 0px 0px 20px 0px;
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = "Notícias recomendadas"
    return(title)
}