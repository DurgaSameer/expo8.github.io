
        const playButton = document.getElementById('playButton');
        const music = document.getElementById('music');
        const cardInner = document.querySelector('.card-inner');
        let isFlipped = false;

        // Function to handle touch events
        function handleTouch() {
            if (music.paused || music.ended) {
                music.play();
                playButton.innerHTML = 'Pause Music';
                isFlipped = !isFlipped;
            if (isFlipped) {
                cardInner.style.transform = 'rotateY(180deg)';
                musicPlayer.play(); // Start playing the music

            } 
           
            } else {
                music.pause();
                playButton.innerHTML = 'Play Music';
                cardInner.style.transform = 'rotateY(0deg)';
            }
        }

        // Add touchstart event listener to the button
        playButton.addEventListener('touchstart', handleTouch);

        // Listen for the 'ended' event to reset the button text
        music.addEventListener('ended', function () {
            playButton.innerHTML = 'Play Music';
        });
    
