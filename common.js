//=========Common Function=======//

function getInputValueById(elementId){
    const inputFieldElement = document.getElementById(elementId);
    const inputValueString = inputFieldElement.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
