document.addEventListener("DOMContentLoaded", () => {
    let moreContentButton = document.getElementById("moreContentButton")

    moreContentButton.addEventListener("click", () => {
        let additionalYears = document.querySelectorAll(".additional-year");

        additionalYears.forEach(function (year) {
            year.style.display = year.style.display === "none" || year.style.display === "" ? "block" : "none";
        });
        moreContentButton.innerText = moreContentButton.innerText === "Mehr anzeigen" ? "Weniger anzeigen" : "Mehr anzeigen";
    });
});