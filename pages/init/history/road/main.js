import img from "./img/main.js"

export default function road(){
    let style = `
        {
            height: 90%;
            width: 100%;
            padding: 10px;
            overflow-x: scroll;
        }`

    const road = createElementToPage(undefined, "div", style)
    road.appendChild(img())
    return(road)
}