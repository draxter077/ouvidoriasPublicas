export default function toClick(h){
    let style = `
        {
            position: absolute;
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
        }`
    const toClick = createElementToPage(undefined, "a", style)
    toClick.href = h
    toClick.target = "_blank"
    return(toClick)
}