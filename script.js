'use strict';

/* ================================================================================
   ⭐⭐⭐  KONFIGURASI UTAMA — EDIT DI SINI  ⭐⭐⭐
   Semua data personal ada di area ini. Kamu TIDAK perlu mengubah
   index.html atau style.css sama sekali — cukup ubah nilai di bawah ini.
   ================================================================================ */

const birthdayConfig = {
    // EDIT DI SINI — nama orang yang berulang tahun
    name: "Sayang",

    // EDIT DI SINI — umur yang bertambah (tampil di sticker foto hero)
    age: "22",

    // EDIT DI SINI — tanggal & jam ulang tahun untuk countdown.
    // Format WAJIB: "YYYY-MM-DDTHH:mm:ss"  (contoh: "2026-12-31T00:00:00")
    birthdayDate: "2026-09-20T00:00:00",

    // EDIT DI SINI — judul lagu yang tampil di music player
    musicTitle: "Our Song",

    // ================================
    // MASUKKAN FOTO DI SINI
    // ================================
    // Letakkan foto-foto di folder: assets/
    // lalu ubah nama file di array di bawah ini.
    // Foto pertama (index 0) otomatis dipakai sebagai foto utama di Hero Section.
    // Boleh tambah/kurangi jumlah foto sesuka kamu.
    //
    // Contoh: "assets/foto1.jpg"
    photos: [
        "assets/img/foto6.jpg",
        "assets/img/foto2.jpg",
        "assets/img/foto7.jpg",
        "assets/img/foto8.jpg",
        "assets/img/foto5.jpg"
    ],

    // ================================
    // MASUKKAN MUSIK DI SINI
    // ================================
    // Letakkan file musik (mp3) di folder: assets/
    // lalu ubah nama file di bawah ini.
    music: "assets/music/birth-day.mp3"
};

/* ============================================================
   ⭐ TEKS HERO SECTION — EDIT DI SINI ⭐
   ============================================================ */
const heroSubtitle = "Selamat bertambah satu tahun menjadi versi kamu yang lebih hebat.";

/* ============================================================
   ⭐ PESAN DI DALAM KARTU ULANG TAHUN — EDIT DI SINI ⭐
   Gunakan \n untuk ganti baris.
   ============================================================ */
const cardMessage = "Happy Birthday 💗\n\nSemoga tahun ini membawa lebih banyak kebahagiaan, cerita baru, dan hal-hal baik yang nggak kamu sangka.";

/* ============================================================
   ⭐ MEMORY TIMELINE — EDIT DI SINI ⭐
   Tambah, hapus, atau ubah momen sesuka kamu.
   "photo" boleh dikosongkan ("") kalau tidak ada foto untuk momen itu.
   ============================================================ */
const memories = [
    {
        date: "",
        title: "A New Chapter",
        description: "Cerita kecil yang akhirnya menjadi kenangan besar.",
        photo: "assets/img/foto1.jpg"
    },
    {
        date: "",
        title: "Another Little Memory",
        description: "Satu lagi momen yang layak disimpan.",
        photo: "assets/img/foto2.jpg"
    },
    {
        date: "Suatu Hari",
        title: "And Somehow...",
        description: "Ada begitu banyak momen kecil yang diam-diam jadi berharga.",
        photo: "assets/img/foto3.jpg"
    }
];

/* ============================================================
   ⭐ "KENAPA KAMU SPESIAL" — EDIT DI SINI ⭐
   Boleh tambah/kurangi jumlah kartu.
   ============================================================ */
const specialReasons = [
    { emoji: "💗", title: "Your smile", message: "Senyum kamu bisa bikin hari yang berat terasa lebih ringan." },
    { emoji: "✨", title: "Your energy", message: "Energi kamu nular, bikin orang di sekitar ikut bersemangat." },
    { emoji: "🌷", title: "The little things you do", message: "Hal-hal kecil yang kamu lakukan, artinya besar buat orang lain." },
    { emoji: "🫶", title: "The way you make people feel", message: "Kamu punya cara sendiri bikin orang lain merasa dihargai." }
];

