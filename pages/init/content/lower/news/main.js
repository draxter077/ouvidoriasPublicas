export default function news(){
    const el = createElementToPage("div", `{
                                                height: 100%;
                                                background: var(--colorWhite);
                                                border-radius: 15px;
                                            }`)
    console.log(el)
    return(el)
}