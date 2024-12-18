export default function author(a){
    const author = createElementToPage(undefined, "div", undefined)
    author.innerHTML = a
    return(author)
}