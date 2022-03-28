const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Tạm thời

const setting = $$('.header-function__item');
console.log(setting )
setting[3].addEventListener('click', function() {
    $('.header-setting').classList.toggle('active');
});

// Click vào option hiện nút đăng xuất

const optionVip = $('.more-icon');

optionVip.onclick = function() {
    $('.signout-wapper').classList.toggle('active');

}
    
