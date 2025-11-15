import InlineSpotlight from "../../../../components/inline-spotlight/InlineSpotlight"; 

export default function IntroAdult() {
    return (
        <div>
            <div>
                <p>Previo a la salida, desde la unidad corresponde tramitar los pasajes para el traslado de la persona hacia su comunidad.</p>
                <p>Mientras acompañas a tu familiar y se preparan para la salida, orientalo para qué dentro de la Unidad pueda generar documentación útil como: cédula de identidad, carné de salud.</p>
            </div>
            <div>
                <strong>
                    ¿Conoces el trabajo que está realizando la <InlineSpotlight bg="var(--brand-wine)">DINALI</InlineSpotlight> actualmente?
                </strong>
            </div>
            <div className="pt-2">
                <p>Te da la posibilidad de que los familiares accedan a una entrevista.</p>
                <p>Actualmente funcionan talleres que acercan a oficios dando la posibilidad de acceder a trabajo protegido. </p>
                <div style={{ color: "red", border: "2px solid red" }}>
                    <p>Pasantías laborales en diversos organismos y empresas. </p>
                    <p>Recepción de propuestas para emprendimientos y proyectos.</p>
                    <p>Te brindan boletos para movilizarte.</p>
                    <p>(lo importante es llegar a la DINALI) </p>
                </div>
            </div>
        </div >
    );
}
