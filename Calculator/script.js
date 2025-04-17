window.onload = function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.onclick = () => {
            const value = button.getAttribute("data-value");
            const action = button.getAttribute("data-action");

            if (action === "clear") {
                display.value = "";
            } else if (action === "calculate") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else if (value) {
                display.value += value;
            }
        };
    });
};
