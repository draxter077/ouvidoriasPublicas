import title from "./title/main.js"

export default function post(src, t){
    let style = `
        {
            position:relative;
            height:250px;
            width:500px;
            margin:10px;
            border-radius:5px;
            background:url(${src});
            background-size:cover;
            overflow:hidden;
            cursor:pointer;
            transition:transform var(--transitionTime);
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            height:150px;
            width:300px;
        }`

    const post = cE("div", style)
    post.appendChild(title(t))
    return(post)
}