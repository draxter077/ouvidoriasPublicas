export default function author(a){
    let style = `
        {
            font-size:15px;
            color:var(--colorBlack);
            font-style:italic;
            border-top:1px solid var(--colorBlue);
        }`

    const author = cE("div", style)
    author.innerHTML = a
    return(author)
}