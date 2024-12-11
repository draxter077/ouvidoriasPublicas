import img from "./img/main.js"

export default function imgs(srcs){
    let style = `
        {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }`

    const imgs = createElementToPage(undefined, "div", style)
    for(let i = 0; i < srcs.length; i++){
        imgs.appendChild(img(srcs[i]))
    }
    return(imgs)
}