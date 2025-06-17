// Nuevo array de objetos
const signosZodiacales = [
  {
    id: 'aries',
    nombre: 'Aries',
    fechaInicio: { mes: 3, dia: 21 },
    fechaFin: { mes: 4, dia: 19 },
    horoscopo: {
      amor: ["Hoy es un buen día para expresar sentimientos.", "Alguien especial podría sorprenderte.", "Evita discusiones innecesarias."],
      salud: ["Cuida tu descanso, evita trasnochar.", "Dedica tiempo a la actividad física.", "Atiende cualquier dolencia leve antes de que avance."],
      dinero: ["Momento ideal para ahorrar.", "Evita gastos impulsivos.", "Podrías recibir una oportunidad financiera inesperada."]
    },
    compatibilidad: ['leo', 'sagitario', 'geminis']
  },
  {
    id: 'tauro',
    nombre: 'Tauro',
    fechaInicio: { mes: 4, dia: 20 },
    fechaFin: { mes: 5, dia: 20 },
    horoscopo: {
      amor: ["Podrías conocer a alguien especial inesperadamente.", "Momento de fortalecer vínculos.", "Cuida los detalles en tu relación."],
      salud: ["Aprovecha para retomar una rutina saludable.", "Descansar bien mejorará tu productividad.", "Evita el estrés innecesario."],
      dinero: ["Tus esfuerzos recientes comienzan a dar frutos.", "Analiza bien cualquier inversión antes de decidir.", "Puede surgir un gasto imprevisto."]
    },
    compatibilidad: ['virgo', 'capricornio', 'cancer']
  },
  {
    id: 'geminis',
    nombre: 'Géminis',
    fechaInicio: { mes: 5, dia: 21 },
    fechaFin: { mes: 6, dia: 20 },
    horoscopo: {
      amor: ["Un encuentro inesperado te hará replantear algunas cosas.", "Evita malentendidos en tu comunicación.", "Tu carisma te abrirá nuevas oportunidades sentimentales."],
      salud: ["Energía en aumento, aprovecha para moverte más.", "Modera el consumo de azúcar.", "Escucha las señales de tu cuerpo y descansa si es necesario."],
      dinero: ["Tu creatividad traerá buenas oportunidades.", "No tomes decisiones apresuradas en negocios.", "Un gasto imprevisto podría afectar tu presupuesto."]
    },
    compatibilidad: ['libra', 'acuario', 'aries']
  },
  {
    id: 'cancer',
    nombre: 'Cáncer',
    fechaInicio: { mes: 6, dia: 21 },
    fechaFin: { mes: 7, dia: 22 },
    horoscopo: {
      amor: ["Hoy sentirás mucha conexión con alguien especial.", "Es buen momento para expresar tus emociones.", "Evita recordar viejas heridas, mira hacia adelante."],
      salud: ["Cuida tu alimentación, especialmente por la noche.", "Haz pausas en tu trabajo para reducir el estrés.", "Dedica tiempo a cuidar tu bienestar mental."],
      dinero: ["Buena etapa para planificar nuevos proyectos.", "No dejes que las preocupaciones económicas afecten tu humor.", "Pequeñas mejoras financieras te alegrarán el día."]
    },
    compatibilidad: ['escorpio', 'piscis', 'tauro']
  },
  {
    id: 'leo',
    nombre: 'Leo',
    fechaInicio: { mes: 7, dia: 23 },
    fechaFin: { mes: 8, dia: 22 },
    horoscopo: {
      amor: ["Tu magnetismo atraerá nuevas personas.", "Sé generoso con quienes te rodean.", "Evita discusiones innecesarias con tu pareja."],
      salud: ["Energía alta, ideal para hacer ejercicio.", "Cuida tu piel con hidratación adecuada.", "No descuides el descanso nocturno."],
      dinero: ["Buen momento para asumir nuevos desafíos laborales.", "Evita gastos innecesarios.", "Tu esfuerzo será reconocido pronto."]
    },
    compatibilidad: ['aries', 'sagitario', 'libra']
  },
  {
    id: 'virgo',
    nombre: 'Virgo',
    fechaInicio: { mes: 8, dia: 23 },
    fechaFin: { mes: 9, dia: 22 },
    horoscopo: {
      amor: ["La sinceridad será clave en tus relaciones.", "Un reencuentro te hará recordar viejas emociones.", "Evita caer en la autocrítica excesiva."],
      salud: ["Día ideal para empezar hábitos saludables.", "Cuida tu postura si pasas muchas horas sentado.", "Evita el estrés acumulado, date un respiro."],
      dinero: ["Momento ideal para reorganizar tus finanzas.", "Analiza bien cualquier contrato antes de firmar.", "Una oportunidad laboral interesante podría aparecer."]
    },
    compatibilidad: ['tauro', 'capricornio', 'escorpio']
  },
  {
    id: 'libra',
    nombre: 'Libra',
    fechaInicio: { mes: 9, dia: 23 },
    fechaFin: { mes: 10, dia: 22 },
    horoscopo: {
      amor: ["Día perfecto para conectar con alguien especial.", "Tus palabras tendrán un impacto positivo hoy.", "No dudes en expresar lo que sientes."],
      salud: ["Relájate y deja atrás tensiones innecesarias.", "Dedica tiempo a tu bienestar mental.", "Pequeñas modificaciones en tu dieta pueden ayudar."],
      dinero: ["Tu creatividad te abrirá nuevas oportunidades.", "Evita decisiones financieras apresuradas.", "Un nuevo proyecto puede ser más rentable de lo que parece."]
    },
    compatibilidad: ['geminis', 'acuario', 'leo']
  },
  {
    id: 'escorpio',
    nombre: 'Escorpio',
    fechaInicio: { mes: 10, dia: 23 },
    fechaFin: { mes: 11, dia: 21 },
    horoscopo: {
      amor: ["Un cambio inesperado mejorará tu vida amorosa.", "Confía en tu intuición respecto a relaciones.", "Evita los celos innecesarios."],
      salud: ["Escucha lo que tu cuerpo necesita.", "Un chequeo de rutina te dará tranquilidad.", "Evita excesos alimenticios, cuida tu salud."],
      dinero: ["Buena etapa para reorganizar tus finanzas.", "No dudes en invertir en aprendizaje.", "Un desafío profesional te traerá nuevos ingresos."]
    },
    compatibilidad: ['cancer', 'piscis', 'virgo']
  },
  {
    id: 'sagitario',
    nombre: 'Sagitario',
    fechaInicio: { mes: 11, dia: 22 },
    fechaFin: { mes: 12, dia: 21 },
    horoscopo: {
      amor: ["Tu entusiasmo atraerá a personas interesantes.", "Explora nuevas formas de expresar tus sentimientos.", "Evita dar por sentado ciertos vínculos importantes."],
      salud: ["Momento ideal para hacer ejercicio al aire libre.", "Cuida tu postura si trabajas muchas horas.", "Evita preocupaciones innecesarias, todo fluye."],
      dinero: ["Día ideal para encontrar oportunidades de inversión.", "Evita gastos impulsivos.", "Buena etapa para organizar tus metas financieras."]
    },
    compatibilidad: ['aries', 'leo', 'acuario']
  },
  {
    id: 'capricornio',
    nombre: 'Capricornio',
    fechaInicio: { mes: 12, dia: 22 },
    fechaFin: { mes: 1, dia: 19 },
    horoscopo: {
      amor: ["La paciencia será clave en tus relaciones.", "Un mensaje inesperado te traerá alegrías.", "Evita conflictos innecesarios en pareja."],
      salud: ["Dedica más tiempo a tu bienestar físico.", "Haz una pausa y descansa si lo necesitas.", "Evita sobrecargar tu agenda con tareas."],
      dinero: ["Momento ideal para ahorrar con estrategia.", "Analiza bien cualquier contrato antes de firmar.", "Tu esfuerzo será recompensado pronto."]
    },
    compatibilidad: ['tauro', 'virgo', 'piscis']
  },
  {
    id: 'acuario',
    nombre: 'Acuario',
    fechaInicio: { mes: 1, dia: 20 },
    fechaFin: { mes: 2, dia: 18 },
    horoscopo: {
      amor: ["Tu espontaneidad hará que vivas algo nuevo.", "Evita cerrarte a experiencias románticas.", "Expresa lo que sientes sin miedo."],
      salud: ["Momento ideal para renovar energías.", "Cuida tu alimentación, evita excesos.", "El descanso será clave para recuperar fuerzas."],
      dinero: ["Buena etapa para buscar nuevas oportunidades laborales.", "Evita decisiones impulsivas en negocios.", "El esfuerzo constante dará frutos pronto."]
    },
    compatibilidad: ['geminis', 'libra', 'sagitario']
  },
  {
    id: 'piscis',
    nombre: 'Piscis',
    fechaInicio: { mes: 2, dia: 19 },
    fechaFin: { mes: 3, dia: 20 },
    horoscopo: {
      amor: ["La sensibilidad te acercará a alguien especial.", "Día ideal para reflexionar sobre tus emociones.", "Evita idealizar demasiado a las personas."],
      salud: ["Dedica tiempo a tu bienestar mental.", "Tu energía será más estable si te organizas mejor.", "Evita preocupaciones innecesarias, todo mejora."],
      dinero: ["Buena etapa para reorganizar tus finanzas.", "Analiza bien cualquier oportunidad antes de decidir.", "Un ingreso inesperado te ayudará a cumplir una meta."]
    },
    compatibilidad: ['cancer', 'escorpio', 'capricornio']
  }
];

