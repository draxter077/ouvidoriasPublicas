export default function up(t){
    let style = `
        {
            max-width: 100%;
            overflow: hidden;
        }`
    
    const up = createElementToPage(undefined, "div", style)
    up.innerHTML = t
    return(up)
}