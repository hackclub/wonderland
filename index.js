const startFadeoutDur = 10; // block
const midFadeupDur = 10;
const midMoveDur = 75; // block
const midBgFadeoutDur = 2;
const botFadeupOff = 10; // block
const botFadeupDur = 5; // block

const topWordsFadeupStartOff = 5;
const topWordsFadeupDur = 3;
const topWordsFadeupOff = 8;

const midWordsFadeupStartOff = 9;
const midWordsFadeupDur = 3;
const midWordsFadeupOff = 4;

const wonderfulWordsFadeupOff = 0;
const wonderfulWordsFadeupDur = 3;

const timeline = anime.timeline({
    autoplay: false,
});

timeline.add(
    {
        targets: '#top',
        opacity: [1, 0],
        easing: 'easeInOutQuad',
        duration: startFadeoutDur,
        changeBegin: () => {
            document.querySelector('#top').style.display = 'block';
            document.querySelector('#bot').style.display = 'none';
        },
        complete: () => {
            document.querySelector('#top').style.display = 'none';
        },
    },
    0,
);

timeline.add(
    {
        targets: '#mid',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: midFadeupDur,
    },
    startFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-banner-container',
        top: function () {
            const h = document.querySelector(
                '#mid-banner-container',
            ).clientHeight;
            return [0, document.documentElement.clientHeight - h];
        },
        easing: 'easeInQuad',
        duration: midMoveDur,
    },
    startFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-rabbit1',
        top: ['20%', '80%'],
        easing: 'easeInQuad',
        duration: midMoveDur,
    },
    startFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-rabbit2',
        top: ['20%', '80%'],
        easing: 'easeInQuad',
        duration: midMoveDur,
    },
    startFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-rabbit3',
        top: ['20%', '80%'],
        easing: 'easeInQuad',
        duration: midMoveDur,
    },
    startFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-rabbit1',
        opacity: [1, 0],
        easing: 'linear',
        duration: midMoveDur * 0.6,
    },
    startFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-rabbit3',
        opacity: [0, 1],
        easing: 'linear',
        duration: midMoveDur * 0.3,
    },
    startFadeoutDur + midMoveDur * 0.7,
);

timeline.add(
    {
        targets: '#mid-words-1',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: topWordsFadeupDur,
    },
    startFadeoutDur + topWordsFadeupStartOff,
);

timeline.add(
    {
        targets: '#mid-words-2',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: topWordsFadeupDur,
    },
    startFadeoutDur + topWordsFadeupStartOff + 1 * topWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-3',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: topWordsFadeupDur,
    },
    startFadeoutDur + topWordsFadeupStartOff + 2 * topWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-4',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: topWordsFadeupDur,
    },
    startFadeoutDur + topWordsFadeupStartOff + 3 * topWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-5',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: topWordsFadeupDur,
    },
    startFadeoutDur + topWordsFadeupStartOff + 4 * topWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-6',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: midWordsFadeupDur,
    },
    startFadeoutDur +
        topWordsFadeupStartOff +
        4 * topWordsFadeupOff +
        midWordsFadeupStartOff,
);

timeline.add(
    {
        targets: '#mid-words-7',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: midWordsFadeupDur,
    },
    startFadeoutDur +
        topWordsFadeupStartOff +
        4 * topWordsFadeupOff +
        midWordsFadeupStartOff +
        1 * midWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-8',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: midWordsFadeupDur,
    },
    startFadeoutDur +
        topWordsFadeupStartOff +
        4 * topWordsFadeupOff +
        midWordsFadeupStartOff +
        2 * midWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-9',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: midWordsFadeupDur,
    },
    startFadeoutDur +
        topWordsFadeupStartOff +
        4 * topWordsFadeupOff +
        midWordsFadeupStartOff +
        3 * midWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-10',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: midWordsFadeupDur,
    },
    startFadeoutDur +
        topWordsFadeupStartOff +
        4 * topWordsFadeupOff +
        midWordsFadeupStartOff +
        4 * midWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-words-11',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: midWordsFadeupDur,
    },
    startFadeoutDur +
        topWordsFadeupStartOff +
        4 * topWordsFadeupOff +
        midWordsFadeupStartOff +
        5 * midWordsFadeupOff,
);

// timeline.add(
//     {
//         targets: '#mid-words-12',
//         opacity: [0, 1],
//         easing: 'easeInQuad',
//         duration: midWordsFadeupDur,
//     },
//     startFadeoutDur +
//         topWordsFadeupStartOff +
//         4 * topWordsFadeupOff +
//         midWordsFadeupStartOff +
//         6 * midWordsFadeupOff,
// );

