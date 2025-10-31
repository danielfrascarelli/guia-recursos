import React from "react";
import type { CommonOfficeInfoProps } from "./CommonOfficeInfoProps";

export const CommonOfficeInfo: React.FC<CommonOfficeInfoProps> = ({ data }: CommonOfficeInfoProps) => {

  return (
    <section>
      <div className="mt-4">
        <strong>{data.longName}</strong>
      </div>
      {data.department && (
        <div className="mt-4">
          <strong>Departamento:</strong>{data.department}
        </div>
      )}
      {data.city && (
        <div className="mt-4">
          <strong>Ciudad:</strong>{data.city}
        </div>
      )}
      {data.neighborhood && (
        <div className="mt-4">
          <strong>Barrio:</strong>{data.neighborhood}
        </div>
      )}

      {data.address != null && (
        <div className="mt-4">
          <>
            <strong>Dirección:</strong>
            {data.address.url
              ? (
                <a href={data.address.url} target="_blank" rel="noreferrer">
                  {data.address.text}
                </a>
              )
              : <>{data.address.text}</>
            }
          </>
        </div>
      )}

      {data.phone != null && (
        <div className="mt-4">
          <strong>Teléfonos:</strong>
          <ul>
            {data.phone.map((t, i) => (
              <li key={i}>
                {t.area ? <em>{t.area}:</em> : ""}
                {t.phones.map(p => <><a href={`tel:${p}`}>{p}</a> {" "}</>)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.email != null && (
        <div className="mt-4">
          <strong>Correo electrónico:</strong>
          <ul>
            {data.email.map((c, i) => (
              <li key={i}>
                {c.area ? <em>{c.area}:</em> : ""}
                {c.emails.map(e => <><a href={`mailto:${e}`}>{e}</a>{" "}</>)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.web && (
        <div className="mt-4">
          <strong>Web:</strong>{" "}
          {data.web.url ? (
            <a href={data.web.url} target="_blank" rel="noreferrer">
              {data.web.text}
            </a>
          ) : (
            data.web.text
          )}
        </div>
      )}

      {data.openingHours && (
        <div className="mt-4">
          <strong>Horario:</strong>
          {data.openingHours}
        </div>
      )}

    </section>
  );
}