export default function up(t){
    let style = `
        {
            width: 100%
        }`
    
    const up = createElementToPage(undefined, "div", style)
    up.innerHTML = t
    return(up)
}