/* ============================================================
   ⭐ SURAT ULANG TAHUN — EDIT DI SINI ⭐
   Gunakan baris kosong untuk ganti paragraf.
   ============================================================ */
const birthdayMessage = `Di hari spesial ini, aku cuma ingin kamu tahu bahwa keberadaan kamu adalah salah satu hal kecil yang membuat dunia terasa lebih berwarna.

Semoga langkah kamu ke depan selalu dipertemukan dengan hal-hal baik, orang-orang yang tulus, dan momen-momen yang bikin kamu tersenyum tanpa alasan.

Happy birthday. Terima kasih sudah jadi kamu.`;

/* ============================================================
   ⭐ MINI GAME — EDIT DI SINI (opsional) ⭐
   ============================================================ */
const gameConfig = {
    boxCount: 5,
    wrongMessage: "hehe, bukan yang ini 😭 coba lagi",
    correctMessage: "YOU FOUND IT! 🎉",
    finalMessage: "Semoga semua hal baik yang kamu cari, perlahan menemukan jalan menuju kamu."
};

/* ============================================================
   ⭐ BAGIAN PALING AKHIR — EDIT DI SINI ⭐
   ============================================================ */
const finalMessages = {
    afterSurprise: "Whatever happens next,\nI hope life is kind to you."
};


/* ================================================================================
   ⚙️  BAGIAN DI BAWAH INI ADALAH LOGIKA WEBSITE.
   Tidak perlu diubah kecuali kamu ingin mengubah cara kerja animasi/interaksi.
   ================================================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- UTILITIES ---------- */
function $(selector, scope) { return (scope || document).querySelector(selector); }
function $all(selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); }

function placeholderImage(label) {
    const safeLabel = (label || 'Tambahkan Foto').replace(/[<>&]/g, '');
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#FFB6D9"/><stop offset="50%" stop-color="#C8B6FF"/>' +
        '<stop offset="100%" stop-color="#A9D8FF"/></linearGradient></defs>' +
        '<rect width="100%" height="100%" fill="url(#g)"/>' +
        '<text x="50%" y="44%" font-family="sans-serif" font-size="90" text-anchor="middle" dominant-baseline="middle">💗</text>' +
        '<text x="50%" y="62%" font-family="sans-serif,Arial" font-size="26" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">' + safeLabel + '</text>' +
        '</svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function setImageWithFallback(imgEl, src, fallbackLabel) {
    if (!imgEl) return;
    if (!src) {
        imgEl.src = placeholderImage(fallbackLabel);
        imgEl.classList.add('img-fallback');
        return;
    }
    imgEl.onerror = function () {
        imgEl.onerror = null;
        imgEl.src = placeholderImage(fallbackLabel);
        imgEl.classList.add('img-fallback');
    };
    imgEl.src = src;
}

function makeClickable(el, handler) {
    if (!el) return;
    el.addEventListener('click', handler);
    el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            handler(e);
        }
    });
}

