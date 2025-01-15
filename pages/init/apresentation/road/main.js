import video from "./video/main.js"
import text from "./text/main.js"

export default function road(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 90%;
            width: 100%;
        }
        :responsive{
            height: 85%;
        }`

    const road = createElementToPage(undefined, "div", style)
    road.appendChild(video())
    road.appendChild(text())
    return(road)
}