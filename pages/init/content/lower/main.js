import news from "./news/main.js"

export default function lower(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initLower{
            height: 50%;
            width: 100%;
            padding: 20px;
        }
    `

    const loewr = document.createElement('div')
    loewr.className = "initLower"
    loewr.onclick = function a(){
        document.getElementsByClassName("initContent")[0].style.translate = "0% 0%"
    }
    loewr.appendChild(news())
    return(loewr)
}