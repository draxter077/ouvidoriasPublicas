export default function option(d, f){
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
    if(f != undefined){
        option.onclick = function a(){
            let d = document.getElementById("initBodySlider")
            d.style.translate = "-50%"
            let rightSide = document.getElementById("rightSide")
            rightSide.innerHTML = ""
            rightSide.appendChild(f())
        }
    }
    option.innerHTML = d
    return(option)
}