function showToast(message, duration) {
    const container = $('#toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add('is-visible'); });
    setTimeout(function () {
        toast.classList.remove('is-visible');
        setTimeout(function () { toast.remove(); }, 400);
    }, duration || 2600);
}

function staggerReveal(elements, baseDelay, maxDelay) {
    elements.forEach(function (el, i) {
        const delay = Math.min(i * (baseDelay || 90), maxDelay || 480);
        el.style.transitionDelay = delay + 'ms';
    });
}


/* ---------- POPULATE CONTENT FROM CONFIG ---------- */
function populateContent() {
    document.title = 'Happy Birthday, ' + birthdayConfig.name + ' 💗';

    $all('.js-name').forEach(function (el) { el.textContent = birthdayConfig.name; });
    $all('.js-age').forEach(function (el) { el.textContent = birthdayConfig.age; });

    const heroSub = $('.hero-subtitle');
    if (heroSub) heroSub.textContent = heroSubtitle;

    const heroPhoto = $('#heroPhoto');
    setImageWithFallback(heroPhoto, birthdayConfig.photos[0], 'Tambahkan Foto Utama');

    const cardMessageEl = $('#cardMessage');
    if (cardMessageEl) {
        cardMessageEl.textContent = cardMessage;
        cardMessageEl.style.whiteSpace = 'pre-line';
    }

    const musicTitleEl = $('#musicTitleText');
    if (musicTitleEl) musicTitleEl.textContent = birthdayConfig.musicTitle || 'Our Song';

    const finalLastMessageEl = $('#finalLastMessage');
    if (finalLastMessageEl) finalLastMessageEl.textContent = finalMessages.afterSurprise;
    if (finalLastMessageEl) finalLastMessageEl.style.whiteSpace = 'pre-line';
}


/* ---------- OPENING SCREEN ---------- */
function initOpeningScreen() {
    const openBtn = $('#openBtn');
    const openingScreen = $('#openingScreen');
    const mainContent = $('#mainContent');
    if (!openBtn || !openingScreen || !mainContent) return;

    spawnFloatingDecor($('#openingDecor'), 20, ['💗', '✨', '⭐', '🫧', '🌸']);

    openBtn.addEventListener('click', function () {
        document.body.classList.remove('no-scroll');
        openingScreen.classList.add('is-closing');
        mainContent.classList.add('is-visible');
        mainContent.removeAttribute('aria-hidden');
        playBackgroundMusicSafely();

        setTimeout(function () {
            openingScreen.classList.add('is-hidden');
        }, 950);
    });
}

function spawnFloatingDecor(container, count, types) {
    if (!container || prefersReducedMotion) return;
    for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = 'floating-decor-item';
        el.textContent = types[Math.floor(Math.random() * types.length)];
        el.style.left = (Math.random() * 96) + '%';
        el.style.setProperty('--delay', (Math.random() * 10) + 's');
        el.style.setProperty('--duration', (9 + Math.random() * 9) + 's');
        el.style.setProperty('--size', (14 + Math.random() * 18) + 'px');
        el.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
        container.appendChild(el);
    }
}

function playBackgroundMusicSafely() {
    const audio = $('#bgAudio');
    if (!audio || !birthdayConfig.music) return;
    if (!audio.src) audio.src = birthdayConfig.music;
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {
            showToast('Tap tombol musik 🎵 untuk memutar lagu');
        });
    }
}


/* ---------- BIRTHDAY CARD ---------- */
function initBirthdayCard() {
    const card = $('#birthdayCard');
    if (!card) return;
    let opened = false;
    makeClickable(card, function () {
        if (opened) return;
        opened = true;
        card.classList.add('is-open');
        showToast('Kartu dibuka 💌');
        setTimeout(function () {
            burstConfetti({ count: 70 });
        }, 420);
    });
}


/* ---------- GALLERY ---------- */
function initGallery() {
    const grid = $('#galleryGrid');
    if (!grid) return;
    const rotations = [-6, 4, -3, 5, -5, 3, -4, 6];

    birthdayConfig.photos.forEach(function (src, i) {
        const fig = document.createElement('figure');
        fig.className = 'gallery-item reveal-on-scroll';
        fig.style.setProperty('--rot', rotations[i % rotations.length] + 'deg');
        fig.tabIndex = 0;
        fig.setAttribute('role', 'button');
        fig.setAttribute('aria-label', 'Lihat kenangan ' + (i + 1) + ' lebih besar');

        const photoWrap = document.createElement('div');
        photoWrap.className = 'gallery-photo-wrap';
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.alt = 'Kenangan ' + (i + 1);
        setImageWithFallback(img, src, 'Foto ' + (i + 1));
        photoWrap.appendChild(img);

        const caption = document.createElement('figcaption');
        caption.textContent = 'Kenangan #' + (i + 1);

        fig.appendChild(photoWrap);
        fig.appendChild(caption);
        makeClickable(fig, function () { openLightbox(src, i); });
        grid.appendChild(fig);
    });

    initScrollRevealFor($all('.gallery-item', grid), 70, 350);
}

