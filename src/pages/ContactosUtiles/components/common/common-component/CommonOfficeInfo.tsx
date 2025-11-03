import React from "react";
import type { CommonOfficeInfoProps } from "./CommonOfficeInfoProps";
import check from '../../../../../assets/images/icons/box-check.svg';
import TitleBar from "../../../../../components/title-bar/TitleBar";
import IconBoxCard from "../../../../../components/cards/icon-box-card/IconBoxCard";
export const CommonOfficeInfo: React.FC<CommonOfficeInfoProps> = ({ data }: CommonOfficeInfoProps) => {

  return (
    <section className="unit-card">
      {data.longName && <TitleBar title={data.longName} />}   
      {Array.isArray(data.phone) && data.phone.length > 0 &&
        <IconBoxCard
            bgColor="transparent"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
            imgSrc={check}
          >
             {/* Teléfonos */}
              {Array.isArray(data.phone) && data.phone.length > 0 && (
                <div className="unit-section">          
                  <div className="unit-content">
                    <h3 className="section-title">Teléfonos</h3>
                    <ul className="section-list">
                      {data.phone.map((t, i) => (
                        <li key={i}>
                          {t.area ? <span className="area">{t.area}</span> : null}
                          {t.phones?.map((p: string, j: number) => (
                            <a key={j} className="link" href={`tel:${p.replace(/\s+/g, '')}`}>{p}</a>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
        </IconBoxCard>    
      }
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
                      {data.address.url ? (
                        <a href={data.address.url} target="_blank" rel="noreferrer" className="link">
                          {data.address.text}
                        </a>
                      ) : (
                        data.address.text
                      )}
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
          {Array.isArray(data.email) && data.email.length > 0 &&   
            <IconBoxCard
                bgColor="transparent"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
                imgSrc={check}
              >
                {/* Correos electrónicos */}
                  {Array.isArray(data.email) && data.email.length > 0 && (
                    <div className="unit-section">                  
                      <div className="unit-content">
                        <h3 className="section-title">Correos electrónicos</h3>
                        <ul className="section-list">
                          {data.email.map((c, i) => (
                            <li key={i}>
                              {c.area ? <span className="area">{c.area}</span> : null}
                              {c.emails?.map((e: string, j: number) => (
                                <a key={j} className="link" href={`mailto:${e}`}>{e}</a>
                              ))}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
            </IconBoxCard> 
          }
        {data.web &&      
          <IconBoxCard
              bgColor="transparent"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
              imgSrc={check}
            >
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
          </IconBoxCard> 
         }
        {data.openingHours &&         
          <IconBoxCard
              bgColor="transparent"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
              imgSrc={check}
            >
                {data.openingHours && (
                  <div className="mt-4">
                    <strong>Horario:</strong>
                    {data.openingHours}
                  </div>
                )}      
          </IconBoxCard>   
        }              
    </section>
  );
}