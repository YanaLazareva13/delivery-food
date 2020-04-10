let cartButton = document.querySelector('#cart-button');
let modal = document.querySelector('.modal');
let closeWindow = document.querySelector('.close');

cartButton.addEventListener('click', function(event){
    modal.classList.add('active');
});
closeWindow.addEventListener('click', function(event){
    modal.classList.remove('active');
});

/*cartButton.addEventListener('click', toggleModal);
closeWindow.addEventListener('click',toggleModal);

function toggleModal() {
    modal.classList.toggle('active');
}*/

new WOW().init();