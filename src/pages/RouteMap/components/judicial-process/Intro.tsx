import FlatOffsetCard from "../../../../components/cards/flat-offset-card/FlatOffsetCard";
import IconBoxCard from "../../../../components/cards/icon-box-card/IconBoxCard";

export default function Intro() {
    return (
        <div>
            <div className="text-justify common-layout-margin">
                <p>Cuando una persona es acusada de haber cometido un delito, desde Fiscalía se encargan de investigar y presentar la acusación formal, el juez es quien evalúa si existió delito o no.</p>
                <p>En el proceso de investigación existen varios caminos posibles que como familiar tenes que saber.</p>
                <p>Se pueden aplicar Medidas cautelares, las cuales son previas al juicio:</p>
                <p>Las medidas cautelares son decisiones que toma el juez antes del juicio. Sirven para asegurar que el proceso se pueda desarrollar correctamente.</p>
                <p>Estas medidas pueden incluir, por ejemplo:</p>
                <ul>
                    <li>Prisión preventiva ( la persona queda detenido/a mientras se realiza la investigación)</li>
                    <li>Se puede determinar la colocación de tobillera electrónica</li>
                    <li>Fijación de domicilio o presentación periódica en la  Seccional correspondiente.</li>
                </ul>
            </div>
            <div className="mt-3 mb-4 common-layout-margin-only-desktop">
                <FlatOffsetCard
                    borderColor="#e9a15f"
                    bgColor="#efcfb273"
                    borderWidth={3}
                    offsetX={7} offsetY={7}
                    overhangX={7} overhangY={7} >
                    <div className="mx-xl-4 my-3 common-layout-margin-only-not-desktop">
                        Que se esté aplicando una Medida Cautelar, no significa que la persona esté condenada.
                    </div>
                </FlatOffsetCard>
            </div>
            <div className="mt-4 mb-3 common-layout-margin-only-desktop">
                <IconBoxCard
                    borderColor="#e9a15f"
                    bgColor="#efcfb273"
                    borderWidth={3}
                    offsetX={7} offsetY={7}
                    overhangX={7} overhangY={7}
                >
                    <div className="mt-2 mb-2">
                        <p>Tenes que saber que las Medidas Cautelares se aplican solo durante el proceso de investigación, antes de que el juez decida si existe culpabilidad o no.</p>
                    </div>
                </IconBoxCard>
            </div>            
            <div className="text-justify common-layout-margin">
                <p>El objetivo es evitar que la persona afecte el proceso de investigación cometiendo nuevos delitos, huyendo del País, entre otras situaciones que obstaculicen a la Justicia.</p>
                <p>Una vez que se da la sentencia firme, es decir cuando el proceso de juicio se termina, las medidas cautelares se reemplazan por la pena o sanción que determine el juez.</p>
            </div>
        </div>
    );
}
