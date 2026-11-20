const siteHeader = document.querySelector("header[data-shared-header]");

if (siteHeader) {
    fetch("/header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Unable to load header.html: ${response.status}`);
            }

            return response.text();
        })
        .then((markup) => {
            siteHeader.innerHTML = markup;
        })
        .catch((error) => {
            console.error("Unable to load the shared site header.", error);
        });
}
