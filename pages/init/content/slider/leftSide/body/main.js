export default function body(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBody{
        }`

    const body = document.createElement("div")
    body.className = "initContentSliderLeftSideBody"
    return(body)
}