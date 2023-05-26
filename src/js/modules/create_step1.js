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
    })

}

export default popup;