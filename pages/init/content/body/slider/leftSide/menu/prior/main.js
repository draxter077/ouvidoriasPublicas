import option from "./option/main.js"

export default function prior(){
    const prior = document.createElement("div")
    prior.className = "width100 rFlexRowToFlexColumn justifyContentSpaceBetween margin0px0px10px0px"
    let ops = ["Eventos", "Notícias", "Publicações", "Ombudsman no mundo", "Ombudsman no Brasil"]
    for(let i = 0; i < ops.length; i++){
        prior.appendChild(option(ops[i]))
    }
    return(prior)
}