import option from "./option/main.js"

export default function menu(){
    const menu = document.createElement("div")
    menu.className = "width100 rFlexRowToFlexColumn justifyContentSpaceBetween padding20px25px borderRadius15px fontSize25px"
    let ops = ["Sobre nós", "Ombudsman no mundo", "Eventos", "Notícias", "Publicações", "Links", "Bibliografia"]
    for(let i = 0; i < ops.length; i++){
        menu.appendChild(option(ops[i]))
    }
    return(menu)
}