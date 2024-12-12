export default function brazil(){
    let style = `
        {
            width: 50%;
            height: 100%;
            background: yellow;
        }`

    const brazil = createElementToPage(undefined, "div", style)
    brazil.innerHTML = "Brasil"
    return(brazil)
}