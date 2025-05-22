import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/DatePickerCustom.css"; // Asegúrate de que la ruta sea correcta

// Componente CustomDatePickerInput (sin cambios funcionales, solo se elimina el 'style' prop que ya no es necesario aquí)
interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  // style?: React.CSSProperties; // Ya no es necesario pasar este prop, los estilos se aplican directamente en el input
}

const CustomDatePickerInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder }, ref) => ( // Se eliminó 'style' de la desestructuración
    <div className="custom-datepicker-container"> {/* Eliminamos el style inline de aquí */}
      <input
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        ref={ref}
        // Pasamos los estilos al input aquí, directamente.
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid var(--color-borde)',
          backgroundColor: 'var(--color-fondo-claro)',
          color: 'var(--color-texto)',
          paddingRight: '40px', // Deja espacio para el icono
          boxSizing: 'border-box'
        }}
      />
      {/* Icono del calendario */}
      <span className="calendar-icon" onClick={onClick}>
        📅
      </span>
    </div>
  )
);


const HomePage: React.FC = () => {
  const [fechaRetiro, setFechaRetiro] = useState<Date | null>(null);
  const [fechaDevolucion, setFechaDevolucion] = useState<Date | null>(null);

  const faqs = [
    {
      pregunta: "¿Puedo devolver el vehículo en una sucursal diferente?",
      respuesta: "Sí, podés devolverlo en otra sucursal, siempre que esté habilitada en el sistema. Esto puede tener un costo adicional."
    },
    {
      pregunta: "¿Qué documentos necesito para alquilar un auto?",
      respuesta: "Necesitás presentar tu DNI, una licencia de conducir válida y una tarjeta de crédito."
    },
    {
      pregunta: "¿Cuáles son las formas de pago aceptadas?",
      respuesta: "Aceptamos tarjetas de crédito, débito y transferencias bancarias."
    }
  ];

  return (
    <div style={{ fontFamily: "sans-serif", background: "var(--color-secundario)" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <img src="/icons/logo.png" alt="AlquilApp Car" style={{ height: 130 }} />
        <button style={{
          background: "var(--color-primario)",
          color: "var(--color-fondo-claro)",
          border: "none",
          borderRadius: 8,
          padding: "10px 24px",
          fontWeight: 600,
          cursor: "pointer"
        }}>
          Iniciar sesión
        </button>
      </header>

      {/* Contenedor central */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>
        {/* Reservá tu auto */}
        <section>
          <h2 style={{ textAlign: "center", fontSize: 28, marginBottom: 24, color: "var(--color-texto)" }}>Reservá tu auto</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {/* *********** CAMBIO CLAVE AQUÍ: Ajuste del estilo del div que contiene label y input/DatePicker *********** */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}> {/* Añadido: display flex y flexDirection column */}
                <label style={{ color: "var(--color-texto)" }}>Sucursal</label>
                <select style={inputStyle}>
                  <option>Seleccione sucursal</option>
                  <option>Sucursal 1</option>
                  <option>Sucursal 2</option>
                  <option>Sucursal 3</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}> {/* Añadido: display flex y flexDirection column */}
                <label style={{ color: "var(--color-texto)" }}>Fecha de retiro</label>
                <DatePicker
                  selected={fechaRetiro}
                  onChange={(date: Date | null) => setFechaRetiro(date)}
                  dateFormat="dd/MM/yyyy"
                  customInput={<CustomDatePickerInput placeholder="dd/mm/aaaa" />}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}> {/* Añadido: display flex y flexDirection column */}
                <label style={{ color: "var(--color-texto)" }}>Fecha de devolución</label>
                <DatePicker
                  selected={fechaDevolucion}
                  onChange={(date: Date | null) => setFechaDevolucion(date)}
                  dateFormat="dd/MM/yyyy"
                  customInput={<CustomDatePickerInput placeholder="dd/mm/aaaa" />}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {/* Ajustar también estos divs para consistencia */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ color: "var(--color-texto)" }}>Hora Retiro</label>
                <input type="time" style={inputStyleHour} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ color: "var(--color-texto)" }}>Hora Devolución</label>
                <input type="time" style={inputStyleHour} />
              </div>
            </div>
          </div>
        </section>

        {/* Filtros por categoría */}
        <section style={{ marginTop: 40 }}>
          <h3 style={{ textAlign: "center", color: "var(--color-texto)" }}>Filtrar por categoría</h3>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
            {["Vehículos chicos", "Medianos", "SUV", "Deportivos", "Unidades adapt care para discapacitados"].map((cat, idx) => (
              <button key={idx} style={categoryBtnStyle}>{cat}</button>
            ))}
          </div>
        </section>

        {/* Sucursales */}
        <section style={{ marginTop: 48 }}>
          <h2 style={{ textAlign: "center", fontSize: 24, color: "var(--color-texto)" }}>Nuestras sucursales</h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
            {["Sucursal 1", "Sucursal 2", "Sucursal 3"].map((suc, idx) => (
              <div key={idx} style={{
                minWidth: 200,
                textAlign: "center",
                padding: 20,
                borderRadius: 10,
                background: "var(--color-acento)",
                color: "var(--color-texto)"
              }}>
                {suc}
              </div>
            ))}
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section style={{ marginTop: 48 }}>
          <h2 style={{ textAlign: "center", fontSize: 24, color: "var(--color-texto)" }}>Preguntas frecuentes</h2>
          <div style={{ maxWidth: 700, margin: "16px auto" }}>
            {faqs.map((item, idx) => (
              <FaqItem key={idx} pregunta={item.pregunta} respuesta={item.respuesta} />
            ))}
          </div>
        </section>

        {/* Formulario de consulta */}
        <section style={{ marginTop: 48 }}>
          <h2 style={{ textAlign: "center", fontSize: 24, color: "var(--color-texto)" }}>Envíanos tu consulta</h2>
          <div style={{ maxWidth: 700, margin: "16px auto", display: "flex", gap: 16 }}>
            <input type="text" placeholder="Escribí tu mensaje" style={inputStyle} />
            <button style={{
              background: "var(--color-primario)",
              color: "var(--color-fondo-claro)",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Enviar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// Estilos reutilizables (no se modifican)
const inputStyleHour: React.CSSProperties = {
  width: "94.6%",
  padding: 12,
  borderRadius: 8,
  border: "1px solid var(--color-borde)",
  background: "var(--color-fondo-claro)",
  color: "var(--color-texto)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: 12,
  borderRadius: 8,
  border: "1px solid var(--color-borde)",
  background: "var(--color-fondo-claro)",
  color: "var(--color-texto)"
};

const categoryBtnStyle: React.CSSProperties = {
  padding: "10px 16px",
  border: "1px solid var(--color-primario)",
  borderRadius: 8,
  background: "var(--color-fondo-claro)",
  color: "var(--color-texto)",
  fontWeight: 500,
  cursor: "pointer"
};

const faqItemStyle: React.CSSProperties = {
  marginBottom: 8,
  padding: 14,
  border: "1px solid var(--color-borde)",
  borderRadius: 8,
  background: "var(--color-fondo-claro)",
  display: "flex",
  justifyContent: "space-between",
  color: "var(--color-texto)"
};

// Componente FAQ (sin cambios)
type FaqItemProps = {
  pregunta: string;
  respuesta: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ pregunta, respuesta }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div
      style={{
        ...faqItemStyle,
        flexDirection: "column",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onClick={() => setAbierto(!abierto)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <span>{pregunta}</span>
        <span style={{ fontWeight: 600 }}>{abierto ? "▲" : "▼"}</span>
      </div>
      {abierto && (
        <div style={{ marginTop: 8, color: "var(--color-texto-claro)" }}>
          {respuesta}
        </div>
      )}
    </div>
  );
};

export default HomePage;