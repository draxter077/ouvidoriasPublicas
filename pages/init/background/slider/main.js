import img from "./img/main.js"

export default function slider(){
    document.getElementsByTagName('style')[0].innerHTML += `
        .initBackgroundSlider{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
        }`

    const slider = document.createElement("div")
    slider.className = "initBackgroundSlider"
    slider.appendChild(img())
    return(slider)
}