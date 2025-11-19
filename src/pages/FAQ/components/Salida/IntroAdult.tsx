import InlineSpotlight from "../../../../components/inline-spotlight/InlineSpotlight";

export default function IntroAdult() {
    return (
      <div className="common-layout-margin text-justify mt-3">
            <div>
                <p>Previo a la salida, desde la unidad corresponde tramitar los pasajes para el traslado de la persona hacia su comunidad.</p>
                <p>Mientras acompañas a tu familiar y se preparan para la salida, orientalo para que dentro de la Unidad pueda generar documentación útil como: cédula de identidad, carné de salud.</p>
                <p>Existe la DINALI que es la Dirección Nacional de Apoyo al Liberado. La misma se centraliza en Montevideo, en el resto de los departamentos debes dirigirte a la Oficina Territorial de tu departamento correspondiente al Ministerio de Desarrollo Social.</p>
            </div>
            <div className="pb-3">
                <a href="https://www.gub.uy/ministerio-desarrollo-social/territorio" target="_blank">
                    Pincha acá para ver las Oficinas Territoriales/MIDES de todos los departamentos
                </a>
            </div>
            <div>
                <p>El objetivo de DINALI es apoyar la reinserción social y laboral de las personas qué salen de prisión. Su objetivo es acompañar a cada persona en el proceso de volver a construir su proyecto de vida fuera del sistema penitenciario, ofreciendo distintas herramientas y oportunidades.</p>
            </div>
            <div>
                <strong>
                    ¿Conoces el trabajo que está realizando la <InlineSpotlight bg="var(--brand-wine)">DINALI</InlineSpotlight> actualmente?
                </strong>
            </div>
            <div className="pt-2">
                <p>Te da la posibilidad de que los familiares accedan a una entrevista.</p>
                <p>Actualmente funcionan talleres que acercan a oficios dando la posibilidad de acceder a trabajo protegido. </p>
                <p>Pasantías laborales en diversos organismos y empresas. </p>
                <p>Recepción de propuestas para emprendimientos y proyectos.</p>
                <p>Te brindan boletos para movilizarte.</p>
                <p>Aunque no siempre te puedan brindar la respuesta que esperas, está bueno que te acerques. </p>
            </div>
        </div >
    );
}
