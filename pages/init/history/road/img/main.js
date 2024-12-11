export default function img(){
    let style = `
        {
            height: 100%;
        }`

    const img = createElementToPage(undefined, "img", style)
    img.src = "https://t4.ftcdn.net/jpg/05/74/91/39/360_F_574913989_B5hp8QeRumcRAYyDp6KsFOOteaE1bIln.jpg"
    return(img)
}