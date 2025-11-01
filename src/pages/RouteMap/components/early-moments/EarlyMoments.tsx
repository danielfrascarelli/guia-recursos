import type { DefinitionProps } from "../../../../components/DefinitionProps";

import './early-moments.scss';
import FlatOffsetCard from "../../../../components/cards/flat-offset-card/FlatOffsetCard";
import IconBoxCard from "../../../../components/cards/icon-box-card/IconBoxCard";

export interface EarlyMomentsProps extends DefinitionProps { };

export default function EarlyMoments() {
  return (
    <div className="h-100">
      <div className="fp-early-moments">
        <div className="common-layout-margin mt-4">
          <div className="mt-2">
            <p>La detención puede ocurrir en flagrancia o mediante citación ante Fiscalía.</p>
            <ul>
              <li> Flagrancia  es que detienen a la persona cometiendo un delito. </li>
              <li> Citación ante Fiscalía es cuando hay indicios de que se cometió un delito.</li>
            </ul>
          </div>
          <div className="mt-2">
            <strong><p>¿A dónde recurrir para saber donde está detenida la persona?</p></strong>
            <p>Si la persona se encuentra en la seccional, la policía debe informar que se encuentra allí, en caso que se derive a Fiscalía, no es obligatorio brindar esta información.</p>
          </div>
          <div className="mt-2">
            <strong><p>¿A dónde me puedo dirigir para saber sobre su situación?</p></strong>
            <p>Te sugerimos: acudir a la seccional para averiguar la Sede de fiscalía correspondiente y consultar allí.</p>
          </div>
          <div className="mt-2">
            <p>
              Luego de la formalización en Fiscalía, la persona detenida debe contar con un abogado defensor (público o particular). Este es el abogado que acompañará a la persona hasta qué exista una resolución firme.
            </p>
          </div>
        </div>
        <div className="">
          <FlatOffsetCard
            borderColor="#e9a15f"
            bgColor="#efcfb273"
            borderWidth={3}
            offsetX={7} offsetY={7}
            overhangX={7} overhangY={7}
          >
            <div className="common-layout-margin  mt-3 mb-3">
              <p>Es fundamental saber que, durante las primeras 24 horas posteriores a la detención, el juez debe controlar que se hayan respetado ciertos derechos:</p>
              <ul style={{ marginBottom: 0 }}>
                <li> Que la persona haya recibido una primera atención en salud y que se haya verificado si estaba bajo los efectos de alguna sustancia al momento de la detención.</li>
                <li> En caso de qué existan indicios de consumo, el/la abogado/a defensor/a puede, y debe intervenir. Si se considera necesario, puedes solicitar que se realice una pericia médica para evaluar el estado de salud de la persona detenida.</li>
              </ul>
            </div>
          </FlatOffsetCard>
        </div>
        <div>
          <div className="common-layout-margin mt-4">
            <p> Es importante saber que cualquier persona puede presenciar una audiencia penal, ya que son públicas.</p>
            <p> Como familiar, tenés derecho a estar presente, salvo que la persona detenida no quiera que estés. En ese caso, se respeta su decisión.</p>
          </div>
        </div>
        <div>
          {/*div style={{ color: "red" }}>
             <OffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              globito: Cuando vayas a visitar a tu familiar, chequea esta información.
            </OffsetCard>
          </div> */}
          <div className="mt-2">
            <IconBoxCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              Las infancias y adolescencias atravesadas por los procesos de encarcelamiento sufren impactos en su vida cotidiana, generando distintas afectaciones en su desarrollo y bienestar.
            </IconBoxCard>
          </div>
          <div className="mt-4">
            <IconBoxCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              En Uruguay se desconoce el porcentaje de infancias y adolescencias afectadas por el encarcelamiento.
            </IconBoxCard>
          </div>
        </div>
      </div>
    </div>
  );
} 
