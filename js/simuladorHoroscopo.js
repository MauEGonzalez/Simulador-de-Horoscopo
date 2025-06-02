// Array de signos zodiacales
const signos = [
  "aries", "tauro", "geminis", "cancer", "leo", "virgo",
  "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis"
];

// Mensajes de horóscopo para cada área
const horoscopo = {
  aries: {
    amor: ["Hoy es un buen día para expresar sentimientos.", "Alguien especial podría sorprenderte.", "Evita discusiones innecesarias."],
    salud: ["Cuida tu descanso, evita trasnochar.", "Dedica tiempo a la actividad física.", "Atiende cualquier dolencia leve antes de que avance."],
    dinero: ["Momento ideal para ahorrar.", "Evita gastos impulsivos.", "Podrías recibir una oportunidad financiera inesperada."]
  },
  tauro: {
    amor: ["Podrías conocer a alguien especial inesperadamente.", "Momento de fortalecer vínculos.", "Cuida los detalles en tu relación."],
    salud: ["Aprovecha para retomar una rutina saludable.", "Descansar bien mejorará tu productividad.", "Evita el estrés innecesario."],
    dinero: ["Tus esfuerzos recientes comienzan a dar frutos.", "Analiza bien cualquier inversión antes de decidir.", "Puede surgir un gasto imprevisto."]
  },
  geminis: {
    amor: ["Un encuentro inesperado te hará replantear algunas cosas.", "Evita malentendidos en tu comunicación.", "Tu carisma te abrirá nuevas oportunidades sentimentales."],
    salud: ["Energía en aumento, aprovecha para moverte más.", "Modera el consumo de azúcar.", "Escucha las señales de tu cuerpo y descansa si es necesario."],
    dinero: ["Tu creatividad traerá buenas oportunidades.", "No tomes decisiones apresuradas en negocios.", "Un gasto imprevisto podría afectar tu presupuesto."]
  },
  cancer: {
    amor: ["Hoy sentirás mucha conexión con alguien especial.", "Es buen momento para expresar tus emociones.", "Evita recordar viejas heridas, mira hacia adelante."],
    salud: ["Cuida tu alimentación, especialmente por la noche.", "Haz pausas en tu trabajo para reducir el estrés.", "Dedica tiempo a cuidar tu bienestar mental."],
    dinero: ["Buena etapa para planificar nuevos proyectos.", "No dejes que las preocupaciones económicas afecten tu humor.", "Pequeñas mejoras financieras te alegrarán el día."]
  },
  leo: {
    amor: ["Tu magnetismo atraerá nuevas personas.", "Sé generoso con quienes te rodean.", "Evita discusiones innecesarias con tu pareja."],
    salud: ["Energía alta, ideal para hacer ejercicio.", "Cuida tu piel con hidratación adecuada.", "No descuides el descanso nocturno."],
    dinero: ["Buen momento para asumir nuevos desafíos laborales.", "Evita gastos innecesarios.", "Tu esfuerzo será reconocido pronto."]
  },
  virgo: {
    amor: ["La sinceridad será clave en tus relaciones.", "Un reencuentro te hará recordar viejas emociones.", "Evita caer en la autocrítica excesiva."],
    salud: ["Día ideal para empezar hábitos saludables.", "Cuida tu postura si pasas muchas horas sentado.", "Evita el estrés acumulado, date un respiro."],
    dinero: ["Momento ideal para reorganizar tus finanzas.", "Analiza bien cualquier contrato antes de firmar.", "Una oportunidad laboral interesante podría aparecer."]
  },
  libra: {
    amor: ["Día perfecto para conectar con alguien especial.", "Tus palabras tendrán un impacto positivo hoy.", "No dudes en expresar lo que sientes."],
    salud: ["Relájate y deja atrás tensiones innecesarias.", "Dedica tiempo a tu bienestar mental.", "Pequeñas modificaciones en tu dieta pueden ayudar."],
    dinero: ["Tu creatividad te abrirá nuevas oportunidades.", "Evita decisiones financieras apresuradas.", "Un nuevo proyecto puede ser más rentable de lo que parece."]
  },
  escorpio: {
    amor: ["Un cambio inesperado mejorará tu vida amorosa.", "Confía en tu intuición respecto a relaciones.", "Evita los celos innecesarios."],
    salud: ["Escucha lo que tu cuerpo necesita.", "Un chequeo de rutina te dará tranquilidad.", "Evita excesos alimenticios, cuida tu salud."],
    dinero: ["Buena etapa para reorganizar tus finanzas.", "No dudes en invertir en aprendizaje.", "Un desafío profesional te traerá nuevos ingresos."]
  },
  sagitario: {
    amor: ["Tu entusiasmo atraerá a personas interesantes.", "Explora nuevas formas de expresar tus sentimientos.", "Evita dar por sentado ciertos vínculos importantes."],
    salud: ["Momento ideal para hacer ejercicio al aire libre.", "Cuida tu postura si trabajas muchas horas.", "Evita preocupaciones innecesarias, todo fluye."],
    dinero: ["Día ideal para encontrar oportunidades de inversión.", "Evita gastos impulsivos.", "Buena etapa para organizar tus metas financieras."]
  },
  capricornio: {
    amor: ["La paciencia será clave en tus relaciones.", "Un mensaje inesperado te traerá alegrías.", "Evita conflictos innecesarios en pareja."],
    salud: ["Dedica más tiempo a tu bienestar físico.", "Haz una pausa y descansa si lo necesitas.", "Evita sobrecargar tu agenda con tareas."],
    dinero: ["Momento ideal para ahorrar con estrategia.", "Analiza bien cualquier contrato antes de firmar.", "Tu esfuerzo será recompensado pronto."]
  },
  acuario: {
    amor: ["Tu espontaneidad hará que vivas algo nuevo.", "Evita cerrarte a experiencias románticas.", "Expresa lo que sientes sin miedo."],
    salud: ["Momento ideal para renovar energías.", "Cuida tu alimentación, evita excesos.", "El descanso será clave para recuperar fuerzas."],
    dinero: ["Buena etapa para buscar nuevas oportunidades laborales.", "Evita decisiones impulsivas en negocios.", "El esfuerzo constante dará frutos pronto."]
  },
  piscis: {
    amor: ["La sensibilidad te acercará a alguien especial.", "Día ideal para reflexionar sobre tus emociones.", "Evita idealizar demasiado a las personas."],
    salud: ["Dedica tiempo a tu bienestar mental.", "Tu energía será más estable si te organizas mejor.", "Evita preocupaciones innecesarias, todo mejora."],
    dinero: ["Buena etapa para reorganizar tus finanzas.", "Analiza bien cualquier oportunidad antes de decidir.", "Un ingreso inesperado te ayudará a cumplir una meta."]
  }
};

