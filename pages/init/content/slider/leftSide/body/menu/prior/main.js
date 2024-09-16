import option from "./option/main.js"
import ombudsmanWorld from "../../../../rightSide/ombudsmanWorld/main.js"

export default function prior(){
    const prior = document.createElement("div")
    prior.className = "width100 rFlexRowToFlexColumn justifyContentSpaceBetween margin0px0px10px0px"
    let ops = [{title: "Eventos", f: undefined}, 
                {title: "Notícias", f: undefined}, 
                {title: "Publicações", f: undefined}, 
                {title: "Ombudsman no mundo", f: ombudsmanWorld}, 
                {title: "Ombudsman no Brasil", f: undefined}
            ]
    for(let i = 0; i < ops.length; i++){
        prior.appendChild(option(ops[i].title, ops[i].f))
    }
    return(prior)
}