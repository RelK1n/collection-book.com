document.addEventListener("DOMContentLoaded", function () {
    // Функционал поиска
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        const bookItems = document.querySelectorAll(".book-item");

        bookItems.forEach(function (item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Функционал клика по элементу списка книг
    const bookItems = document.querySelectorAll(".book-item");
    bookItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const url = item.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });
});
