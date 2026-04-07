

function initializeCountdown() {
    const countdownDiv = document.getElementById('countdown');
    const h1 = document.createElement('h1');
    h1.textContent = 'Graduation Countdown Timer';
    countdownDiv.appendChild(h1);

    const p = document.createElement('p');
    p.id = 'countdown-display';
    countdownDiv.appendChild(p);

    const startButton = document.createElement('button');
    startButton.textContent = 'Start Countdown';
    countdownDiv.appendChild(startButton);

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Countdown';
    countdownDiv.appendChild(stopButton);

    const zeroButton = document.createElement('button');
    zeroButton.textContent = 'Set Countdown to Zero';
    countdownDiv.appendChild(zeroButton);

    startButton.addEventListener('click', startCountdown);
    stopButton.addEventListener('click', stopCountdown);
    zeroButton.addEventListener('click', setCountdownToZero);

    // Hide celebration message initially
    document.getElementById('celebration-message').style.display = 'none';
}

let countdownInterval;

function startCountdown() {
    // Hide celebration message when starting countdown
    document.getElementById('celebration-message').style.display = 'none';
    
    const graduationDate = new Date('April 25, 2027 11:00:00');
    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = graduationDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('countdown-display').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            celebrationMessage();
        }
    }, 1000);
}

function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

function setCountdownToZero() {
    stopCountdown();
    celebrationMessage();
}

function fetchCelebrationMessage(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'celebration.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const messages = data.Messages;
            const keys = Object.keys(messages);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            callback(messages[randomKey]);
        }
    };
    xhr.send();
}

function celebrationMessage() {
    fetchCelebrationMessage(function(message) {
        const msgDiv = document.getElementById('celebration-message');
        msgDiv.textContent = message;
        msgDiv.style.display = 'block';
    });
}

// Initialize when the page loads
window.onload = initializeCountdown;

function fetchCelebrationMessagePromise() {
    Promise.prototype.fetchCelebrationMessage = function() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'celebration.json', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(new Error('Failed to fetch celebration message'));
                }
            };
            xhr.onerror = function() {
                reject(new Error('Network error'));
            };
            xhr.send();
        });
    };
}

