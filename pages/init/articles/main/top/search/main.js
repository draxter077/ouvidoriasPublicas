export default function search(){
    let style = `
        {
            padding: 5px 15px;
            border-radius: 5px;
            box-shadow: 0px 0px 2px 0px var(--colorBlack);
            width: 30%;
            transition: box-shadow var(--transitionTime);
        }`

    const search = createElementToPage(undefined, "input", style)
    search.placeholder = "Pesquise artigos por título, autores ou data"
    return(search)
}