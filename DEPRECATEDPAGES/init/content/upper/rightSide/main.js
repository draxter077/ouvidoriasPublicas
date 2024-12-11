export default function rightSide(){
    let style = `
        {
            width: 50%;
            height: 100%;
            padding: 20px;
        }`

    const rightSide = createElementToPage(undefined, "div", style)
    rightSide.id = "rightSide"
    return(rightSide)
}