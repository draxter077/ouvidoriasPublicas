import img from "./img/main.js"

export default function road(){
    let style = `
        {
            height: 90%;
            width: 100%;
            padding: 10px;
            background: var(--colorWhite);
            border-radius: 5px;
            overflow-x: scroll;
        }
        :responsive{
            height: 85%;
        }`

    const road = createElementToPage(undefined, "div", style)
    road.appendChild(img())
    return(road)
}