import body from "./body/main.js"

export default function detail(i){
    let style = `
        {
            max-height: 0px;
            transition: max-height var(--transitionTime);
            overflow: scroll;
        }`

    const detail = createElementToPage(undefined, "div", style)
    detail.appendChild(body(i))
    return(detail)
}