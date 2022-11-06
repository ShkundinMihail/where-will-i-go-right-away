let popup = document.querySelector('.popup');
let popupButton = document.querySelector('.header__list-item_complain');
let groupButtons = document.querySelector('.popup__buttons-group');

popupButton.onclick = function () {
  popup.style.visibility = 'visible';
  popupYes.style.transition = '.6s';
  popupNo.style.transition = '.6s';
};
let popupYes = document.querySelector('.button_state_yes');
let popupNo = document.querySelector('.button_state_no');
  
popupYes.addEventListener('click', function () {
  window.location.href = 'https://shkundinmihail.github.io/where-will-i-go-right-away';
  popup.style.visibility = 'hidden';
  popupYes.style.transition = '.0s';
  popupNo.style.transition = '.0s';
});

popupNo.addEventListener('click', function () {
  popup.style.visibility = 'hidden';
  popupYes.style.transition = '.0s';
  popupNo.style.transition = '.0s';
});

const iconMenu = document.querySelector('.header__burger');

if (iconMenu)
{
  const menu = document.querySelector('.header__nav');
  const icon = document.querySelector('.header__icon-burger');
  iconMenu.addEventListener("click", function(){
    console.log('ready');
    iconMenu.classList.toggle('header__burger_active');
    menu.classList.toggle('header__nav_active');
    icon.classList.toggle('header__icon-burger_active');
    document.body.classList.toggle('page_lock');
  });
  const itemsMenu = document.querySelectorAll('.header__list-item');
  const itemMenuLast = document.querySelector('.header__list-item_complain');

  for(let itemMenu in itemsMenu){
    itemsMenu[itemMenu].addEventListener("click", function(){
      console.log('srabotalo1');
      iconMenu.classList.remove('header__burger_active');
      menu.classList.remove('header__nav_active');
      icon.classList.remove('header__icon-burger_active');
      document.body.classList.remove('page_lock');
    });
    itemMenuLast.addEventListener("click", function(){
    console.log('srabotalo2');
    iconMenu.classList.remove('header__burger_active');
    menu.classList.remove('header__nav_active');
    icon.classList.remove('header__icon-burger_active');
    document.body.classList.remove('page_lock');
    });
  }
}


