function contact(event) {
    event.preventDefault()

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('it worked 1')
    }, 1000);
}

let isModalopen = false;
function toggleModal() {
    if (isModalopen) {
        isModalopen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalopen = !isModalopen;
    document.body.classList += " modal--open";
}