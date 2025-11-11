import type { DefinitionProps } from "../../../../components/DefinitionProps";

import pencil from '../../../../assets/images/icons/pencil.svg';

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
              <li>Flagrancia significa que detienen a la persona cometiendo un delito.</li>
              <li>La citación ante Fiscalía se da cuando para la Justicia hay indicios de que se cometió un delito.</li>
            </ul>
          </div>
          <div className="mt-2">
            <strong><p>¿A dónde debes recurrir para saber donde está detenida la persona?</p></strong>
            <p>Si la persona se encuentra en la Seccional policial, el personal responsable de allí, debe de informarte que tu familiar se encuentra en el lugar, en caso de ser derivado/a ante Fiscalía, no es obligatorio que te brinden esta información.</p>
          </div>
          <div className="mt-2">
            <strong><p>¿A dónde me puedo dirigir para saber sobre su situación?</p></strong>
            <p>Te sugerimos: acudir a la seccional para averiguar la Sede de fiscalía correspondiente y consultar allí.</p>
          </div>
          <div className="mt-2">
            <p>
              Luego de la formalización de la situación judicial en Fiscalía, la persona detenida debe contar con un Abogado/a Defensor/a (Público o Privado). Este profesional es quien deberá acompañar a la persona hasta qué exista una resolución formal de los hechos ocurridos.
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
              <p>Es fundamental saber que, durante las primeras 24 horas posteriores a la detención, el juez debe dar garantías de que se hayan respetado ciertos derechos.</p>

            </div>
          </FlatOffsetCard>
        </div>
        <div>
          <div className="common-layout-margin mt-4">
            <p>Como familiar tenes que saber que el/ la abogado/a defensor está a disposición de que le consultes. </p>
            <ul style={{ marginBottom: 0 }}>
              <li>Que la persona haya recibido una primera Atención en Salud y se haya verificado si se encontraba bajo los efectos de alguna sustancia al momento de la detención policial.</li>
              <li>En caso de qué existan indicios de consumo, el/la abogado/a defensor/a puede, y debe intervenir en la situación. Si se considera necesario puede incluso solicitar que se realice una pericia médica para evaluar el estado de salud de la persona detenida.</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="common-layout-margin mt-4">
            <p>Es importante saber que cualquier persona puede presenciar una audiencia penal, ya que son públicas.</p>
            <p>Como familiar, tenés derecho a estar presente en la audiencia, salvo que la persona detenida y/o el juez/a dispongan que no sea así, las razones deben de ser fundamentadas.</p>
            <p>En caso de que sea tu familiar quien no quiere que participes, debes de comprender que las situaciones son personales y eso no debería de afectar el vínculo y acompañamiento del resto del proceso.</p>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <IconBoxCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="mt-2 mb-2">
                Siempre respeta y acompaña la decisión de tu familiar
              </div>
            </IconBoxCard>
          </div>
          <div className="mt-4">
            <FlatOffsetCard
              borderColor="#e9a15f"
              bgColor="#efcfb273"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
            >
              <div className="common-layout-margin mt-2 mb-2">
                Las infancias y adolescencias atravesadas por los procesos de encarcelamiento sufren impactos en su vida cotidiana, generando distintas afectaciones en su desarrollo y bienestar.
              </div></FlatOffsetCard>

          </div>
          <div className="mt-4">
            <IconBoxCard
              borderColor="transparent"
              bgColor="#47b2eb4f"
              borderWidth={3}
              offsetX={7} offsetY={7}
              overhangX={7} overhangY={7}
              imgSrc={pencil}
            >
              En Uruguay se desconoce el porcentaje de infancias y adolescencias afectadas por el encarcelamiento.
            </IconBoxCard>
          </div>
        </div>
      </div>
    </div>
  );
} 
