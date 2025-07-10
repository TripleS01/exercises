var docReadyId = setInterval(function () {
    if ((document.readyState === "interactive" || document.readyState === "complete")) {
        clearInterval(docReadyId);
        loadImages();
    }
}, 50);

function loadImages() {
    const banner = document.getElementById("banner");

    const whiteShape = document.createElement("div");
    whiteShape.className = "whiteShape";
    banner.appendChild(whiteShape);

    const logo = document.createElement("img");
    logo.src = "../img/chromeye_logo.svg";
    logo.className = "logo";
    banner.appendChild(logo);

    const ball = document.createElement("img");
    ball.src = "../img/ball_soccer.png";
    ball.className = "ball";
    banner.appendChild(ball);

    generateTexts();
}

function generateTexts() {
    var banner = document.getElementById('banner');

    const text1 = document.createElement('div');
    text1.className = 'text1';
    const words = 'WE ARE CHROMEYE'.split(' ');
    text1.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    banner.appendChild(text1);

    const text2 = document.createElement('div');
    text2.className = 'text2';
    const text2Text = 'We are a European digital studio which gradually grew to transform into a global digital agency.'
    text2.innerHTML = text2Text;
    banner.appendChild(text2);

    animation();
}

function typeText() {
    const text2 = document.querySelector('.text2');
    const fullText = text2.textContent;
    text2.textContent = '';
    let index = 0;

    const interval = setInterval(() => {
        if (index < fullText.length) {
            text2.textContent += fullText[index++];
        } else {
            clearInterval(interval);
        }
    }, 25);
}

function animation() {
    const banner = document.getElementById('banner');
    const logo = document.querySelector('.logo');
    const whiteShape = document.querySelector('.whiteShape');
    const ball = document.querySelector('.ball');
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');

    banner.style.opacity = 1;

    const tl = gsap.timeline();

    tl.set(logo, { opacity: 1 })
        .to(whiteShape, {
            duration: 1,
            height: '20%',
            top: '80%',
            ease: "power1.inOut"
        }, "+=2")
        .to(logo, {
            duration: 1,
            top: '90%',
            ease: "power1.inOut"
        }, "<")

        .set(ball, { opacity: 1 })
        .to(ball, {
            duration: 0.6,
            x: 165,
            y: 187,
            rotation: 360,
            ease: "power2.out"
        })
        .to(ball, {
            duration: 0.8,
            x: 600,
            y: -50,
            rotation: 1080,
            ease: "power3.in"
        })

        .set(text1, { opacity: 1 })
        .from(".word", {
            duration: 0.5,
            x: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: 0.5
        })
        .to({}, { duration: 0.3 })
        .to(text2, {
            duration: 0.02,
            opacity: 1,
            onStart: typeText
        });
}