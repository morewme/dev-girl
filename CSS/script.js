const container = document.querySelector(".container");

const selectDirection = document.getElementById("select-direction");
const selectJustify = document.getElementById("select-justify");
const selectAlign = document.getElementById("select-align");
const codePreview = document.getElementById("code-preview");

// Atualiza o container e o preview de código
function updateFlex() {
  const direction = selectDirection.value;
  const justify = selectJustify.value;
  const align = selectAlign.value;

  container.style.flexDirection = direction;
  container.style.justifyContent = justify;
  container.style.alignItems = align;

  codePreview.textContent = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
}`;
}

selectDirection.addEventListener("change", updateFlex);
selectJustify.addEventListener("change", updateFlex);
selectAlign.addEventListener("change", updateFlex);

// Roda uma vez ao carregar para sincronizar o preview com os valores iniciais
updateFlex();
