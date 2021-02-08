import { Validator } from "./Validator.js";

function form(selecotor) {
    const formDOM = document.querySelector(selecotor);
    const allInputsDOM = formDOM.querySelectorAll("input");
    const allTextareasDOM = formDOM.querySelectorAll("textarea");
    const allTextsDOM = [...allInputsDOM, ...allTextareasDOM];
    const submitDOM = formDOM.querySelector('.btn[type="submit"]');

    const validator = new Validator();

    submitDOM.addEventListener("click", (event) => {
        event.preventDefault();

        const errors = [];

        for (const input of allTextsDOM) {
            const text = input.value;
            const rule = input.dataset.validationRule;

            //short validation option

            // let result = validator.isValidText(text);
            // if (result !== true) {
            //     errors.push(result);
            // }

            //long validation option

            let result = null;

            switch (rule) {
                case "name":
                    result = validator.isValidName(text);
                    if (result !== true) {
                        errors.push(result);
                    }
                    break;

                case "email":
                    result = validator.isValidEmail(text);
                    if (result !== true) {
                        errors.push(result);
                    }
                    break;

                case "text":
                    result = validator.isValidText(text);
                    if (result !== true) {
                        errors.push(result);
                    }
                    break;

                default:
                    console.log("unknown validation rule:", rule);
                    break;
            }
        }
        if (errors.length) {
            console.log(errors);
        } else {
            console.log("SUCCSESS: visi laukai validus!");
        }
    });
}
export { form };
