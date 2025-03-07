document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".form-control");
    const loginContainer = document.querySelector(".login");
    
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            loginContainer.style.boxShadow = "0px 0px 25px rgba(90, 62, 43, 0.4)";
        });

        input.addEventListener("blur", () => {
            loginContainer.style.boxShadow = "0px 0px 15px rgba(90, 62, 43, 0.2)";
        });
    });

    document.querySelector(".btn-primary").addEventListener("click", () => {
        let button = document.querySelector(".btn-primary");
        button.style.animation = "pulse 0.5s ease-in-out";
        setTimeout(() => {
            button.style.animation = "";
        }, 500);
    });
});
