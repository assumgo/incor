const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function bindFilter(input, items, empty) {
  if (!input) return;
  const apply = () => {
    const query = input.value.trim().toLocaleLowerCase("pt-BR");
    let shown = 0;
    items.forEach((item) => {
      const haystack = (item.dataset.search || item.textContent).toLocaleLowerCase("pt-BR");
      const match = query === "" || haystack.includes(query);
      item.hidden = !match;
      if (match) shown += 1;
    });
    if (empty) empty.hidden = shown !== 0;
  };
  input.addEventListener("input", apply);
}

bindFilter(
  document.querySelector("#filtro-equipe"),
  document.querySelectorAll(".person"),
  document.querySelector("#equipe-vazio")
);

bindFilter(
  document.querySelector("#filtro-convenio"),
  document.querySelectorAll(".plan"),
  document.querySelector("#convenio-vazio")
);

const form = document.querySelector("#contato-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const text = [
      "Olá, gostaria de falar com o Incor São Lucas.",
      `Nome: ${form.nome.value.trim()} ${form.sobrenome.value.trim()}`,
      `E-mail: ${form.email.value.trim()}`,
      `Telefone: ${form.telefone.value.trim()}`,
      "",
      form.mensagem.value.trim()
    ].join("\n");
    const url = `https://wa.me/556239225777?text=${encodeURIComponent(text)}`;
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "O WhatsApp foi aberto com a sua mensagem.";
    window.open(url, "_blank", "noopener");
  });
}

const carousel = document.querySelector("[data-carousel]");
if (carousel) {
  const slides = [...carousel.querySelectorAll("[data-slide]")];
  const title = document.querySelector("[data-title]");
  const lede = document.querySelector("[data-lede]");
  const kicker = document.querySelector("[data-kicker]");
  const cta = document.querySelector("[data-cta]");
  const prev = carousel.querySelector("[data-prev]");
  const next = carousel.querySelector("[data-next]");
  const pauseBtn = carousel.querySelector("[data-pause]");
  const dots = [...carousel.querySelectorAll("[data-dot]")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let timer = 0;
  let paused = reduce;

  const paintCopy = (slide) => {
    if (kicker) kicker.textContent = slide.dataset.kicker || "";
    if (title) title.textContent = slide.dataset.title || "";
    if (lede) lede.textContent = slide.dataset.text || "";
    if (cta) {
      cta.href = slide.dataset.href || "#";
      cta.textContent = slide.dataset.label || "Saiba mais";
    }
  };

  const show = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const on = i === index;
      slide.classList.toggle("is-active", on);
      slide.setAttribute("aria-hidden", String(!on));
      if (on) slide.removeAttribute("inert");
      else slide.setAttribute("inert", "");
    });
    dots.forEach((dot, i) => {
      dot.setAttribute("aria-current", String(i === index));
    });
    paintCopy(slides[index]);
  };

  const stop = () => {
    window.clearInterval(timer);
    timer = 0;
  };

  const start = () => {
    stop();
    if (paused || slides.length < 2) return;
    timer = window.setInterval(() => show(index + 1), 6500);
  };

  const go = (nextIndex) => {
    show(nextIndex);
    start();
  };

  prev?.addEventListener("click", () => go(index - 1));
  next?.addEventListener("click", () => go(index + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => go(Number(dot.dataset.dot)));
  });
  pauseBtn?.addEventListener("click", () => {
    paused = !paused;
    pauseBtn.setAttribute("aria-pressed", String(paused));
    pauseBtn.textContent = paused ? "Retomar" : "Pausar";
    if (paused) stop();
    else start();
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  let startX = 0;
  carousel.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    startX = event.clientX;
  });
  carousel.addEventListener("pointerup", (event) => {
    if (!startX || event.target.closest("button")) return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
    startX = 0;
  });

  show(0);
  if (pauseBtn && paused) {
    pauseBtn.setAttribute("aria-pressed", "true");
    pauseBtn.textContent = "Retomar";
  }
  start();
}
