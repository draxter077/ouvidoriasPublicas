import img from "./img/main.js"

export default function slider(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
        }`

    const slider = createElementToPage(undefined, "div", style)
    slider.appendChild(img(slider.className))
    return(slider)
}