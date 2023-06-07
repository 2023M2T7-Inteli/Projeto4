document.querySelectorAll('.button_div').forEach(buttonDiv => {
    buttonDiv.querySelector('.indicator').addEventListener('click', () => {
        buttonDiv.querySelector('.circle').style.display = 'none';
    });
});

document.querySelectorAll('.buttons .indicator').forEach(button => {
    const img = button.querySelector('.date-container img');
    const originalSrc = img.src;

    button.addEventListener('mouseenter', () => {
        img.src = 'images/time__1_.png'; // path to new image
    });

    button.addEventListener('mouseleave', () => {
        img.src = originalSrc; // restore the original image
    });
});