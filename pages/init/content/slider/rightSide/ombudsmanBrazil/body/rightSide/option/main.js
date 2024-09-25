export default function option(t){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyRightSideOption{
            padding: 10px;
            background: var(--colorBlue);
            border-radius: 15px;
            text-align: cente;
            margin: 0px 0px 10px 0px;
            color: var(--colorWhite);
        }`
    const option = document.createElement("div")
    option.className = "initContentSliderRightSideOmbudsmanBrazilBodyRightSideOption"
    option.innerHTML = t
    return(option)
}