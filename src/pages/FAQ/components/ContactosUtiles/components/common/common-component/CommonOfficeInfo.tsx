import React from "react";
import type { CommonOfficeInfoProps } from "./CommonOfficeInfoProps";

export const CommonOfficeInfo: React.FC<CommonOfficeInfoProps> = ({ data }: CommonOfficeInfoProps) => {

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

      <p><strong>Teléfono:</strong> {data.telefono}</p>

      <p>
        <strong>Correo electrónico:</strong>{" "}
        <a href={`mailto:${data.correo}`}>{data.correo}</a>
      </p>

      {data.web && (
        <p>
          <strong>Web:</strong>{" "}
          {data.web.url ? (
            <a href={data.web.url} target="_blank" rel="noreferrer">
              {data.web.texto}
            </a>
          ) : (
            data.web.texto
          )}
        </p>
      )}

      <p><strong>Horario:</strong> {data.horario}</p>
    </section>
  );
}