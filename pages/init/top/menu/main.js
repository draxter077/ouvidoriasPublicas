export default function menu(){
    let style = `
        {
            display: flex;
            flex-direction: row;
        }
        >button{
            position: relative;
            background: var(--colorWhite);
            color: var(--colorBlue);
            border-radius: 10px;
            height: fit-content;
            margin: 0px 0px 0px 20px;
            font-size: 18px;
            cursor: pointer;
        }
        >button::after{
            content: "";
            position: absolute;
            left: 0%;
            bottom: 0%;
            height: 1px;
            width: 0%;
            background: var(--colorBlue);  
            transition: width var(--transitionTime);
        }
        >button:hover::after{
            width: 100%;
        }`

    const menu = createElementToPage(undefined, "div", style)
    
    let btns = ["História", "Mapa", "Eventos", "Notícias", "Artigos"]
    for(let i = 0; i < btns.length; i++){
        let b = createElementToPage(undefined, "button", undefined)
        b.innerHTML = btns[i]
        b.onclick = function a(e){
            document.getElementById(e.target.innerHTML).scrollIntoView({behavior: "smooth"})
        }
        menu.appendChild(b)
    }
    return(menu)
}