// Tabla de compatibilidad entre signos
const compatibilidad = {
  aries: ["leo", "sagitario", "geminis"],
  tauro: ["virgo", "capricornio", "cancer"],
  geminis: ["libra", "acuario", "aries"],
  cancer: ["escorpio", "piscis", "tauro"],
  leo: ["aries", "sagitario", "libra"],
  virgo: ["tauro", "capricornio", "escorpio"],
  libra: ["geminis", "acuario", "leo"],
  escorpio: ["cancer", "piscis", "virgo"],
  sagitario: ["aries", "leo", "acuario"],
  capricornio: ["tauro", "virgo", "piscis"],
  acuario: ["geminis", "libra", "sagitario"],
  piscis: ["cancer", "escorpio", "capricornio"]
};

// Historial de consultas (se carga desde localStorage si existe)
let historialConsultas = JSON.parse(localStorage.getItem("historialConsultas")) || [];

// Función para detectar el signo por fecha de nacimiento
function obtenerSignoPorFecha(fecha) {
  const partes = fecha.split("-");
  const mes = parseInt(partes[1]);
  const dia = parseInt(partes[2]);

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "aries";
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "tauro";
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "geminis";
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "cancer";
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "leo";
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "virgo";
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "libra";
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "escorpio";
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "sagitario";
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "capricornio";
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "acuario";
  if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "piscis";

  return null;
}

// Función para generar el mensaje aleatorio de horóscopo para el signo y área especificados
function generateHoroscopeMessage(signo, area) {
  const mensajes = horoscopo[signo][area];
  const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
  return mensajes[indiceAleatorio];
}

