const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.getElementById('gif');
const yes_btn = document.querySelector('.yes-btn');
const no_btn = document.querySelector('.no-btn');
yes_btn.addEventListener("click", handleYes);
no_btn.addEventListener("mouseover", changeImage);
no_btn.addEventListener("mouseout", restoreImage);
no_btn.addEventListener("click", handleNo)
document.addEventListener("mouseover", (event) => {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    console.log(mouseX, mouseY)
})

function changeImage() {
    gif.src = "./assets/img/shy.gif";
    event.preventDefault()
    console.log("Wrong Answer")
}

function restoreImage() {
    gif.src = "./assets/img/cat.gif";
}

function handleNo() {
    showSweetAlert(false);
}

function handleYes() {
    console.log("YAYAYAYYA");
    window.location.href = "./yes.html";
    //showSweetAlert(true)
}

function showSweetAlert(isYesClicked) {
    const title = isYesClicked ? 'Great!' : 'Try Again :3';
    const text = isYesClicked ? 'You said YES!' : '❤️❤️❤️';
    const icon = isYesClicked ? 'success' : 'error';
  
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        customClass: {
            title: 'your-custom-title-class',
            text: 'your-custom-text-class' 
        }
    });
}

