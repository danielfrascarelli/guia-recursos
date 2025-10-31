import React from "react";
import type { InrUnidadProps } from "./InrUnidadProps";
import { CommonOfficeInfo } from "../../common/common-component/CommonOfficeInfo";

export const InrUnidad: React.FC<InrUnidadProps> = ({ title, data }: InrUnidadProps) => {

  return (
    <div>
      <div>
        <CommonOfficeInfo title={title} data={data} />
      </div>
      <div>

        <h3>Paquetes</h3>
        <p><em>Horarios de entrega:</em> {data.packages.deliveryHours}</p>
        {data.packages.restrictionsUrl && (
          <p>
            <em>Restricciones en cantidad y tipo de artículos:</em>{" "}
            <a href={data.packages.restrictionsUrl} target="_blank" rel="noreferrer">
              click aquí
            </a>
          </p>
        )}

        <h3>Visitas</h3>
        <p><em>Horario:</em> {data.visiting.visitingHours}</p>
        {data.visiting.restrictionsDressCodeUrl && (
          <div>
            <em>Restricciones en vestimenta:</em>{" "}
            <a href={data.visiting.restrictionsDressCodeUrl} target="_blank" rel="noreferrer">
              click aquí
            </a>
          </div>
        )}
        <div>
          <em>Restricciones:</em>
          <ul>
            {data.visiting.restrictionsText.map((txt, i) => (
              <li key={i}>{txt}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <section>
      <p><strong>Departamento:</strong> {data.department}</p>
      <p><strong>Ciudad:</strong> {data.city}</p>
      <p><strong>Barrio:</strong> {data.neighborhood}</p>

      <p>
        <strong>Dirección:</strong>{" "}
        {data.address?.url ? (
          <a href={data.direccion.url} target="_blank" rel="noreferrer">
            {data.direccion.text}
          </a>
        ) : (
          data.direccion.text
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
    </section> */}
    </div>);
} 