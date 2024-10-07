import info from "./info/main.js"

export default function body(i){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyRightSideOptionDetail>div{
            border-radius: 0px 0px 15px 15px;
            border: 1px solid var(--colorBlue);
            border-top: none;
            padding: 15px 20px;
            color: var(--colorBlue);
            margin: 0px 15px;
        }`

    const body = document.createElement("div")

    for(let j = 0; j < i.length; j++){
        body.appendChild(info(i[j]))
    }

    return(body)
}