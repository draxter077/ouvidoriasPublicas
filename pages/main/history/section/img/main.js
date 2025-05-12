export default function img(src, w){
    let style = `
        {
            width:${w};
            margin:0px 20px;
            border-radius:10px;
            box-shadow:0px 0px 2px 0px var(--colorBlack);
        }
        :responsive{
            width:60%;
            margin:10px 0px;
        }`

    const img = cE("img", style)
    img.src = src
    return(img)
}