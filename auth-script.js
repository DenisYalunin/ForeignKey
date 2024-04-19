document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.getElementById("login-btn");
    var registerBtn = document.getElementById("register-btn");
    var passwordRepeatField = document.getElementById("password-repeat");
    var submitBtn = document.getElementById("submit-btn");
    var submitBtnText = submitBtn.innerText;

    loginBtn.addEventListener("click", function () {
        loginBtn.classList.add("active");
        registerBtn.classList.remove("active");
        passwordRepeatField.style.display = "none";
        submitBtn.innerText = submitBtnText;
        var submitBtnImg = document.querySelector(".submit-btn-img");
        submitBtnImg.src = "../Project/img/sign_in_button.png";
    });

    registerBtn.addEventListener("click", function () {
        registerBtn.classList.add("active");
        loginBtn.classList.remove("active");
        passwordRepeatField.style.display = "block";
        submitBtn.innerText = "Зарегистрироваться";
        var submitBtnImg = document.querySelector(".submit-btn-img");
        submitBtnImg.src = "../Project/img/sign_up_button.png";
    });

    submitBtn.addEventListener("click", function () {
        //Код для отправки формы
    });

    var vkBtn = document.getElementById("vk-btn");
    vkBtn.addEventListener("click", function () {
        // Код для обработки клика по кнопке "Продолжить с ВК"
    });

    var registerSubmitBtn = document.getElementById("register-submit-btn");
    registerSubmitBtn.addEventListener("click", function () {
        // Код для обработки клика по кнопке "Зарегистрироваться"
    });
});
