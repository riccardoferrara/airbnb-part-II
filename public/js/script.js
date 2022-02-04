// in the one house page, whe click on thumbnail, main photo is updated 
const updateMainPhoto = (element) => {
    // find the src of the clicked photo
    let src = element.style.backgroundImage
        // change the main photo src
    document.querySelector('.main_img').style.backgroundImage = src
}