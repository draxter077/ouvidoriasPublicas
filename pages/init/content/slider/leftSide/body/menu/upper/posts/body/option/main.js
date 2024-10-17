export default function option(t){
    document.getElementsByTagName("style")[0].innerHTML += `
        .initContentSliderLeftSideBodyMenuUpperPostsBody>div{
            width: 100%;
            border-bottom: 1px solid var(--colorBlack);
            padding: 10px;
            cursor: pointer;
            transition: color var(--transitionTime);
        }
        .initContentSliderLeftSideBodyMenuUpperPostsBody>div:hover{
            color: var(--colorOrange);
        }`

    const option = document.createElement("div")
    option.innerHTML = t
    return(option)
}