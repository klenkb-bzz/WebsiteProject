document.addEventListener("DOMContentLoaded", () => {
    let moreContentButton = document.getElementById("moreContentButton")

    moreContentButton.addEventListener("click", () => {
        let additionalYears = document.querySelectorAll(".additional-year");

        additionalYears.forEach(function (year) {
            year.style.display = year.style.display === "none" || year.style.display === "" ? "block" : "none";
        });
        moreContentButton.innerText = moreContentButton.innerText === "Show more" ? "Show less" : "Show more";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let moreCorpsButton = document.getElementById("additional-corp-button")
    moreCorpsButton.addEventListener("mousedown", () => {
        let moreCorps = document.querySelectorAll(".additional-corp");
        moreCorps.forEach(function(corp) {
            corp.style.display = corp.style.display === "none" || corp.style.display === "" ? "table-row" : "none";
        });
        moreCorpsButton.innerText = moreCorpsButton.innerText === "Show more" ? "Show less" : "Show more";
    })
});