export default function img(src){
    let style = `
        {
            width: 30%;
            max-height: 90px;
            border-radius: 5px;
            box-shadow: 0px 0px 2px 0px var(--colorBlack);
        }`
    
    if(src != undefined){
        const img = createElementToPage(undefined, "img", style)
        img.src = src
        return(img)
    }
    else{
        return(document.createElement("div"))
    }
}