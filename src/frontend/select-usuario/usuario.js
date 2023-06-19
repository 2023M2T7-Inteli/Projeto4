window.onload = function() {
    let buttons = document.querySelectorAll('.user-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            let img = this.querySelector('.profile-picture');
            img.setAttribute('src', 'images/profile3.png');
        });

        button.addEventListener('mouseleave', function() {
            let img = this.querySelector('.profile-picture');
            img.setAttribute('src', 'images/profile.png');
        });
    });
};