function openLightbox(src, index) {
    const lightbox = $('#lightbox');
    const img = $('#lightboxImg');
    if (!lightbox || !img) return;
    setImageWithFallback(img, src, 'Foto ' + (index + 1));
    img.alt = 'Kenangan ' + (index + 1) + ' — tampilan penuh';
    lightbox.classList.add('is-active');
    lightbox.removeAttribute('aria-hidden');
    document.body.classList.add('no-scroll');
    $('#lightboxClose').focus();
}

function closeLightbox() {
    const lightbox = $('#lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('is-active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}

function initLightbox() {
    const lightbox = $('#lightbox');
    if (!lightbox) return;
    $('#lightboxClose').addEventListener('click', closeLightbox);
    $('#lightboxBackdrop').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('is-active')) closeLightbox();
    });
}


/* ---------- MEMORY TIMELINE ---------- */
function initTimeline() {
    const list = $('#timelineList');
    if (!list) return;

    memories.forEach(function (memory) {
        const item = document.createElement('div');
        item.className = 'timeline-item reveal-on-scroll';

        const dot = document.createElement('div');
        dot.className = 'timeline-dot';

        const content = document.createElement('div');
        content.className = 'timeline-content';

        const date = document.createElement('span');
        date.className = 'timeline-date';
        date.textContent = memory.date || '';

        const title = document.createElement('h3');
        title.textContent = memory.title || '';

        const desc = document.createElement('p');
        desc.textContent = memory.description || '';

        content.appendChild(date);
        content.appendChild(title);
        content.appendChild(desc);

        if (memory.photo) {
            const photoWrap = document.createElement('div');
            photoWrap.className = 'timeline-photo';
            const img = document.createElement('img');
            img.loading = 'lazy';
            img.alt = memory.title || 'Momen';
            setImageWithFallback(img, memory.photo, 'Foto Momen');
            photoWrap.appendChild(img);
            content.appendChild(photoWrap);
        }

        item.appendChild(dot);
        item.appendChild(content);
        list.appendChild(item);
    });

    initScrollRevealFor($all('.timeline-item', list), 0, 0);
}


/* ---------- WHY YOU ARE SPECIAL ---------- */
function initSpecialCards() {
    const grid = $('#specialGrid');
    if (!grid) return;

    specialReasons.forEach(function (reason) {
        const card = document.createElement('div');
        card.className = 'special-card reveal-on-scroll';
        card.setAttribute('role', 'button');
        card.tabIndex = 0;
        card.setAttribute('aria-label', 'Balik kartu: ' + reason.title);

        card.innerHTML =
            '<div class="special-card-inner">' +
                '<div class="special-card-face special-card-front">' +
                    '<span class="special-emoji">' + reason.emoji + '</span>' +
                    '<h3></h3>' +
                '</div>' +
                '<div class="special-card-face special-card-back"><p></p></div>' +
            '</div>';
        card.querySelector('.special-card-front h3').textContent = reason.title;
        card.querySelector('.special-card-back p').textContent = reason.message;

        makeClickable(card, function () { card.classList.toggle('is-flipped'); });
        grid.appendChild(card);
    });

    initScrollRevealFor($all('.special-card', grid), 90, 400);
}


