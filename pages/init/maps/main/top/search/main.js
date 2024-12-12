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
    search.placeholder = "Pesquise"
    search.oninput = function a(e){
        const value = e.target.value
        const el = document.getElementById(value.toLowerCase())
        el.scrollIntoView({behavior: "smooth", block: "nearest"})
        el.children[1].style.maxHeight = "200px"
        el.children[0].style.background = "var(--colorOrange)"
    }
    return(search)
}