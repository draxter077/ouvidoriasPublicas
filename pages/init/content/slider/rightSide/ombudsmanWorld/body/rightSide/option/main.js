import title from "./title/main.js"
import detail from "./detail/main.js"

export default function option(t){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyRightSideOption{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0px 0px 10px 0px;
        }`
    const option = document.createElement("div")
    option.className = "initContentSliderRightSideOmbudsmanWorldBodyRightSideOption"
    option.appendChild(title(t))
    option.appendChild(detail())
    option.id = t
    return(option)
}