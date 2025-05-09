export default function link(t){
    let style = `
        {
            position:relative;
            font-size:22px;
            color:var(--colorWhite);
            margin:0px 20px;
            cursor:pointer;
        }
        ::after{
            position:absolute;
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorWhite);
            content:"";
            transition:width var(--transitionTime);
        }
        :hover::after{
            width:100%;
        }
        :responsive{
            margin:0px 5px;
            font-size:18px;
        }`

    const link = cE("div", style)
    link.innerHTML = t
    link.addEventListener(
        "click",
        function a(){
            document.getElementById(t.toLowerCase()).scrollIntoView({behavior:"smooth"})
        }
    )
    return(link)
}