import slide from "./slide/main.js"

export default function body(ob){
    let style = `{
            width: 90%;
            height: 100%;
            background: var(--colorWhite);
            border-radius: 0px 0px 15px 15px;
            max-height: 0px;
            overflow: hidden;
            transition: max-height var(--transitionTime), border-radius var(--transitionTime);
        }
        :responsive{
            height: 300px;
        }`

    const body = createElementToPage(undefined, "div", style)
    body.appendChild(slide(body.className, ob))
    return(body)
}