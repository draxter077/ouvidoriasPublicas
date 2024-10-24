export default function lower(){
    let style = `
        {
            height: 50%;
            width: 100%;
            padding: 20px;
        }`

    const lower = createElementToPage(undefined, "div", style)
    lower.id = "lowerPage"
    return(lower)
}