/* ---------- MINI GAME ---------- */
function initMiniGame() {
    const container = $('#gameBoxes');
    const feedback = $('#gameFeedback');
    const finalMessageEl = $('#gameFinalMessage');
    if (!container || !feedback) return;

    finalMessageEl.textContent = gameConfig.finalMessage;

    const boxCount = gameConfig.boxCount || 5;
    const correctIndex = Math.floor(Math.random() * boxCount);
    let solved = false;
    const boxes = [];

    for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('button');
        box.type = 'button';
        box.className = 'gift-box';
        box.setAttribute('aria-label', 'Kotak hadiah ' + (i + 1));
        box.textContent = '🎁';

        box.addEventListener('click', function () {
            if (solved) return;

            if (i === correctIndex) {
                solved = true;
                box.classList.add('is-correct');
                box.textContent = '🎉';
                feedback.textContent = gameConfig.correctMessage;
                feedback.classList.add('is-success');
                boxes.forEach(function (b) { b.disabled = true; });
                burstConfetti({ count: 110 });
                setTimeout(function () {
                    finalMessageEl.hidden = false;
                    requestAnimationFrame(function () { finalMessageEl.classList.add('is-visible'); });
                }, 500);
            } else {
                box.classList.remove('is-wrong');
                void box.offsetWidth;
                box.classList.add('is-wrong');
                feedback.textContent = gameConfig.wrongMessage;
                feedback.classList.remove('is-success');
            }
        });

        boxes.push(box);
        container.appendChild(box);
    }
}


/* ---------- BIRTHDAY LETTER (typing effect) ---------- */
function initTypingLetter() {
    const letterPaper = $('#letterPaper');
    const letterTextEl = $('#letterText');
    const skipBtn = $('#letterSkip');
    if (!letterPaper || !letterTextEl) return;

    let started = false;

    function finishInstantly() {
        letterTextEl.innerHTML = '';
        letterTextEl.textContent = birthdayMessage;
        if (skipBtn) skipBtn.style.display = 'none';
    }

    function typeText(text, speed) {
        letterTextEl.innerHTML = '';
        let i = 0;
        let cancelled = false;
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        letterTextEl.appendChild(cursor);

        letterTextEl._skip = function () {
            cancelled = true;
            finishInstantly();
        };

        function tick() {
            if (cancelled) return;
            if (i < text.length) {
                const ch = text[i];
                const node = ch === '\n' ? document.createElement('br') : document.createTextNode(ch);
                letterTextEl.insertBefore(node, cursor);
                i++;
                setTimeout(tick, speed);
            } else {
                cursor.remove();
                if (skipBtn) skipBtn.style.display = 'none';
            }
        }
        tick();
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', function () {
            if (letterTextEl._skip) letterTextEl._skip();
        });
    }

    if (prefersReducedMotion) {
        const observerRM = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !started) {
                    started = true;
                    finishInstantly();
                    observerRM.disconnect();
                }
            });
        }, { threshold: 0.2 });
        observerRM.observe(letterPaper);
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !started) {
                started = true;
                typeText(birthdayMessage, 26);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.35 });
    observer.observe(letterPaper);
}


/* ---------- COUNTDOWN ---------- */
function initCountdown() {
    const numbersWrap = $('#countdownNumbers');
    const label = $('#countdownLabel');
    const dEl = $('#cdDays'), hEl = $('#cdHours'), mEl = $('#cdMinutes'), sEl = $('#cdSeconds');
    if (!numbersWrap || !label) return;

    const target = new Date(birthdayConfig.birthdayDate).getTime();
    let announced = false;

    if (isNaN(target)) {
        numbersWrap.style.display = 'none';
        label.textContent = 'Tanggal ulang tahun belum diatur dengan benar.';
        return;
    }

    function pad(n) { return String(n).padStart(2, '0'); }

    function update() {
        const diff = target - Date.now();
        if (diff <= 0) {
            numbersWrap.style.display = 'none';
            label.textContent = "IT'S YOUR DAY! 🎂🎉";
            if (!announced) {
                announced = true;
                burstConfetti({ count: 90 });
            }
            clearInterval(timer);
            return;
        }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        if (dEl) dEl.textContent = pad(d);
        if (hEl) hEl.textContent = pad(h);
        if (mEl) mEl.textContent = pad(m);
        if (sEl) sEl.textContent = pad(s);
    }

    update();
    const timer = setInterval(update, 1000);
}


