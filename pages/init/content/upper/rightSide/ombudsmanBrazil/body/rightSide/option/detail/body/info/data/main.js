export default function data(d){
    let style = `
        {
            color: var(--colorBlack);
        }`

    const data = createElementToPage(undefined, "div", style)
    data.innerHTML = d
    return(data)
}