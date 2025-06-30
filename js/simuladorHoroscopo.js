let signosZodiacales = [];
let historialConsultas = JSON.parse(localStorage.getItem("historialConsultas")) || [];

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

async function iniciarApp() {
    document.getElementById("historial").style.display = "none";
    
    try {
        const response = await fetch('./data/signs.json');
        signosZodiacales = await response.json();
        
        configurarEventos();
        actualizarHistorial();

    } catch (error) {
        console.error("Error al cargar los datos de los signos:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error Crítico',
            text: 'No se pudieron cargar los datos necesarios. Por favor, recarga la página.'
        });
    }
}

function configurarEventos() {
    document.getElementById('fecha-actual').textContent = luxon.DateTime.now().setLocale('es').toLocaleString(luxon.DateTime.DATE_HUGE);
    toggleModo();

    document.getElementById("horoscopo-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const modo = document.querySelector('input[name="modo"]:checked').value;
        let signo = "";

        if (modo === "fecha") {
            const fechaNacimiento = document.getElementById("fechaNacimiento").value;
            if (!fechaNacimiento) {
                Swal.fire({ icon: 'error', title: 'Campo Vacío', text: 'Por favor, ingresa tu fecha de nacimiento.' });
                return;
            }
            signo = obtenerSignoPorFecha(fechaNacimiento);
        } else {
            signo = document.getElementById("signoManual").value;
            if (!signo) {
                Swal.fire({ icon: 'error', title: 'Campo Vacío', text: 'Por favor, selecciona tu signo manualmente.' });
                return;
            }
        }

        const area = document.getElementById("area").value;
        if (!area) {
            Swal.fire({ icon: 'error', title: 'Campo Vacío', text: 'Por favor, selecciona el área a consultar.' });
            return;
        }

        const signoSeleccionado = signosZodiacales.find(s => s.id === signo);
        if (!signoSeleccionado) {
            Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo determinar un signo válido. Intenta de nuevo.' });
            return;
        }
        
        const mensajesDisponibles = signoSeleccionado.horoscopo[area];
        const mensaje = mensajesDisponibles[Math.floor(Math.random() * mensajesDisponibles.length)];
        const compatibles = signoSeleccionado.compatibilidad;

        Swal.fire({
          title: `Horóscopo para ${signoSeleccionado.nombre.toUpperCase()}`,
          html: `
            <p class="swal-mensaje">${mensaje}</p>
            <p><strong>Compatibilidad:</strong> ${compatibles.join(", ").toUpperCase()}</p>
          `,
          icon: 'success',
          confirmButtonText: '¡Genial!'
        });

        const consulta = { signo: signoSeleccionado.id, area, mensaje, fechaConsulta: new Date().toISOString() };
        historialConsultas.push(consulta);
        localStorage.setItem("historialConsultas", JSON.stringify(historialConsultas));
        actualizarHistorial();
    });

    document.getElementById("toggleHistorial").addEventListener("click", function () {
        const historialDiv = document.getElementById("historial");
        historialDiv.style.display = historialDiv.style.display === "none" ? "block" : "none";
    });

    document.getElementById("borrarHistorial").addEventListener("click", function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción no se puede deshacer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, ¡borrar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("historialConsultas");
                historialConsultas = [];
                actualizarHistorial();
                Swal.fire('¡Historial Borrado!', 'Tus consultas anteriores han sido eliminadas.', 'success');
            }
        });
    });
}


function obtenerSignoPorFecha(fecha) {
    const fechaObj = luxon.DateTime.fromISO(fecha);
    const mes = fechaObj.month;
    const dia = fechaObj.day;
  
    for (const signo of signosZodiacales) {
      const { fechaInicio, fechaFin } = signo;
      if (fechaInicio.mes > fechaFin.mes) {
        if ((mes === fechaInicio.mes && dia >= fechaInicio.dia) || (mes === fechaFin.mes && dia <= fechaFin.dia)) {
          return signo.id;
        }
      } else {
        if ((mes === fechaInicio.mes && dia >= fechaInicio.dia) || (mes === fechaFin.mes && dia <= fechaFin.dia)) {
          return signo.id;
        }
      }
    }
    return null;
}

function actualizarHistorial() {
    const historialList = document.getElementById("historial-list");
    historialList.innerHTML = "";

    if (historialConsultas.length === 0) {
        historialList.innerHTML = "<p>Historial vacío.</p>";
        return;
    }

    historialConsultas.forEach(item => {
        const li = document.createElement("li");
        const fechaFormateada = luxon.DateTime.fromISO(item.fechaConsulta).toFormat('dd/MM/yyyy HH:mm');
        const signoInfo = signosZodiacales.find(s => s.id === item.signo);
        const nombreSigno = signoInfo ? signoInfo.nombre.toUpperCase() : item.signo.toUpperCase();
        
        li.textContent = `${fechaFormateada} - ${nombreSigno} (${item.area.toUpperCase()}): ${item.mensaje}`;
        historialList.appendChild(li);
    });
}

function toggleModo() {
    const modoRadios = document.querySelectorAll('input[name="modo"]');
    const fechaInput = document.getElementById("fechaNacimiento");
    const signoInput = document.getElementById("signoManual");

    modoRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            if (e.target.value === "fecha") {
                document.getElementById("fecha-input").style.display = "block";
                fechaInput.disabled = false;
                document.getElementById("signo-input").style.display = "none";
                signoInput.disabled = true;
            } else {
                document.getElementById("fecha-input").style.display = "none";
                fechaInput.disabled = true;
                document.getElementById("signo-input").style.display = "block";
                signoInput.disabled = false;
            }
        });
    });
    
    fechaInput.disabled = false;
    signoInput.disabled = true;
}