/* ---------- MUSIC PLAYER ---------- */
function initMusicPlayer() {
    const audio = $('#bgAudio');
    const toggle = $('#musicToggle');
    const disc = $('#musicDisc');
    const player = $('#musicPlayer');
    const titleEl = $('#musicTitleText');
    const progressBar = $('#musicProgressBar');
    const progressWrap = $('#musicProgress');
    if (!audio || !toggle) return;

    if (birthdayConfig.music) audio.src = birthdayConfig.music;

    audio.addEventListener('error', function () {
        player.classList.add('is-unavailable');
        titleEl.textContent = 'Musik belum ditambahkan';
        toggle.disabled = true;
    });

    toggle.addEventListener('click', function () {
        if (toggle.disabled) return;
        if (audio.paused) {
            const p = audio.play();
            if (p && p.catch) p.catch(function () { /* butuh interaksi lain */ });
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', function () {
        disc.classList.add('is-spinning');
        player.classList.add('is-playing');
    });
    audio.addEventListener('pause', function () {
        disc.classList.remove('is-spinning');
        player.classList.remove('is-playing');
    });
    audio.addEventListener('timeupdate', function () {
        if (audio.duration) progressBar.style.width = ((audio.currentTime / audio.duration) * 100) + '%';
    });

    progressWrap.addEventListener('click', function (e) {
        if (!audio.duration) return;
        const rect = progressWrap.getBoundingClientRect();
        const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
        audio.currentTime = ratio * audio.duration;
    });
}


/* ---------- FINAL SURPRISE ---------- */
function initFinalSurprise() {
    const section = $('#finalSurprise');
    const btn = $('#oneMoreSurpriseBtn');
    const before = $('#finalContentBefore');
    const after = $('#finalContentAfter');
    const floatingWrap = $('#floatingPhotos');
    const replayBtn = $('#replayBtn');
    if (!section || !btn) return;

    spawnFloatingDecor($('#finalDecor'), 10, ['💗', '✨', '⭐']);

    btn.addEventListener('click', function () {
        section.classList.add('is-dimmed');
        burstConfetti({ count: 130 });
        spawnHeartsBurst(section, 26);

        before.hidden = true;
        after.hidden = false;

        birthdayConfig.photos.forEach(function (src, i) {
            const img = document.createElement('img');
            img.className = 'floating-photo';
            const leftPercent = 6 + (i * (88 / Math.max(birthdayConfig.photos.length - 1, 1)));
            img.style.left = leftPercent + '%';
            img.style.animationDelay = (i * 0.28) + 's';
            img.style.setProperty('--end-rot', (Math.random() * 30 - 15) + 'deg');
            setImageWithFallback(img, src, '');
            floatingWrap.appendChild(img);
        });
    });

    if (replayBtn) {
        replayBtn.addEventListener('click', function () {
            location.reload();
        });
    }
}

function spawnHeartsBurst(container, count) {
    if (!container || prefersReducedMotion) return;
    const hearts = ['💗', '💖', '✨'];
    for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = 'heart-burst-item';
        el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 160;
        el.style.setProperty('--bx', (Math.cos(angle) * distance) + 'px');
        el.style.setProperty('--by', (Math.sin(angle) * distance - 60) + 'px');
        el.style.left = (40 + Math.random() * 20) + '%';
        el.style.top = (40 + Math.random() * 20) + '%';
        el.style.animationDelay = (Math.random() * 0.4) + 's';
        container.appendChild(el);
        el.addEventListener('animationend', function () { el.remove(); });
    }
}


/* ---------- GENERIC SCROLL REVEAL ---------- */
function initScrollRevealFor(elements, baseDelay, maxDelay) {
    if (!elements || !elements.length) return;
    if (prefersReducedMotion) {
        elements.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }
    if (baseDelay) staggerReveal(elements, baseDelay, maxDelay);
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    elements.forEach(function (el) { observer.observe(el); });
}

