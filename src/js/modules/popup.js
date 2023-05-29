function popup() {
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".main__create").addEventListener("click", function() {
            document.getElementById("create-step1").classList.add("open")
        })

        document.querySelector(".btn-step1").addEventListener("click", function() {
            document.getElementById("create-step1").classList.remove("open")
            document.getElementById("create-step2").classList.add("open")
        })

        /*Закрытие окон*/
        document.getElementById("popup-close1").addEventListener("click", () => {
            document.getElementById("create-step1").classList.remove("open")
        })
        document.getElementById("popup-close2").addEventListener("click", () => {
            document.getElementById("create-step2").classList.remove("open")
        })
        document.getElementById("popup-close3").addEventListener("click", () => {
            document.getElementById("create-step3").classList.remove("open")
        })
    })
}

function preloader() {
    var progressBar = document.getElementById('progress-bar');
    var width = 0;
    var perc = 0;
    
    // Запускаем интервал, который будет увеличивать ширину прогресс-бара
    var interval = setInterval(function() {
        width++;
        perc++;
        progressBar.style.width = width + '%';
        percents.innerHTML = perc;
    
        // Если достигнут максимум, останавливаем интервал и переходим на другую страницу
        if (width >= 100) {
        clearInterval(interval);
            document.getElementById('create-step2').classList.remove("open")
            document.getElementById('create-step3').classList.add("open")
        }
    }, 200); // Интервал в миллисекундах, через который будет обновляться прогресс
    }

export {popup, preloader}