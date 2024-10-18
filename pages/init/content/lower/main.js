export default function lower(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initLower{
            height: 50%;
            width: 100%;
            background: rgba(0, 0, 0, 0.4);
        }
    `

    const loewr = document.createElement('div')
    loewr.className = "initLower"
    loewr.onclick = function a(){
        document.getElementsByClassName("initContent")[0].style.translate = "0% 0%"
    }
    return(loewr)
}