import React from "react";
import type { CommonOfficeInfoProps } from "./CommonOfficeInfoProps";
import check from '../../../../../assets/images/icons/box-check.svg';
import TitleBar from "../../../../../components/title-bar/TitleBar";
import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";
import TitleDescriptionBar from "../../../../../components/title-description-bar/TitleDescriptionBar";

import { useNavigate } from "react-router-dom";

import "./styles.scss";
import { BoxButton } from "../../../../../components/box-buttons/box-button/BoxButton";

export const CommonOfficeInfo: React.FC<CommonOfficeInfoProps> = ({ data }: CommonOfficeInfoProps) => {
  const navigate = useNavigate();

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

      {/* Teléfonos */}
      <div className="mt-3">
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
                    <li key={`phones-${i}`}>
                      {t.area ? <span className="area">{t.area}:&nbsp;</span> : null}
                      {t.phones?.map((p: string, j: number) => (
                        <a key={`phones-${i}-area-${t.area}-${j}-$`} className="link" href={`tel:${p.replace(/\s+/g, '')}`}>
                          {p}
                          {j < t.phones.length - 1 ? <label>,&nbsp;</label> : <></>}
                        </a>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </IconBoxCard>
        }
      </div>

      {/* Dirección */}
      <div className="mt-3">
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
                  <p className="address-text section-content">
                    {data.address.text}
                  </p>
                  <div className="address-button">
                    {data.address?.url && (
                      <BoxButton
                        key={data.shortName + data.address?.url}
                        variant={"white"}
                        title={(
                          <a className="map-button" href={data.address.url} target="_blank" rel="noreferrer">
                            <span className="map-pin" aria-hidden="true">📍</span> Ver en mapa
                          </a>
                        )}
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "var(--brand-wine)"
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </IconBoxCard>
        }
      </div>

      {/* Correos electrónicos */}
      <div className="mt-3">
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
                    <li key={`emails-${i}`}>
                      {c.area ? <span className="area">{c.area}:&nbsp;</span> : null}
                      {c.emails?.map((e: string, j: number) => (
                        <a key={`emails-${i}-area-${c.area}-${j}`} className="link" href={`mailto:${e}`}>
                          {e}
                          {j < c.emails.length - 1 ? <label>,&nbsp;</label> : <></>}
                        </a>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </IconBoxCard>
        }
      </div>

      { /* Web */}
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

      { /* Horario */}
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