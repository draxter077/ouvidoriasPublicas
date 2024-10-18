export default function img(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanWorldBodyLeftSideGlobe>img{
            width: 100%;
            border-radius: 50%;
        }`

    const img = document.createElement("img")
    img.src = "https://draxter077.github.io/ouvidoriasPublicas/globe.jpg"
    return(img)
}