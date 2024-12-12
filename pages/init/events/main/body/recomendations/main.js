export default function recomendations(){
    let style = `
        {
            width: 30%;
            height: 100%;
            padding: 5px;
            border-right: 1px solid var(--colorBlack);
        }`

    const recomendations = createElementToPage(undefined, "div", style)
    recomendations.innerHTML = "Recomendações"
    return(recomendations)
}