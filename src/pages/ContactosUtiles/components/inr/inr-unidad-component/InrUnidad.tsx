import React from 'react';
import type { GeneralInfoUnidad, InrUnidadProps } from './InrUnidadProps';
import { CommonOfficeInfo } from '../../common/common-component/CommonOfficeInfo';
import IconBoxCard from '../../../../../components/cards/icon-box-card/IconBoxCard';

import check from '../../../../../assets/images/icons/box-check.svg';

import './styles.scss';
import generalJson from '../../../../../data/inr/TenerEnCuenta.json';

export const InrUnidad: React.FC<InrUnidadProps> = ({
  title,
  data,
}: InrUnidadProps) => {
  const general: GeneralInfoUnidad = generalJson;

  return (
    <div className='inr-unidad__container'>
      <CommonOfficeInfo title={title} data={data} />
      <section className='unit-card'>
        {/* Paquetes */}
        <div className='mt-3'>
          {data.packages && (
            <IconBoxCard
              bgColor='transparent'
              borderWidth={3}
              offsetX={7}
              offsetY={7}
              overhangX={7}
              overhangY={7}
              imgSrc={check}
            >
              {(data.packages.deliveryHours ||
                data.packages.restrictionsUrl) && (
                <div className='unit-section'>
                  <div className='unit-content'>
                    <h3 className='section-title'>Paquetes</h3>
                  </div>
                </div>
              )}
              {data.packages.deliveryHours && (
                <div className='unit-section unit-section-h4'>
                  <div className='unit-content'>
                    <h4 className='section-title'>Horarios de entrega</h4>
                    <p className='section-content'>
                      {data.packages.deliveryHours}
                    </p>
                  </div>
                </div>
              )}
              {data.packages.restrictionsUrl && (
                <div className='unit-section unit-section-h4'>
                  <div className='unit-content'>
                    <h4 className='section-title'>
                      Restricciones en cantidad y tipo de artículos
                    </h4>
                    <p className='section-content'>
                      <a
                        href={data.packages.restrictionsUrl}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Click aquí para ver el listado
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </IconBoxCard>
          )}
        </div>
        {/* Visitas */}
        <div className='mt-3'>
          {data.packages && (
            <IconBoxCard
              bgColor='transparent'
              borderWidth={3}
              offsetX={7}
              offsetY={7}
              overhangX={7}
              overhangY={7}
              imgSrc={check}
            >
              {(data.visiting.visitingHours ||
                data.visiting.visitingHoursConjugal) && (
                <div className='unit-section'>
                  <div className='unit-content'>
                    <h3 className='section-title'>Visitas</h3>
                  </div>
                </div>
              )}
              {data.visiting.visitingHours && (
                <div className='unit-section unit-section-h4'>
                  <div className='unit-content'>
                    <h4 className='section-title'>Horario de visita</h4>
                    <p className='section-content'>
                      {data.visiting.visitingHours}
                    </p>
                  </div>
                </div>
              )}
              {data.visiting.visitingRestrictions && (
                <div className='unit-section unit-section-h4'>
                  <div className='unit-content'>
                    <h4 className='section-title'>Restricciones de visitas</h4>
                    <p className='section-content'>
                      {data.visiting.visitingRestrictions}
                    </p>
                  </div>
                </div>
              )}
              {data.visiting.visitingHoursConjugal && (
                <div className='unit-section unit-section-h4'>
                  <div className='unit-content'>
                    <h4 className='section-title'>
                      Horario de visita conyugal
                    </h4>
                    <p className='section-content'>
                      {data.visiting.visitingHoursConjugal}
                    </p>
                  </div>
                </div>
              )}

              {data.visiting.visitingRestrictionsConjugal && (
                <div className='unit-section unit-section-h4'>
                  <div className='unit-content'>
                    <h4 className='section-title'>
                      Restricciones en visita conyugal
                    </h4>
                    <p className='section-content'>
                      {data.visiting.visitingRestrictionsConjugal}
                    </p>
                  </div>
                </div>
              )}

              {data.visiting.restrictionsDressCodeUrl && (
                <div className='unit-section unit-section-h4'>
                  <div className='unit-content'>
                    <h4 className='section-title'>
                      Restricciones en vestimenta
                    </h4>
                    <p className='section-content'>
                      <a
                        href={data.visiting.restrictionsDressCodeUrl}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Click aquí para ver el listado
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </IconBoxCard>
          )}
        </div>

        {/* Restricciones */}
        <div className='mt-3'>
          <IconBoxCard bgColor='#efcfb273' borderWidth={3}>
            <div className='unit-section unit-section-h4'>
              <div className='unit-content'>
                <h3 className='section-title'>Restricciones</h3>
                <ul className='section-list section-list-visiting-restrictions'>
                  {general.restrictionsText.map((txt, i) => (
                    <li key={i}>{txt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </IconBoxCard>
        </div>
      </section>
    </div>
  );
};