timeline.add(
    {
        targets: '#mid-words-12',
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: wonderfulWordsFadeupDur,
    },
    startFadeoutDur + midMoveDur + wonderfulWordsFadeupOff,
);

timeline.add(
    {
        targets: '#mid-rabbit1',
        opacity: 0,
        easing: 'easeInQuad',
        duration: midBgFadeoutDur,
    },
    startFadeoutDur + midMoveDur - midBgFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-rabbit2',
        opacity: 0,
        easing: 'easeInQuad',
        duration: midBgFadeoutDur,
    },
    startFadeoutDur + midMoveDur - midBgFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-rabbit3',
        opacity: 0,
        easing: 'easeInQuad',
        duration: midBgFadeoutDur,
    },
    startFadeoutDur + midMoveDur - midBgFadeoutDur,
);

timeline.add(
    {
        targets: '#mid-banner-container',
        opacity: [1, 0],
        easing: 'easeInQuad',
        duration: midBgFadeoutDur,
    },
    startFadeoutDur + midMoveDur - midBgFadeoutDur,
);

timeline.add(
    {
        targets: '#mid',
        opacity: [1, 0],
        easing: 'easeInQuad',
        duration: botFadeupDur,
    },
    startFadeoutDur + midMoveDur + botFadeupOff,
);

timeline.add(
    {
        targets: '#bot',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: botFadeupDur,
        begin: () => {
            document.querySelector('#bot').style.display = 'block';
        },
        changeBegin: () => {
            document.querySelector('#top').style.display = 'none';
            document.querySelector('#bot').style.display = 'block';
        },
    },
    startFadeoutDur + midMoveDur + botFadeupOff,
);

// https://codepen.io/gaougalos/pen/bJXYZa
const html = document.documentElement;
const body = document.body;
function getScrollPercent() {
    return (
        (html.scrollTop || body.scrollTop) /
        ((html.scrollHeight || body.scrollHeight) - html.clientHeight)
    );
}

window.addEventListener('scroll', () => {
    timeline.seek(timeline.duration * getScrollPercent());
});

// make sure scroll is correct
timeline.seek(timeline.duration * getScrollPercent());
setTimeout(() => {
    timeline.seek(timeline.duration * getScrollPercent());
}, 500);

const duration = 20000;
let start, previousTimeStamp;

function scroller(t) {
    if (start === undefined) {
        start = t;
    }
    const elapsed = t - start;

    if (previousTimeStamp !== t) {
        const maxHeight =
            (html.scrollHeight || body.scrollHeight) - html.clientHeight;
        html.scrollTop = (maxHeight * elapsed) / duration;
    }

    previousTimeStamp = t;
    if (elapsed < duration) {
        window.requestAnimationFrame(scroller);
    }
}

function scrollThrough() {
    start = undefined;
    previousTimeStamp = undefined;
    requestAnimationFrame(scroller);
}

document.querySelector('#scroll-prompt').addEventListener('click', () => {
    scrollThrough();
});

function shootingStar(id) {
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const travelX = anime.random(0.5 * clientWidth, 1 * clientWidth);
    const travelY = anime.random(0.1 * clientHeight, 0.3 * clientHeight);
    const angle = Math.atan2(travelY, travelX) + Math.PI / 16;

    anime({
        targets: id,
        top: [
            {
                value:
                    anime.random(0.1 * clientHeight, 0.45 * clientHeight) +
                    'px',
                duration: 0,
            },
            { value: '+=' + travelY + 'px', easing: 'easeInQuad' },
        ],
        left: [
            { value: anime.random(0, 0.2 * clientWidth) + 'px', duration: 0 },
            { value: '+=' + travelX + 'px', easing: 'linear' },
        ],
        rotate: [
            { value: 0, duration: 0 },
            { value: angle + 'rad', easing: 'easeOutSine' },
        ],
        height: [
            { value: 0, duration: 0 },
            { value: anime.random(3, 5) },
            { value: 0 },
        ],
        width: [{ value: 3, duration: 0 }, { value: anime.random(6, 20) }],
        duration: anime.random(3000, 7000),
        delay: anime.random(0, 8000),
        easing: 'easeInOutQuad',
        complete: shootingStar.bind(null, id),
    });
}

shootingStar('#star1');
shootingStar('#star2');
shootingStar('#star3');
shootingStar('#star4');
shootingStar('#star5');
shootingStar('#star6');

