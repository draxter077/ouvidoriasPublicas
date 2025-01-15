export default function menu(){
    let style = `
        {
            display: flex;
            flex-direction: row;
        }
        :responsive{
            justify-content: space-between;
        }
        >button{
            position: relative;
            background: var(--colorWhite);
            color: var(--colorBlue);
            height: fit-content;
            font-size: 18px;
            cursor: pointer;
            margin: 0px 15px 0px 0px;
        }
        >button::after{
            content: "";
            position: absolute;
            left: 0%;
            bottom: 0%;
            height: 1px;
            width: 0%;
            background: var(--colorOrange);  
            transition: width var(--transitionTime);
        }
        >button:hover::after{
            width: 100%;
        }`

    const menu = createElementToPage(undefined, "div", style)
    
    let btns = ["Apresentação", "Mapa", "Eventos", "Notícias", "Artigos"]
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