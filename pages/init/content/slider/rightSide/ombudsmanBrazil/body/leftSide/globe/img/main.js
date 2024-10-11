export default function img(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe>img{
            height: 100%;
            border-radius: 50%;
        }
        @media screen and (max-width: 1000px){
            .initContentSliderRightSideOmbudsmanBrazilBodyLeftSideGlobe>img{
                width: 100%;
            }
        }`

    const img = document.createElement("img")
    img.src = "https://draxter077.github.io/ouvidoriasPublicas/brazil.jpg"
    return(img)
}