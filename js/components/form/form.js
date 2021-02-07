function form(selecotor) {
    const formDOM = document.querySelector(selecotor);
    const allInputsDOM = formDOM.querySelectorAll("input");
    const allTextareasDOM = formDOM.querySelectorAll("textarea");
    const allTextsDOM = [...allInputsDOM, ...allTextareasDOM];
    const submitDOM = formDOM.querySelector('.btn[type="submit"]');

    submitDOM.addEventListener("click", (event) => {
        event.preventDefault();

        for (const input of allTextsDOM) {
            const text = input.value;
            const rule = input.dataset.validationRule;

            switch (rule) {
                case "name":
                    console.log("validation according name rules", text);
                    break;
                case "email":
                    console.log("validation according email rules", text);
                    break;
                case "text":
                    console.log("validation according text rules", text);
                    break;

                default:
                    console.log("unknown validation rule:", text);
                    break;
            }
        }
    });
}
export { form };
