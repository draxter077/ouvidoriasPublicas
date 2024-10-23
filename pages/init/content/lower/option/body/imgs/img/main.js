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
        
    const img = createElementToPage(undefined, "img", style)
    img.src = src
    return(img)
}