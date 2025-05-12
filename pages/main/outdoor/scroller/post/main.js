export default function post(){
    let style = `
        {
            width:500px;
            aspect-ratio:2;
            background:black;
            margin:10px;
        }
        :responsive{
            height:150px;
        }`

    const post = cE("div", style)
    return(post)
}