// Definición de signos zodiacales
const signos = ["aries", "tauro", "geminis", "cancer", "leo", "virgo",
  "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis"];

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

// Historial de consultas
let historialConsultas = [];

// Función para detectar el signo por fecha de nacimiento
function obtenerSignoPorFecha(fecha) {
  const mes = parseInt(fecha.split("-")[1]);
  const dia = parseInt(fecha.split("-")[2]);

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

// Funciones de interacción con el usuario
function pedirSigno() {
  let opcion = confirm("¿Querés ingresar tu fecha de nacimiento en lugar del signo manualmente?");
  
  if (opcion) {
    let fecha = prompt("Ingresá tu fecha de nacimiento en formato YYYY-MM-DD:");
    let signoDetectado = obtenerSignoPorFecha(fecha);
    alert(`Tu signo es: ${signoDetectado.toUpperCase()}`);
    return signoDetectado;
  } else {
    let signo = prompt("Ingresá tu signo zodiacal:").toLowerCase();
    while (!signos.includes(signo)) {
      signo = prompt("Signo no válido. Por favor ingresá uno correcto:").toLowerCase();
    }
    return signo;
  }
}

function pedirArea() {
  let area = prompt("¿Qué querés consultar? (amor / salud / dinero)").toLowerCase();
  while (!["amor", "salud", "dinero"].includes(area)) {
    area = prompt("Área no válida. Escribí: amor, salud o dinero").toLowerCase();
  }
  return area;
}

function mostrarHoroscopo(signo, area) {
  const mensajes = horoscopo[signo][area];
  const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  
  alert(`Horóscopo para ${signo.toUpperCase()} - ${area.toUpperCase()}:\n\n${mensajeAleatorio}`);
}

function mostrarCompatibilidad(signo) {
  const compatibles = compatibilidad[signo];
  alert(`Los signos más compatibles con ${signo.toUpperCase()} son: ${compatibles.join(", ").toUpperCase()}`);
}

function iniciarSimulador() {
  alert("¡Bienvenido/a al Simulador de Horóscopo!");
  let continuar = true;

  while (continuar) {
    const signo = pedirSigno();
    const area = pedirArea();
    
    mostrarHoroscopo(signo, area);
    mostrarCompatibilidad(signo);
    
    historialConsultas.push({ signo, area });
    continuar = confirm("¿Querés consultar otro horóscopo?");
  }

  console.log("Historial de consultas:", historialConsultas);
  alert("Gracias por usar el simulador. ¡Que tengas un gran día!");
}

// Ejecutar el simulador