// Función para actualizar la visualización del historial en el DOM
function updateHistoryDisplay() {
  const historialList = document.getElementById("historial-list");
  historialList.innerHTML = "";

  if (historialConsultas.length === 0) {
    historialList.innerHTML = "<p>Historial vacío.</p>";
    return;
  }

  historialConsultas.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${new Date(item.fechaConsulta).toLocaleDateString()} - ${item.signo.toUpperCase()} (${item.area.toUpperCase()}): ${item.mensaje}`;
    historialList.appendChild(li);
  });
}

// Evento para alternar entre modo fecha y modo selección directa de signo
function toggleModo() {
  const modoRadios = document.querySelectorAll('input[name="modo"]');
  modoRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      if (e.target.value === "fecha") {
        document.getElementById("fecha-input").style.display = "block";
        document.getElementById("signo-input").style.display = "none";
      } else {
        document.getElementById("fecha-input").style.display = "none";
        document.getElementById("signo-input").style.display = "block";
      }
    });
  });
}

// Evento para el submit del formulario
document.getElementById("horoscopo-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Determinar el modo de entrada
  const modo = document.querySelector('input[name="modo"]:checked').value;
  let signo = "";

  if (modo === "fecha") {
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    if (!fechaNacimiento) {
      document.getElementById("resultado").innerHTML = "<p>Por favor ingresa tu fecha de nacimiento.</p>";
      return;
    }
    signo = obtenerSignoPorFecha(fechaNacimiento);
    if (!signo) {
      document.getElementById("resultado").innerHTML = "<p>La fecha ingresada no corresponde a ningún signo, intenta de nuevo.</p>";
      return;
    }
  } else {
    const signoSelect = document.getElementById("signoManual");
    signo = signoSelect.options[signoSelect.selectedIndex].value;
;

    if (!signo || signo === "") {
      document.getElementById("resultado").innerHTML = "<p>Por favor selecciona un signo zodiacal.</p>";
      return;
    }
  }

  // Validación adicional
  if (!signos.includes(signo)) {
    document.getElementById("resultado").innerHTML = "<p>El signo ingresado no es válido. Intenta de nuevo.</p>";
    return;
  }

  // Determinar el área a consultar
  const area = document.getElementById("area").value;
  if (!["amor", "salud", "dinero"].includes(area)) {
    document.getElementById("resultado").innerHTML = "<p>Área inválida. Selecciona amor, salud o dinero.</p>";
    return;
  }

  // Generar y mostrar el mensaje de horóscopo
  const mensaje = generateHoroscopeMessage(signo, area);
  const compatibles = compatibilidad[signo];

  document.getElementById("resultado").innerHTML = `
    <h2>Horóscopo para ${signo.toUpperCase()} - ${area.toUpperCase()}</h2>
    <p>${mensaje}</p>
    <p><strong>Compatibilidad:</strong> ${compatibles.join(", ").toUpperCase()}</p>
  `;

  // Guardar en historial
  const consulta = { signo, area, mensaje, fechaConsulta: new Date() };
  historialConsultas.push(consulta);
  localStorage.setItem("historialConsultas", JSON.stringify(historialConsultas));
  updateHistoryDisplay();
});

// Al cargar la página
window.addEventListener("load", function() {
  toggleModo(); // Inicializa el modo fecha o selección directa
  document.getElementById("historial").style.display = "none"; // Ocultar historial al iniciar

  const storedHistory = localStorage.getItem("historialConsultas");
  if (storedHistory) {
    historialConsultas = JSON.parse(storedHistory);
    updateHistoryDisplay();
  }
});

// Evento para mostrar/ocultar historial
document.getElementById("toggleHistorial").addEventListener("click", function () {
  const historialDiv = document.getElementById("historial");
  historialDiv.style.display = historialDiv.style.display === "none" ? "block" : "none";
});

// Evento para borrar historial
document.getElementById("borrarHistorial").addEventListener("click", function () {
  localStorage.removeItem("historialConsultas");
  historialConsultas = [];
  updateHistoryDisplay();
  document.getElementById("historial-list").innerHTML = "<p>Historial vacío.</p>";
});