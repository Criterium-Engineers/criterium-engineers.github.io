document.addEventListener("DOMContentLoaded", () => {
    const markdownLinks = document.querySelectorAll("a[href$='.md']");
    markdownLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            fetch(link.getAttribute("href"))
                .then(response => response.text())
                .then(content => {
                    const preview = document.createElement("div");
                    preview.innerHTML = marked(content); // Use a Markdown parser like Marked.js
                    document.body.appendChild(preview);
                });
        });
    });
});