// Historial de consultas
let historialConsultas = JSON.parse(localStorage.getItem("historialConsultas")) || [];

// Función para detectar el signo por fecha de nacimiento
function obtenerSignoPorFecha(fecha) {
  const partes = fecha.split("-");
  const mes = parseInt(partes[1]);
  const dia = parseInt(partes[2]);

  for (const signo of signosZodiacales) {
    const { fechaInicio, fechaFin } = signo;
    if (fechaInicio.mes === fechaFin.mes) {
      if (mes === fechaInicio.mes && dia >= fechaInicio.dia && dia <= fechaFin.dia) {
        return signo.id;
      }
    } 
    else {
      if ((mes === fechaInicio.mes && dia >= fechaInicio.dia) || (mes === fechaFin.mes && dia <= fechaFin.dia)) {
        return signo.id;
      }
    }
  }
  return null;
}

// Función para generar el mensaje aleatorio de horóscopo para el signo y área especificados
function generarMensajeHoroscopo(signo, area) {
  const mensajes = horoscopo[signo][area];
  const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
  return mensajes[indiceAleatorio];
}

// Función para actualizar la visualización del historial en el DOM
function actualizarHistorial() {
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
  const fechaInput = document.getElementById("fechaNacimiento");
  const signoInput = document.getElementById("signoManual");

  modoRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      if (e.target.value === "fecha") {
        document.getElementById("fecha-input").style.display = "block";
        fechaInput.disabled = false; // Habilitar input de fecha
        document.getElementById("signo-input").style.display = "none";
        signoInput.disabled = true; // Deshabilitar input de signo
      } else {
        document.getElementById("fecha-input").style.display = "none";
        fechaInput.disabled = true; // Deshabilitar input de fecha
        document.getElementById("signo-input").style.display = "block";
        signoInput.disabled = false; // Habilitar input de signo
      }
    });
  });
  
  fechaInput.disabled = false;
  signoInput.disabled = true;
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
  signo = signoSelect.value.trim();

  if (!signo) {
    document.getElementById("resultado").innerHTML = "<p>Por favor selecciona un signo zodiacal antes de consultar.</p>";
    return;
  }
}

 // Determinar el área a consultar
  const area = document.getElementById("area").value;
  if (!area) {
      document.getElementById("resultado").innerHTML = "<p>Por favor selecciona el área a consultar.</p>";
      return;
  }

  const signoSeleccionado = signosZodiacales.find(s => s.id === signo);

  if (!signoSeleccionado) {
    document.getElementById("resultado").innerHTML = "<p>El signo ingresado no es válido. Intenta de nuevo.</p>";
    return;
  }
  
  const mensajesDisponibles = signoSeleccionado.horoscopo[area];
  const mensaje = mensajesDisponibles[Math.floor(Math.random() * mensajesDisponibles.length)];
  const compatibles = signoSeleccionado.compatibilidad;

  document.getElementById("resultado").innerHTML = `
    <h2>Horóscopo para ${signoSeleccionado.nombre.toUpperCase()} - ${area.toUpperCase()}</h2>
    <p>${mensaje}</p>
    <p><strong>Compatibilidad:</strong> ${compatibles.join(", ").toUpperCase()}</p>
  `;

  const consulta = { signo: signoSeleccionado.id, area, mensaje, fechaConsulta: new Date() };
  historialConsultas.push(consulta);
  localStorage.setItem("historialConsultas", JSON.stringify(historialConsultas));
  actualizarHistorial();
});

// Al cargar la página
window.addEventListener("load", function() {
  toggleModo(); 
  document.getElementById("historial").style.display = "none"; // Ocultar historial al iniciar

  const storedHistory = localStorage.getItem("historialConsultas");
  if (storedHistory) {
    historialConsultas = JSON.parse(storedHistory);
    actualizarHistorial();
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
  actualizarHistorial();
});