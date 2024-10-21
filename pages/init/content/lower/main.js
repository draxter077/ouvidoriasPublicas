import news from "./news/main.js"

export default function lower(){
    let style = `
        {
            height: 50%;
            width: 100%;
            padding: 20px;
        }
    `

    const lower = createElementToPage(undefined, "div", style)
    lower.onclick = function a(){
        document.getElementsByClassName("initContent")[0].style.translate = "0% 0%"
    }
    lower.appendChild(news())
    return(lower)
}