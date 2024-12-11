export default function img(src){
    let style = `
        {
            height: 200px;
            margin: 10px;
            border-radius: 15px;
            box-shadow: 0px 0px 2px 0px var(--colorBlack);
        }
        :responsive{
            width: 100%;
            height: fit-content;
        }`

    let img;
    if(src.split(".")[src.split(".").length - 1] == "mp4"){
        console.log("oi")
        img = createElementToPage(undefined, "video", style)
        img.controls = "true"
        let source = createElementToPage(undefined, "source", style)
        source.style.margin = "none"
        source.style.boxShadow = "none"
        source.src = src
        source.type = "video/mp4"
        img.appendChild(source)
    }
    else{
        img = createElementToPage(undefined, "img", style)
        img.src = src
    }
    return(img)
}