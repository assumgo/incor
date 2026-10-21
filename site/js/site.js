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
    if (status) {
      status.textContent = "O WhatsApp foi aberto com a sua mensagem.";
    }
    window.open(url, "_blank", "noopener");
  });
}
