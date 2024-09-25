export default function img(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initBackgroundSlider>img{
            height: 100%;
            opacity: 0.5;
        }`

    const img = document.createElement("img")
    img.src = "https://draxter077.github.io/ouvidoriasPublicas/stockholmPalace.jpg"
    return(img)
}