import IconBoxCard from "../../../../components/cards/icon-box-card/IconBoxCard";

export default function IntroTeenager() {
    return (
        <div>
            <div className="text-justify common-layout-margin">
                <p>El sector de Enfermería evalúa al/la adolescente en el momento del  ingreso; la consulta médica se debe producir  entre las primeras 24-48 horas.</p>
                <p>Derecho a la atención médica en su prestador de salud (FONASA) traslados hasta la Mutualista, en caso de  ser  necesario.</p>
                <p>Acceso a la Historia clínica electrónica de ASSE; información accesible para el/ la adolescente y familia.</p>
                <p>Atención en Salud mental, considerando las demoras actuales, se entiende necesario el cumplimiento a través de la búsqueda de abordaje por equipos interdisciplinarios.</p>

            </div>
            <div className="mt-3 common-layout-margin-only-desktop">
                <IconBoxCard
                    borderWidth={3}
                    offsetX={7} offsetY={7}
                    overhangX={7} overhangY={7}
                >
                    <div className="pt-3 pb-3">
                        UNIDAD DE ENLACE INISA: 092 724 162
                    </div>
                </IconBoxCard>
            </div>
            <div className="text-justify common-layout-margin mt-3">
                <div className="mt-3">
                    <p>Los familiares pueden comunicarse con la Unidad para mantenerse informados de  la situación del o la adolescente en situación de privación de libertad.</p>
                </div>
            </div>
        </div >
    );
}
