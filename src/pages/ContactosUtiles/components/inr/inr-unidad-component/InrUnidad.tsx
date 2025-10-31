import React from "react";
import type { InrUnidadProps } from "./InrUnidadProps";

export const InrUnidad: React.FC<InrUnidadProps> = ({ data }: InrUnidadProps) => {

  return (
    <section>
      <p><strong>Departamento:</strong> {data.departamento}</p>
      <p><strong>Ciudad:</strong> {data.ciudad}</p>
      <p><strong>Barrio:</strong> {data.barrio}</p>

      <p>
        <strong>Dirección:</strong>{" "}
        {data.direccion.url ? (
          <a href={data.direccion.url} target="_blank" rel="noreferrer">
            {data.direccion.texto}
          </a>
        ) : (
          data.direccion.texto
        )}
      </p>

      <h3>Teléfonos</h3>
      <ul>
        {data.telefonos.map((t, i) => (
          <li key={i}>
            <em>{t.area}:</em>{" "}
            {t.phones.join(", ")}
          </li>
        ))}
      </ul>

      <h3>Correos electrónicos</h3>
      <ul>
        {data.correos.map((c, i) => (
          <li key={i}>
            <em>{c.area}:</em>{" "}
            {c.emails.map(e => <a href={`mailto:${e}`}>{e}</a>)}
          </li>
        ))}
      </ul>

      <h3>Paquetes</h3>
      <p><em>Horarios de entrega:</em> {data.paquetes.horarioEntrega}</p>
      {data.paquetes.restriccionesArticulosUrl && (
        <p>
          <em>Restricciones en cantidad y tipo de artículos:</em>{" "}
          <a href={data.paquetes.restriccionesArticulosUrl} target="_blank" rel="noreferrer">
            click aquí
          </a>
        </p>
      )}

      <h3>Visitas</h3>
      <p><em>Horario:</em> {data.visitas.horario}</p>
      {data.visitas.restriccionesVestimentaUrl && (
        <p>
          <em>Restricciones en vestimenta:</em>{" "}
          <a href={data.visitas.restriccionesVestimentaUrl} target="_blank" rel="noreferrer">
            click aquí
          </a>
        </p>
      )}
      <div>
        <em>Restricciones:</em>
        <ul>
          {data.visitas.restriccionesTexto.map((txt, i) => (
            <li key={i}>{txt}</li>
          ))}
        </ul>
      </div>
    </section>
  );
} 