const overlay = document.querySelector('#overlay');
document.querySelectorAll('.modal').forEach((modal) => {
    const closeModal = () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    };

    modal
        .querySelector('.modal-header-close')
        .addEventListener('click', closeModal);

    overlay.addEventListener('click', closeModal);
});

document.querySelector('#bot-where').addEventListener('click', () => {
    document.querySelector('#where-modal').classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('no-scroll');
});

document.querySelector('#bot-crates-button').addEventListener('click', () => {
    document.querySelector('#crates-modal').classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('no-scroll');
});

document.querySelector('#bot-travel').addEventListener('click', () => {
    document.querySelector('#travel-modal').classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('no-scroll');
});

document.querySelector('#bot-questions').addEventListener('click', () => {
    document.querySelector('#questions-modal').classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('no-scroll');
});

const spinPinwheel = () => {
    anime({
        targets: '#pinwheel-head',
        rotate: ['0deg', '360deg'],
        duration: 1000,
        easing: 'easeInOutQuad',
    });
};

document
    .querySelector('#pinwheel-head')
    .addEventListener('mouseover', spinPinwheel);

document
    .querySelector('#pinwheel-head')
    .addEventListener('click', spinPinwheel);

const particlesContainer = document.querySelector('#bot-rabbit-particles');

var n = 8;

for (var j = 0; j < n; j++) {
    const dot = document.createElement('div');
    dot.classList.add('rabbit-particle');
    particlesContainer.appendChild(dot);

    const size = 12;

    dot.style.width = size + 'px';
    dot.style.height = size + 'px';

    dot.style.opacity = '0';
}

const rabbitParticles = () => {
    anime({
        easing: 'easeInQuad',
        opacity: [
            {
                value: 0,
                duration: 0,
            },
            {
                value: 1,
                duration: 10,
            },
            {
                value: 0,
                duration: 700,
            },
        ],

        targets: document.querySelectorAll('.rabbit-particle'),

        duration: 150,

        rotate: {
            value: function () {
                return [0, anime.random(-30, 30)];
            },
            delay: anime.stagger(2),
        },

        translateX: {
            value: function () {
                return [0, anime.random(-100, 100)];
            },
            delay: anime.stagger(2),
        },
        translateY: {
            value: function () {
                return [0, anime.random(-50, -120)];
            },
            delay: anime.stagger(2),
        },
    });
};

document
    .querySelector('#bot-rabbit')
    .addEventListener('mouseover', rabbitParticles);
document
    .querySelector('#bot-rabbit')
    .addEventListener('click', rabbitParticles);

const ids = [];
const descriptions = [
    'a toy rabbit',
    'a lamp',
    'a toaster',
    'an animal balloon',
    'a lemon',
    'fish slippers',
    'a snowglobe',
    'a gumball machine',
    'a cactus',
    'a teddy bear',
    'ice cream',
    'a bus',
    'an hourglass',
    'an umbrella',
    'a rock',
    'a rubber duck',
    'a stop sign',
    'a chair',
    'headphones',
    'roller skates',
    'a garbage can',
    'a bird',
    'a tree',
    'a bottle',
    'a drill',
    'a selfie stick',
    'a messaging app',
    'a drone',
    'a vr headset',
    'twitter api (rip)',
];

const refreshSlots = () => {
    while (ids.length < 3) {
        const id = anime.random(1, descriptions.length);
        if (!ids.includes(id)) {
            ids.push(id);
        }
    }
    document.querySelectorAll('.slot').forEach((slot) => {
        slot.querySelector('.slot-hidden').style.opacity = 1;
        slot.querySelector('.slot-desc').style.opacity = 0;
        const id = ids.pop();
        slot.querySelector('img').src = '/images/slot' + id + '.webp';
        slot.querySelector('.slot-desc').innerText = descriptions[id - 1];
    });
};

refreshSlots();
document.querySelector('#slot-refresh').addEventListener('click', refreshSlots);

document.querySelectorAll('.slot').forEach((slot) => {
    slot.addEventListener('mouseover', () => {
        anime({
            loop: false,
            targets: slot.querySelector('.slot-hidden'),
            opacity: 0,
            easing: 'easeInOutQuad',
            duration: 200,
        });
        anime({
            loop: false,
            targets: slot.querySelector('.slot-desc'),
            opacity: 1,
            easing: 'easeInOutQuad',
            duration: 200,
        });
    });
});
