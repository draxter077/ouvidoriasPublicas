export default function up(t){
    let style = `
        {
            max-width: 100%;
            text-align: left;
        }`
    
    const up = createElementToPage(undefined, "div", style)
    up.innerHTML = t
    return(up)
}