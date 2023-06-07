// Select all elements with the class 'button_div'
document.querySelectorAll('.button_div').forEach(buttonDiv => {
    // Add event listener for click event on the 'indicator' child of each 'button_div'
    buttonDiv.querySelector('.indicator').addEventListener('click', () => {
        // On click, hide the 'circle' child of 'button_div'
        buttonDiv.querySelector('.circle').style.display = 'none';
    });
});

// Select all elements with the class 'indicator' that are children of elements with class 'buttons'
document.querySelectorAll('.buttons .indicator').forEach(button => {
    // Select the image within the 'date-container' child of each 'indicator'
    const img = button.querySelector('.date-container img');
    // Store the original source of the image
    const originalSrc = img.src;

    // Add event listener for mouseenter event on each 'indicator'
    button.addEventListener('mouseenter', () => {
        // On mouseenter, change the source of the image
        img.src = 'images/time__1_.png'; // path to new image
    });

    // Add event listener for mouseleave event on each 'indicator'
    button.addEventListener('mouseleave', () => {
        // On mouseleave, restore the original source of the image
        img.src = originalSrc; // restore the original image
    });
});

var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('id');

function voltarTela(){
    window.location.href = "/agricultor/agricultor.html?id=" + userId;
}