function initScrollReveal() {
    initScrollRevealFor($all('.reveal-on-scroll:not(.gallery-item):not(.timeline-item):not(.special-card)'), 0, 0);
}


/* ---------- CONFETTI (canvas) ---------- */
function drawHeartPath(ctx, size) {
    ctx.beginPath();
    ctx.moveTo(0, size / 4);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, size / 4);
    ctx.bezierCurveTo(-size / 2, size / 2, 0, size * 0.7, 0, size);
    ctx.bezierCurveTo(0, size * 0.7, size / 2, size / 2, size / 2, size / 4);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, size / 4);
    ctx.closePath();
}

function burstConfetti(options) {
    if (prefersReducedMotion) return;
    const opts = options || {};
    const count = opts.count || 80;
    const duration = opts.duration || 2600;
    const canvas = $('#confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const palette = ['#FFB6D9', '#A9D8FF', '#C8B6FF', '#FFE8B8', '#FFFFFF'];
    const pieces = [];
    for (let i = 0; i < count; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height * 0.4,
            size: 6 + Math.random() * 7,
            color: palette[Math.floor(Math.random() * palette.length)],
            speedY: 2 + Math.random() * 3,
            speedX: -1.6 + Math.random() * 3.2,
            rotation: Math.random() * 360,
            rotationSpeed: -8 + Math.random() * 16,
            shape: Math.random() > 0.5 ? 'rect' : 'heart'
        });
    }

    let start = null;
    function frame(ts) {
        if (!start) start = ts;
        const elapsed = ts - start;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(function (p) {
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            if (p.shape === 'rect') {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            } else {
                ctx.scale(0.5, 0.5);
                drawHeartPath(ctx, p.size);
                ctx.fill();
            }
            ctx.restore();
        });
        if (elapsed < duration) {
            requestAnimationFrame(frame);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    requestAnimationFrame(frame);
}


/* ---------- SUBTLE PARALLAX ON AMBIENT BLOBS ---------- */
function initParallax() {
    if (prefersReducedMotion) return;
    const bgDecor = $('#bgDecor');
    if (!bgDecor) return;
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            bgDecor.style.transform = 'translateY(' + (window.scrollY * 0.1) + 'px)';
            ticking = false;
        });
    }, { passive: true });
}


/* ---------- SUBTLE CURSOR EFFECT (desktop only) ---------- */
function initCursorEffect() {
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.textContent = '✨';
    document.body.appendChild(cursor);

    let shown = false;
    window.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        if (!shown) { shown = true; cursor.classList.add('is-active'); }
    });
    window.addEventListener('mouseout', function (e) {
        if (!e.relatedTarget) cursor.classList.remove('is-active');
    });
}


/* ---------- BUTTON RIPPLE EFFECT ---------- */
function initRippleButtons() {
    $all('.btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const rect = btn.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            const x = (e.clientX || rect.left + rect.width / 2) - rect.left - size / 2;
            const y = (e.clientY || rect.top + rect.height / 2) - rect.top - size / 2;
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            btn.appendChild(ripple);
            ripple.addEventListener('animationend', function () { ripple.remove(); });
        });
    });
}


/* ---------- PAGE LOADER ---------- */
function initPageLoader() {
    window.addEventListener('load', function () {
        setTimeout(function () {
            const loader = $('#pageLoader');
            if (loader) loader.classList.add('is-hidden');
        }, 350);
    });
}


/* ================================================================================
   INIT — jalan begitu HTML selesai dimuat
   ================================================================================ */
document.addEventListener('DOMContentLoaded', function () {
    populateContent();
    initPageLoader();
    initOpeningScreen();
    initBirthdayCard();
    initGallery();
    initLightbox();
    initTimeline();
    initSpecialCards();
    initMiniGame();
    initTypingLetter();
    initCountdown();
    initMusicPlayer();
    initFinalSurprise();
    initScrollReveal();
    initParallax();
    initCursorEffect();
    initRippleButtons();
});