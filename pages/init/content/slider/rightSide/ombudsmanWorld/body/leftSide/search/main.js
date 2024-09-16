import input from "./input/main.js"

export default function search(){
    const search = document.createElement("div")
    search.className = "width100"
    search.appendChild(input())
    return(search)
}