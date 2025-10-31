import type { ContentDefinition } from "../../../../../components/ItemDefinition";

export function getTeenagerContentDefinition(): ContentDefinition[] {
  const items = [
      // {
      //   id: "1",
      //   variant: "pretty_white",
      //   url: "1",
      //   componentType: "TextComponent",
      //   props: {
      //     title: "Tenes que saber que...",
      //     text: (<>
      //       <div>
      //         <div>
      //           <p>Para la solicitud de traslado por acercamiento familiar es necesario que presentes una constancia de domicilio, con un recibo de alguna factura (ose, UTE, Antel quizás está bueno poner los logos acá, chiquitos)</p>
  
      //           <ul>
      //             <li>Luego de qué se cumplen los 90 días en la unidad donde la persona detenida fue trasladada puede pedir la misma o algún familiar el traslado. </li>
      //             <li>Cuando se solicitan traslados pueden transcurrir hasta 150 días para qué se genere una respuesta, pero se trata de qué sea en los 90 días. </li>
      //             <OffsetCard
      //               borderColor="#e9a15f"
      //               bgColor="#efcfb273"
      //               borderWidth={3}
      //               offsetX={7} offsetY={7}
      //               overhangX={7} overhangY={7}
      //             >
      //               <div>
      //                 <InlineSpotlight bg="var(--brand-wine)">IMPORTANTE!</InlineSpotlight>
      //               </div>
      //               <div className="pt-2">
      //                 <p>EXISTEN PLAZOS URGENTES CUANDO HAY RIESGO DE VIDA</p>
      //               </div>
      //             </OffsetCard>
      //             <li>Para realizar la solicitud es importante qué la persona no tenga sanciones.</li>
      //             <li>“No gastar pólvora en chimangos” después qué se pide un traslado hay un plazo de 90 días para pedir otro. Salvo en situaciones de riesgo de la integridad física. Por ese motivo es recomendable poder evaluar con tu familiar si es conveniente hacer el mismo.</li>
      //             <li>Dependiendo del riesgo de reincidencia la Junta Nacional de Traslados toma la decisión del lugar al cual será trasladada la persona.</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </>)
      //   },
      // }       
    ] satisfies ContentDefinition[];
    return items;
}
