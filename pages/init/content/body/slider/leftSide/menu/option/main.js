export default function option(n){
    const option = document.createElement("div")
    option.className = "hoverChangeColorBlueToOrange backgroundColorWhite padding10px15px borderRadius15px rWidth12ToWidth100 flexRow alignItemsCenter justifyContentCenter rMarginNoneToMargin0px0px10px0px textAlignCenter"
    option.innerHTML = n
    option.onclick = function a(){
        let d = document.getElementById("1")
        d.style.transition = "translate var(--transitionTime)"
        d.style.translate = "-50%"
    }
    return(option)
}