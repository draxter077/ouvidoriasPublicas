export default function news(){
    let style = `
        {
            height: 100%;
            background: var(--colorWhite);
            border-radius: 15px;
        }`
    let mobS = `
        {
            background: red;
        }
    `
    const el = createElementToPage(undefined, "div", style, mobS)
    return(el)
}