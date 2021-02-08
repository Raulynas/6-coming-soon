class Validator {
    isValidName(name) {
        if (typeof name !== "string" || name === "" || name.trim() === "") {
            return "Vardas negali buti tuscias tekstas";
        } else {
            return true;
        }
        //tik vienas zodis
        //tik abeceles raides
        //pirma raide didzioji, kitos mazosios (slice, upper case and lower case methods)
    }

    isValidEmail(email) {
        // read more: email adderss is wikipedia
        if (typeof email !== "string" || email === "" || email.trim() === "") {
            return "Email negali buti tuscias tekstas";
        } else {
            return true;
        }
    }

    isValidText(text) {
        if (typeof text !== "string" || text === "" || text.trim() === "") {
            return "Text negali buti tuscias tekstas";
        } else {
            return true;
        }
        // tuti tureti @ raide
        // negali buti tarpu pries ir po @
    }
}
export { Validator };
