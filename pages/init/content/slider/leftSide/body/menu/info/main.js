import option from "./option/main.js"

export default function info(){
    const info = document.createElement("div")
    info.className = "rWidth50ToWidth100 rFlexRowToFlexColumn alignItemsCenter justifyContentSpaceBetween"
    let ops = ["Sobre nós", "Links", "Bibliografia"]
    for(let i = 0; i < ops.length; i++){
        info.appendChild(option(ops[i]))
    }
    return(info)
}