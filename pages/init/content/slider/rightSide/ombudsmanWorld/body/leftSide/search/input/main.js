export default function input(){
    const input = document.createElement("input")
    input.className = `width100 borderRadius10px 
                        border1pxSolidColorBlue 
                        padding10px15px
                        hBoxShadowNoneToBoxShadow0px0px10px0pxColorBlue`
    input.placeholder = "Pesquise um país"
    return(input)
}