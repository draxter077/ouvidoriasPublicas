export default function body(){
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
    body.innerHTML = "DETALHE DETALHE DETALHE"
    return(body)
}