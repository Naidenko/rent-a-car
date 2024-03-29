var navMain = document.querySelector('.header-top__list');
var navToggle = document.querySelector('.page-header__toggle');
var button = document.querySelector('.header-top__button');

navMain.classList.remove('list_opened');
navMain.classList.add('list_closed');

navToggle.addEventListener('click', function () {
    if(navMain.classList.contains('list_closed')){
        navMain.classList.remove('list_closed');
        button.classList.remove('header-top_closed');
        button.classList.add('header-top_opened');
    } else {
        navMain.classList.add('list_closed');
        button.classList.remove('header-top_opened');
        button.classList.add('header-top_closed');
    }
});

var moreToggle = document.querySelector('.info__button');
var textToggle = document.querySelector('.info__condition');
var textWrap = document.querySelector('.info__text-wrap');
var buttonText = document.querySelector('.info__more');

textWrap.classList.remove('info__text-wrap_opened');
textWrap.classList.add('info__text-wrap_close');

moreToggle.addEventListener('click', function () {
    if(textWrap.classList.contains('info__text-wrap_close')) {
        textWrap.classList.remove('info__text-wrap_close');
        buttonText.classList.remove('info__button_closed');
        buttonText.classList.add('info__button_opened')
    } else {
        textWrap.classList.add('info__text-wrap_close');
        buttonText.classList.remove('info__button_opened');
        buttonText.classList.add('info__button_closed')
    }
});

textToggle.addEventListener('click', function () {
    textWrap.classList.add('info__text-wrap_close');
    buttonText.classList.remove('info__button_opened');
    buttonText.classList.add('info__button_closed')
});

var linkItem = document.querySelector('.availability__more'),
    boxItem = document.querySelector('.availability__list');

linkItem.onclick = function() {
    boxItem.classList.remove("advantages__list--close");
    linkItem.style.display='none';
};

var popupWrap = document.querySelector('.popup__wrap');
var popup = document.querySelector('.popup');

var openPopup = function() {
    popup.classList.add('popup__open');
    popupWrap.classList.add('popup__open');
};

var closePopup = function() {
    popup.classList.remove('popup__open');
    popupWrap.classList.remove('popup__open');

};

var openButtons = document.querySelectorAll('.open__popup');
for (var i = 0; i <openButtons.length; i++) {
    openButtons[i].onclick = openPopup;
}

var buttonPopup = document.querySelector('.popup__close');

popupWrap.onclick = closePopup;
buttonPopup.onclick = closePopup;

var popupThank = document.querySelector('.popup-thank');
var popupThankWrap = document.querySelector('.popup-thank__wrap');
var popupForm = document.querySelector('.popup__form');

popupForm.addEventListener('submit', function(e){
    if(!e) e = window.event;

    e.preventDefault();
    e.stopPropagation();
    popup.classList.remove('popup__open');
    popupWrap.classList.remove('popup__open');
    popupThank.classList.add('popup__open');
    popupThankWrap.classList.add('popup__open');
});

var popupThankClose = document.querySelector('.popup-thank__close');

var closeThankPopup = function() {
    popupThank.classList.remove('popup__open');
    popupThankWrap.classList.remove('popup__open');
};

popupThankClose.onclick = closeThankPopup;
popupThankWrap.onclick = closeThankPopup;

var offerForm = document.querySelector('.offer__form');

offerForm.addEventListener('submit', function(e){
    if(!e) e = window.event;

    e.preventDefault();
    e.stopPropagation();
    popupThank.classList.add('popup__open');
    popupThankWrap.classList.add('popup__open');
});