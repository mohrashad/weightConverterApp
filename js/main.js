// select the outputs container
const outputContainer = document.getElementById('output');

// display results in documnet function
const elementsContent = (id, content) => document.getElementById(id).textContent = content;

// hide the outputs container
outputContainer.style.visibility = 'hidden';

// handle input event to input field
document.getElementById('lbsInput').addEventListener('input', e => {

    // appear the outputs container
    outputContainer.style.visibility = 'visible';

    // get the input field value
    let lbs = e.target.value;

    // display results in documnet
    elementsContent('gramsOutput', lbs / 0.0022046);
    elementsContent('kgOutput', lbs / 2.2046);
    elementsContent('ozOutput', lbs * 16);
});
