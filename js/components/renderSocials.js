function renderSocials(selector, data) {
    //validation

    if (typeof selector !== "string") {
        return "ERROR: Selector has to be string type";
    }
    if (selector === "") {
        return "ERROR: Selector cannot be empty text";
    }

    if (!Array.isArray(data)) {
        return console.error("ERROR: data must be of array type");
    }

    const count = data.length;

    if (count === 0) {
        return console.error("ERROR: no objects in data");
    }

    //logic

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error("ERROR: Selector does not exist");
    }

    let HTML = "";
    for (let i = 0; i < count; i++) {
        const item = data[i];

        if (!isValidItem(item)) {
            console.warn("WARNING: Wrong data formt", item);
            continue;
        }
        HTML += `<a href="${item.href}" target="_blank" rel="noreferrer noopener" class="fa fa-${item.icon}"></a>`;
    }

    //post logic

    if (HTML === "") {
        return console.error("ERROR: no objects in the data list");
    }

    //return result
    DOM.innerHTML = HTML;

    return;
}

function isValidItem(item) {
    if (
        typeof item !== "object" ||
        Array.isArray(item) ||
        !item.href ||
        typeof item.href !== "string" ||
        !item.icon ||
        typeof item.icon !== "string"
    ) {
        return false;
    } else {
        return true;
    }
}

export { renderSocials };
