const $1 = document.querySelector.bind(document);
const $$1 = document.querySelectorAll.bind(document);

// Tạm thời

const setting = $$1('.header-function__item');
console.log(setting )
setting[3].addEventListener('click', function() {
    $1('.header-setting').classList.toggle('active');
});

// Click vào option hiện nút đăng xuất

const optionVip = $1('.more-icon');

optionVip.onclick = function() {
    $1('.signout-wapper').classList.toggle('active');
}
    

      