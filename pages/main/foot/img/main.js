export default function img(src, url){
    let style = `
        {
            height:40px;
            margin:10px;
            border-radius:5px;
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{
            transform:scale(1.2);
        }`

    const img = cE("img", style)
    img.src = src
    img.addEventListener(
        "click", 
        () => window.open(url,"_blank")
    )
    return(img)
}