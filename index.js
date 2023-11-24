// index.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the display element
    var display = document.getElementById('display');

    // Get all the buttons
    var buttons = document.querySelectorAll('.button, .equal'); // Include .equal in the selection

    // Add click event listeners to the buttons
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button.innerText);
        });
    });
    // Function to handle button clicks
    function handleButtonClick(value) {
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculateResult();
                break;
            case '←':
                deleteLastCharacter();
                break;
            default:
                appendToDisplay(value);
                break;
        }
    }

    // Function to append value to the display
    function appendToDisplay(value) {
        display.innerText += value;
    }

    // Function to clear the display
    function clearDisplay() {
        display.innerText = '';
    }

    // Function to delete the last character from the display
    function deleteLastCharacter() {
        display.innerText = display.innerText.slice(0, -1);
    }

// Function to calculate the result
    function calculateResult() {
        try {
            const expression = display.innerText;
            console.log('Expression:', expression);

            // Use the Function constructor to parse and calculate the result
            const result = new Function('return (' + expression.trim() + ')')();
            console.log('Result:', result);

            display.innerText = result;
        } catch (error) {
            display.innerText = 'Error';
            console.error('Calculation Error:', error);
        }
    }
});
