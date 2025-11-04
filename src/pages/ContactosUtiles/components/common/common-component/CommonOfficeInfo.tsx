import React from "react";
import type { CommonOfficeInfoProps } from "./CommonOfficeInfoProps";
import check from '../../../../../assets/images/icons/box-check.svg';
import TitleBar from "../../../../../components/title-bar/TitleBar";
import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";
import TitleDescriptionBar from "../../../../../components/title-description-bar/TitleDescriptionBar";

import "./styles.scss";

export const CommonOfficeInfo: React.FC<CommonOfficeInfoProps> = ({ data }: CommonOfficeInfoProps) => {
  return (
    <section className="unit-card">
      <div>
        <div>
          {data.shortName && <TitleBar title={data.shortName} />}
        </div>
        <div className="common-layout-margin d-flex flex-row ">
          {data.longName && <TitleDescriptionBar text={data.longName} />}
        </div>
      </div>

      <div className="mt-3">
        {/* Teléfonos */}
        {Array.isArray(data.phone) && data.phone.length > 0 &&
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={check}
          >
            <div className="unit-section">
              <div className="unit-content">
                <h3 className="section-title">Teléfonos</h3>
                <ul className="section-list">
                  {data.phone.map((t, i) => (
                    <li key={i}>
                      {t.area ? <span className="area">{t.area}:&nbsp;</span> : null}
                      {t.phones?.map((p: string, j: number) => (<>
                        <a key={j} className="link" href={`tel:${p.replace(/\s+/g, '')}`}>{p}</a>
                        {j < t.phones.length - 1 ? <label>,&nbsp;</label> : <></>}
                      </>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </IconBoxCard>
        }
      </div>

      <div className="mt-3">
        {/* Dirección */}
        {data.address &&
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={check}
          >
            {data.address && (
              <div className="unit-section">
                <div className="unit-content">
                  <h3 className="section-title">Dirección</h3>
                  <p className="address-text">
                    {data.address.text}
                  </p>

                  {data.address.url && (
                    <a className="map-button" href={data.address.url} target="_blank" rel="noreferrer">
                      <span className="map-pin" aria-hidden="true">📍</span> Ver en mapa
                    </a>
                  )}
                </div>
              </div>
            )}
          </IconBoxCard>
        }
      </div>

      <div className="mt-3">
        {/* Correos electrónicos */}
        {Array.isArray(data.email) && data.email.length > 0 &&
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={check}
          >
            <div className="unit-section">
              <div className="unit-content">
                <h3 className="section-title">Correos electrónicos</h3>
                <ul className="section-list">
                  {data.email.map((c, i) => (
                    <li key={i}>
                      {c.area ? <span className="area">{c.area}:&nbsp;</span> : null}
                      {c.emails?.map((e: string, j: number) => (<>
                        <a key={j} className="link" href={`mailto:${e}`}>{e}</a>
                        {j < c.emails.length - 1 ? <label>,&nbsp;</label> : <></>}
                      </>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </IconBoxCard>
        }
      </div>

      <div className="mt-3">
        {data.web &&
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={check}
          >
            <div className="unit-section">
              <div className="unit-content">
                <h3 className="section-title">Web</h3>
                <ul className="section-list">
                  {data.web.text ? (
                    <a href={data.web.url} target="_blank" rel="noreferrer">
                      {data.web.url}
                    </a>
                  )
                    : <>{data.web.url}</>
                  }
                </ul>
              </div>
            </div>
          </IconBoxCard>
        }
      </div >

      <div className="mt-3">
        {data.openingHours &&
          <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={check}
          >
            <div className="unit-section">
              <div className="unit-content">
                <h3 className="section-title">Horario</h3>
                <p className="section-content">
                  {data.openingHours}
                </p>
              </div>
            </div>
          </IconBoxCard>
        }
      </div>
    </section>
  );
}