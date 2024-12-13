export default function main(){
    let style = `
        {
            width: 100%;
            height: 200px;
            background: red;
            margin: 0px 0px 20px 0px;
        }`

    const main = createElementToPage(undefined, "div", style)
    main.innerHTML = "Principal"
    return(main)
}