import React from "react";
import type { CommonOfficeInfoProps } from "./CommonOfficeInfoProps";

export const CommonOfficeInfo: React.FC<CommonOfficeInfoProps> = ({ data }: CommonOfficeInfoProps) => {

  return (
    <section>
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

      <p>
        <strong>Teléfonos:</strong>{" "}
        <a href={`mailto:${data.phone[0].phone}`}>{data.phone[0].phone}</a>
      </p>
      <p>
        <strong>Correo electrónico:</strong>{" "}
        <a href={`mailto:${data.email[0].email}`}>{data.email[0].email}</a>
      </p>

      {data.web && (
        <p>
          <strong>Web:</strong>{" "}
          {data.web.url ? (
            <a href={data.web.url} target="_blank" rel="noreferrer">
              {data.web.text}
            </a>
          ) : (
            data.web.text
          )}
        </p>
      )}

      <p><strong>Horario:</strong> {data.openingHours}</p>
    </section>
  );
}