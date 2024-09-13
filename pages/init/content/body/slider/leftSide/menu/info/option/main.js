export default function option(d){
    const option = document.createElement("div")
    option.className = `fontWeight900 
                        fontSize18px 
                        rMarginNoneToMargin0px0px10px0px
                        hColorWhiteToColorOrange
                        padding10px15px
                        borderRadius15px
                        backgroundColorBlue`
    option.innerHTML = d
    return(option)
}