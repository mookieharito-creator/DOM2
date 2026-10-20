// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the color-box and change-color-btn elements using document.getElementById()
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random hexadecimal color code
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add an event listener to the change-color-btn element
    changeColorBtn.addEventListener("click", function () {
        // Generate random color and apply it to the color-box background
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});