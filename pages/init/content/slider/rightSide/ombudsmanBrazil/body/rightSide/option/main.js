import title from "./title/main.js"
import detail from "./detail/main.js"

export default function option(t, i){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyRightSideOption{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0px 0px 10px 0px;
        }`
    const option = document.createElement("div")
    option.className = "initContentSliderRightSideOmbudsmanBrazilBodyRightSideOption"
    option.appendChild(title(t))
    option.appendChild(detail(i))
    option.id = t.toLowerCase()
    return(option)
}