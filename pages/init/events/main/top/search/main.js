export default function search(){
    let style = `
        {
            padding: 5px 15px;
            border-radius: 5px;
            box-shadow: 0px 0px 2px 0px var(--colorBlack);
            width: 30%;
            transition: box-shadow var(--transitionTime);
        }`

    const search = createElementToPage(undefined, "input", style)
    search.placeholder = "Pesquise eventos por títulos, lugares ou datas"
    search.oninput = function a(e){
        const value = e.target.value.replaceAll(" ", "")
        const options = e.target.parentElement.parentElement.children[1].children[1].children
        for(let i = 0; i < options.length; i++){
            let oTitle = options[i].children[0].innerHTML
            let oDate = options[i].children[1].children[1].innerHTML
            let oLocation = options[i].children[1].children[0].innerHTML
            
            for(let j = 0; j < oTitle.length - value.length + 1; j++){
                let optionsText = ""
                for(let k = j; k < value.length + j; k++){
                    optionsText += oTitle[k]
                }
                if(value == "" || value.toLowerCase() == optionsText.toLowerCase()){
                    options[i].style.display = "flex"
                    break
                }
                else if(j == oTitle.length - value.length){
                    for(let l = 0; l < oLocation.length - value.length + 1; l++){
                        let optionsText = ""
                        for(let k = l; k < value.length + l; k++){
                            optionsText += oLocation[k]
                        }
                        if(value.toLowerCase() == optionsText.toLowerCase()){
                            options[i].style.display = "flex"
                            break
                        }
                        else if(l == oLocation.length - value.length){
                            for(let m = 0; m < oDate.length - value.length + 1; m++){
                                let optionsText = ""
                                for(let k = m; k < value.length + m; k++){
                                    optionsText += oDate[k]
                                }
                                if(value.toLowerCase() == optionsText.toLowerCase()){
                                    options[i].style.display = "flex"
                                    break
                                }
                                else if(value.toLowerCase() != optionsText.toLowerCase()){
                                    options[i].style.display = "none"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return(search)
}