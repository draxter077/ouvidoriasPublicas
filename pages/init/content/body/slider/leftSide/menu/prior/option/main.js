export default function option(d){
    const option = document.createElement("div")
    option.className = `backgroundColorWhite 
                        rWidth18ToWidth100 
                        flexRow 
                        justifyContentCenter 
                        textAlignCenter 
                        alignItemsCenter 
                        padding10px15px 
                        borderRadius15px 
                        hColorBlueToColorOrange 
                        fontSize21px
                        rMarginNoneToMargin0px0px10px0px`
    option.onclick = function a(){
        let d = document.getElementById("1")
        d.style.transition = "translate var(--transitionTime)"
        d.style.translate = "-50%"
    }
    option.innerHTML = d
    return(option)
}