const materias = {
  mat1: "Matemática I: Fundamentos de álgebra y cálculo.",
  mat2: "Química General: Principios básicos de química inorgánica.",
  mat3: "Biología Celular: Estructura y función celular.",
  mat4: "Física I: Mecánica, dinámica y leyes del movimiento.",
  mat5: "Química Orgánica: Compuestos del carbono.",
  mat6: "Microbiología: Estudio de microorganismos y técnicas de laboratorio."
};

function mostrarInfo(id) {
  const infoDiv = document.getElementById("infoMateria");
  infoDiv.innerText = materias[id];
}
