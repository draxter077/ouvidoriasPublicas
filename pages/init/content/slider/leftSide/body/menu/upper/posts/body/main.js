export default function body(){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperPostsBody{
            height: 100%;
            background: var(--colorWhite);
            border-radius: 0px 0px 15px 15px;
            max-height: 0px;
            transition: max-height var(--transitionTime), border-radius var(--transitionTime);
        }
        @media screen and (max-width: 1000px){
            .initContentSliderLeftSideBodyMenuUpperPostsBody{
                height: 300px;
            }
        }
    `

    const body = document.createElement("div")
    body.className = "initContentSliderLeftSideBodyMenuUpperPostsBody"
    return(body)
}