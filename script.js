const materias = {
  mat1: "Matemática 1", mat2: "Química general", mat3: "Biología",
  mat4: "Introducción a la biotecnología", mat5: "Introducción al laboratorio",
  mat6: "Matemática 2", mat7: "Química orgánica", mat8: "Química biológica",
  mat9: "Física 1", mat10: "Aspectos éticos y sociales de la biotecnología",
  mat11: "Laboratorio de macromoléculas", mat12: "Taller de física",
  mat13: "Probabilidad y estadística", mat14: "Bioquímica", mat15: "Biología celular",
  mat16: "Fisicoquímica 1", mat17: "Física 2", mat18: "Laboratorio de biología celular",
  mat19: "Matemática 3", mat20: "Genética y evolución", mat21: "Economía",
  mat22: "Biología molecular", mat23: "Fisicoquímica 2", mat24: "Laboratorio de enzimología",
  mat25: "Taller de cultivos de células y tejidos", mat26: "Programación", mat27: "Microbiología",
  mat28: "Laboratorio de biología molecular", mat29: "Fenómenos de transporte",
  mat30: "Gestión de empresas", mat31: "Bioinformática 1", mat32: "Electiva",
  mat33: "Inmunotecnologías", mat34: "Bioprocesos", mat35: "Laboratorio de microbiología",
  mat36: "Métodos y equipos analíticos", mat37: "Taller de métodos moleculares de diagnóstico",
  mat38: "Bioinformática 2", mat39: "Bionegocios", mat40: "Ingeniería genética",
  mat41: "Propiedad intelectual e industrial", mat42: "Bioseparaciones",
  mat43: "Laboratorio de control de calidad", mat44: "Agrobiotecnologías",
  mat45: "Inmunotecnologías 2", mat46: "Análisis y diseño de bioprocesos",
  mat47: "Temas avanzados en biotecnología", mat48: "Laboratorio de biotecnología vegetal",
  mat49: "Pasantía o Electiva", mat50: "Tecnología de los alimentos", mat51: "Virología",
  mat52: "Taller de ingeniería genética", mat53: "Vacunas", mat54: "Nanobiotecnología",
  mat55: "Biorremediación", mat56: "Trabajo final de carrera"
};

let estados = JSON.parse(localStorage.getItem("estadosMaterias")) || {};

function mostrarInfo(id) {
  const infoDiv = document.getElementById("infoMateria");
  infoDiv.innerText = materias[id];
}

function actualizarColores() {
  document.querySelectorAll("li[data-id]").forEach(li => {
    const id = li.dataset.id;
    li.classList.remove("aprobada", "cursando", "pendiente");
    if (estados[id]) li.classList.add(estados[id]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("li[data-id]").forEach(li => {
    const id = li.dataset.id;

    li.addEventListener("click", () => mostrarInfo(id));

    li.addEventListener("dblclick", () => {
      const nuevoEstado = prompt("Escribí: A (Aprobada), C (Cursando) o P (Pendiente)").toUpperCase();
      if (nuevoEstado === "A") {
        estados[id] = "aprobada";
      } else if (nuevoEstado === "C") {
        estados[id] = "cursando";
      } else {
        estados[id] = "pendiente";
      }
      localStorage.setItem("estadosMaterias", JSON.stringify(estados));
      actualizarColores();
    });
  });

  actualizarColores();
});
