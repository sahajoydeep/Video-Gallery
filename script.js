document.addEventListener('DOMContentLoaded', function() {
    var currentVideoIndex = 0; // Initialize current video index
    var videoList = ['Video1.mp4', 'Video2.mp4', 'Video3.mp4']; // Array of video URLs

    function play() {
        var video = document.getElementById('video');
        var source = document.createElement('source');
        
        source.setAttribute('src', videoList[currentVideoIndex]);
        source.setAttribute('type', 'video/mp4');
        
        video.appendChild(source);
        video.play();
        console.log({
          src: source.getAttribute('src'),
          type: source.getAttribute('type'),
        });
        
        // Show the Next button
        var nextButton = document.querySelector('.Next');
        nextButton.style.display = 'block';
        
        // Show video controls
        video.controls = true;
    }

    function playNext() {
        currentVideoIndex++; // Increment the current video index
        if (currentVideoIndex >= videoList.length) {
            currentVideoIndex = 0; // Reset to the first video if reached the end
        }
        var video = document.getElementById('video');
        var source = video.querySelector('source');
        // Update the source of the video element to the next video URL
        source.setAttribute('src', videoList[currentVideoIndex]);
        video.load(); // Reload the video to apply the changes
        video.play(); // Play the next video
        
        video.controls = true;
    }

    window.play = play; 
    window.playNext = playNext;
});

const toggleImage = document.getElementById('darkmode');
const x = document.getElementsByClassName('Video')[0];



toggleImage.addEventListener('click', function() {
    const light = document.getElementById('light');
    const sakura = document.getElementById('sakura');
    if (toggleImage.src.endsWith('moon.png')) {
        toggleImage.style.transform = 'rotate(360deg)';
        
        setTimeout(() => {
            toggleImage.src = 'sakura.png'; 
        }, 250); 
        
        setTimeout(() => { 
            document.body.style.backgroundColor = '#000035';
            document.body.style.color='#fbb26d';
            x.style.backgroundColor = '#abbd83';
        }, 500);

    } else if (toggleImage.src.endsWith('sakura.png')) {
        document.getElementById('sakura').style.transform = 'rotate(360deg)';        
        setTimeout(() => { 
            toggleImage.src = 'sun.png';
        }, 250); 
        
        setTimeout(() => { 
            document.body.style.color = 'white'
            document.body.style.backgroundColor='#c3829e';
            x.style.backgroundColor = 'orange';
        }, 500); 

    }
    else {
        light.style.transform = 'rotate(360deg)';
        
        setTimeout(() => { 
            toggleImage.src = 'sun.png';
            toggleImage.src = 'moon.png'; 
        }, 250); 
        
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
            document.body.style.color='black';
            x.style.backgroundColor = 'white';
        }, 500);
    }
});
