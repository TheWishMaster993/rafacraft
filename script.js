function conectar() {
  window.location.href = "minecraft://AmongUsCraftOk.aternos.me:44763";
}

function copiarIP() {
  const ip = document.getElementById("ipText").textContent;
  navigator.clipboard.writeText(ip).then(() => {
    alert("IP copiada: " + ip);
  });
}

// Partículas estilo Nether
const canvas = document.getElementById("netherParticles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ["#ff4400", "#ff7700", "#ffaa00"];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.radius = Math.random() * 3 + 2;
    this.speed = Math.random() * 1.5 + 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
window.addEventListener("load", () => {
  const loader = document.getElementById("minecraftLoader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2000); // Espera para que se vea bonito
});
const music = document.getElementById("bgMusic");

function iniciarMusica() {
  if (music.paused) {
    music.play().catch(() => {});
  }
  window.removeEventListener("click", iniciarMusica);
  window.removeEventListener("scroll", iniciarMusica);
}

window.addEventListener("click", iniciarMusica);
window.addEventListener("scroll", iniciarMusica);
function mostrarSkin(nick) {
  const img = document.getElementById("playerSkin");
  if (nick.length >= 3) {
    img.src = `https://minotar.net/armor/body/${nick}/100.png`;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}
