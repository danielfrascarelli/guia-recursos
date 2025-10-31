import React from "react";
import type { InrOfficeProps } from "./InrOfficeProps";

export const InrOffice: React.FC<InrOfficeProps> = ({ data }: InrOfficeProps) => {

  return (
    <section>
      <p><strong>{data.name}</strong> </p>
      <p><strong>Departamento:</strong> {data.department}</p>
      <p><strong>Ciudad:</strong> {data.city}</p>
      <p><strong>Barrio:</strong> {data.neighborhood}</p>

      <p>
        <strong>Dirección:</strong>{" "}
        {data.address.url ? (
          <a href={data.address.url} target="_blank" rel="noreferrer">
            {data.address.text}
          </a>
        ) : (
          data.address.text
        )}
      </p>

      <h3>Teléfonos</h3>
      <ul>
        {data.phone.map((t, i) => (
          <li key={i}>
            <em>{t.area}:</em>{" "}
            {t.phones.join(", ")}
          </li>
        ))}
      </ul>

      <h3>Correos electrónicos</h3>
      <ul>
        {data.email.map((c, i) => (
          <li key={i}>
            <em>{c.area}:</em>{" "}
            {c.emails.map(e => <a href={`mailto:${e}`}>{e}</a>)}
          </li>
        ))}
      </ul>
    </section>
  );
} 