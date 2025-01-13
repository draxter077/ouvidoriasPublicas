import img from "./img/main.js"

export default function road(){
    let style = `
        {
            height: 90%;
            width: 100%;
            padding: 10px;
            background: var(--colorWhite);
            border-radius: 5px;
            box-shadow: 0px 0px 5px 0px var(--colorWhite);
        }
        :responsive{
            height: 85%;
        }`

    const road = createElementToPage(undefined, "div", style)
    road.appendChild(img())
    return(road)
}