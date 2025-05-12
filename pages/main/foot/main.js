import img from "./img/main.js"

export default function foot(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:100%;
            background:var(--colorWhite);
            font-size:22px;
            color:var(--colorBlue);
            padding:20px;
            margin:40px 0px 0px 0px;
        }
        :responsive{
            font-size:17px;
        }`

    const foot = cE("div", style)
    foot.innerHTML = "Esse projeto é uma parceria"
    foot.appendChild(img("./assets/logo.jpg","https://www.ph.net.br"))
    foot.appendChild(img("./assets/cg.png","https://www.camargoegomes.com"))
    return(foot)
}