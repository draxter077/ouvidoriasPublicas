import title from "./title/main.js"
import body from "./body/main.js"

export default function events(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperEvents{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            width: 25%;
            height: 100%;
            margin: 0px 0px 10px 0px;
        }
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideBodyMenuUpperEvents{
                width: 100%;
            }
        }
    `

    const events = document.createElement("div")
    events.className = "initContentSliderLeftSideBodyMenuUpperEvents"
    events.appendChild(title())
    events.appendChild(body())
    return(events)
}