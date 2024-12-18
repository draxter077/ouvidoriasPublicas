export default function title(){
    let style = `
        {
            width: 100%;
            font-size: 25px;
            margin: 0px 0px 20px 0px;
        }
        :responsive{
            display: none;
        }`

    const title = createElementToPage(undefined, "div", style)
    title.innerHTML = "Artigos recomendados"
    return(title)
}