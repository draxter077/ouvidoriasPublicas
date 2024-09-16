export default function option(d){
    const option = document.createElement("div")
    option.className = `fontWeight900 
                        fontSize18px 
                        rWidthFitContentToWidth100 
                        rMarginNoneToMargin0px0px10px0px
                        hColorWhiteToColorOrange
                        padding10px15px
                        borderRadius15px
                        backgroundColorBlue
                        textAlignCenter`
    option.innerHTML = d
    return(option)
}