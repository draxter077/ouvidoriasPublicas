export default function img(src){
    let style = `
        {
            width:8%;
            aspect-ratio:1;
            margin:0px 10px;
            background:black;
        }
        :responsive{
            width:50%;
            margin:5px 0px;
        }`

    const img = cE("div", style)
    return(img)
}