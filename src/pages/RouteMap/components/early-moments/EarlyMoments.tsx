// import styles from "./EarlyMoments.module.scss"; 
// import { getContentDefinition } from "./ContentDefinition"; 
import type { DefinitionProps } from "../../../../components/DefinitionProps";
import TitleBar from "../../../../components/title-bar/TitleBar";

import './early-moments.scss';
import InlineSpotlight from "../../../../components/inline-spotlight/InlineSpotlight";
import OffsetCard from "../../../../components/offset-card/OffsetCard";

export interface EarlyMomentsProps extends DefinitionProps { };

export default function EarlyMoments() {
  return (

    <div className="screen">
      <TitleBar title={"Primeros momentos"} />
      <main  >
        <div className="h-100">
          <div className="mx-3 p-0 pt-3 fp-family-role text-justify">
            <p>La detención puede ocurrir en flagrancia o mediante citación ante Fiscalía.  </p>
            <ul>
              <li> Flagrancia  es que detienen a la persona cometiendo un delito. </li>
              <li> Citación ante Fiscalía es cuando hay indicios de que se cometió un delito.</li>
            </ul>

            <div>
              <strong><div>¿A dónde recurrir para saber donde está detenida la persona?</div></strong>
              Si la persona se encuentra en la seccional, la policía debe informar que se encuentra allí, en caso que se derive a Fiscalía, no es obligatorio brindar esta información.
            </div>
            <div>
              <strong><div>¿A dónde me puedo dirigir para saber sobre su situación?</div></strong>
              Te sugerimos: acudir a la seccional para averiguar la Sede de fiscalía correspondiente y consultar allí.
            </div>
            <p>
              Luego de la formalización en Fiscalía, la persona detenida debe contar con un abogado defensor (público o particular). Este es el abogado que acompañará a la persona hasta qué exista una resolución firme.
            </p>
            <OffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="text-justify" style={{ textAlign: "justify" }}>
                <p>
                  <InlineSpotlight bg="var(--brand-wine)">IMPORTANTE !</InlineSpotlight>
                </p>
                <p>Es fundamental saber que, durante las primeras 24 horas posteriores a la detención, el juez debe controlar que se hayan respetado ciertos derechos.</p>
                <ul style={{ marginBottom: 0 }}>
                  <li> Que la persona haya recibido una primera atención en salud y que se haya verificado si estaba bajo los efectos de alguna sustancia al momento de la detención.</li>
                  <li> En caso de qué existan indicios de consumo, el/la abogado/a defensor/a puede, y debe intervenir. Si se considera necesario, puedes solicitar que se realice una pericia médica para evaluar el estado de salud de la persona detenida.</li>
                </ul>
              </div>
            </OffsetCard>
            <div className="text-justify mt-2" style={{ textAlign: "justify" }}>
              <p> Es importante saber que cualquier persona puede presenciar una audiencia penal, ya que son públicas.</p>
              <p> Como familiar, tenés derecho a estar presente, salvo que la persona detenida no quiera que estés. En ese caso, se respeta su decisión.</p>
            </div>
            <div style={{ color: "red" }}>
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                globito: Cuando vayas a visitar a tu familiar, chequea esta información.
              </OffsetCard>
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                Globito: Las infancias y adolescencias atravesadas por los procesos de encarcelamiento sufren impactos en su vida cotidiana, generando distintas afectaciones en su desarrollo y bienestar.
              </OffsetCard>
              <OffsetCard
                borderColor="#e9a15f"
                bgColor="#efcfb273"
                borderWidth={3}
                offsetX={7} offsetY={7}
                overhangX={7} overhangY={7}
              >
                Globito: En Uruguay se desconoce el porcentaje de infancias y adolescencias afectadas por el encarcelamiento.
              </OffsetCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
