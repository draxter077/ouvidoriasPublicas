export default function up(){
    let style = `
        {
            width: 100%
        }`
    
    const up = createElementToPage(undefined, "div", style)
    up.innerHTML = "Título"
    return(up)
}