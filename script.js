// Datos de Sofipos
const sofipos = [
    {
        nombre: "Sofipo 1",
        tasaRendimiento: "6.5%",
        plazos: "30, 60, 90 días",
        montoAsegurado: "$150,000 MXN"
    },
    {
        nombre: "Sofipo 2",
        tasaRendimiento: "7.0%",
        plazos: "60, 120 días",
        montoAsegurado: "$200,000 MXN"
    },
    {
        nombre: "Sofipo 3",
        tasaRendimiento: "5.8%",
        plazos: "30, 180 días",
        montoAsegurado: "$130,000 MXN"
    },
    // Agrega más Sofipos aquí
];

// Función para mostrar los datos en la tabla
function mostrarSofipos() {
    const tabla = document.querySelector("tbody");
    sofipos.forEach(sofipo => {
        const fila = `
            <tr>
                <td>${sofipo.nombre}</td>
                <td>${sofipo.tasaRendimiento}</td>
                <td>${sofipo.plazos}</td>
                <td>${sofipo.montoAsegurado}</td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}

// Llamar a la función para mostrar los datos
mostrarSofipos();