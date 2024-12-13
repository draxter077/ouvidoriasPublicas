import tag from "./tag/main.js"

export default function img(){
    let style = `
        {
            position: relative;
            width: 100%;
            height: 100%;   
            border-radius: 5px;
            box-shadow: 0px 0px 3px 0px var(--colorBlack);
        }`

    const img = createElementToPage(undefined, "img", style)
    img.src = "https://lekaneventos.com.br/wp-content/uploads/2021/10/lekaneventos.com.br-voce-sabe-o-que-e-um-evento-corporativo-d61-1898-768x513.jpg"
    img.appendChild(tag())
    return(img)
}