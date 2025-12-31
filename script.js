function go(page) {
  window.location.href = page;
}

function go(page) {
  window.location.href = page;
}

const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

if (imageInput) {
  imageInput.addEventListener("change", () => {
    gallery.innerHTML = "";
    for (let file of imageInput.files) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      gallery.appendChild(img);
    }
  });
}
// Floating hearts
const heartsContainer = document.getElementById("hearts");

if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 10 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 4 + 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 300);
}


const canvas = document.getElementById("canvas");

document.addEventListener("DOMContentLoaded", () => {
    // Persistent music: play only once per page
let musicStarted = false;
const bgm = document.getElementById("bgm");

document.addEventListener("click", () => {
  if (!musicStarted && bgm) {
    bgm.play().catch(() => {}); // play music on first click
    musicStarted = true;
  }
}, { once: true });




  // Navigation button
  const homeBtn = document.getElementById("homeBtn");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
// New Year Countdown
const countdownEl = document.getElementById("countdown");
const newYear = new Date("January 1, 2026 00:00:00").getTime(); // change year

function updateCountdown() {
  const now = new Date().getTime();
  const diff = newYear - now;

  if (diff <= 0) {
    countdownEl.innerText = "🎉 Happy New Year! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s until New Year`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

  // Canvas fireworks
  const canvas = document.getElementById("canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createFirework(x, y) {
      for (let i = 0; i < 30; i++) {
        particles.push({
          x,
          y,
          radius: 2,
          color: `hsl(${Math.random() * 360}, 100%, 70%)`,
          angle: Math.random() * 2 * Math.PI,
          speed: Math.random() * 5 + 2,
          life: 60
        });
      }
    }

    // Automatic fireworks
    setInterval(() => {
      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height / 2
      );
    }, 800);

    // Click-to-launch fireworks
    canvas.addEventListener("click", (e) => {
      createFirework(e.clientX, e.clientY);
    });

    // Animation loop
    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // Floating hearts
  const heartsContainer = document.getElementById("hearts");
  if (heartsContainer) {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (Math.random() * 10 + 15) + "px";
      heart.style.animationDuration = (Math.random() * 4 + 6) + "s";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 8000);
    }, 300);
  }
});

window.addEventListener("resize", () => {
  const canvas = document.getElementById("canvas");
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

