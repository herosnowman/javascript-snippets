// works on github profile's repositories tab
// highlights private project labels with red and public ones with green
document.querySelectorAll('span.Label').forEach(elem => {
    if (elem.innerText.includes('Private')) {
        elem.style.color = "red";
    }
    else {
        elem.style.color = "green";
    }
});
