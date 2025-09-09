// import { TextComponent } from "../../../../components/text-component/TextComponent";
// import { Text2Component } from "../../../../components/text2-component/Text2Component"; 
// import type { Item } from "../../../../shared/utils/Item";

// export function getContent():ContentItem[] {
//     return [
//       {
//         id: "1",
//         title: "Cómo debe ser la vestimenta, colores y otras particularidades.",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "1",
//          componentType: "TextComponent",     props: { text: "Primeros pasos" } ,
  
//       },

//       {
//         id: "2",
//         title: "¿Qué cosas se le pueden alcanzar a la persona?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "2",
//       },

//       {
//         id: "3",
//         title: "¿Cómo se arma un paquete?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "3",
//       },

//       {
//         id: "4",
//         title: "¿Dónde puedo registrar valores (jarra eléctrica por ejemplo)?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "4",
//       },

//       {
//         id: "5",
//         title: "¿Qué puedo llevar a la visita?¿ Qué comida puedo entrar? ¿Qué llevo en el bolso?¿Qué pasa cuando tengo que guardar mis cosas?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "5",
//       },

//       {
//         id: "6",
//         title: "¿Cómo me registro para ingresos a visita por primera vez? ¿Qué documentación necesito para hacerlo? ¿Cuántas personas se pueden registrar por detenido?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "6",
//       },

//       {
//         id: "7",
//         title: "¿Cómo se registran las infancias y adolescencias? ¿Cómo es la visita para infancias y adolescencias? Si se encuentran institucionalizados en INAU o INISA, cómo se coordina la visita.",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "7",
//       },

//       {
//         id: "8",
//         title: "Se puede llamar a la persona a la unidad para tener comunicación. Es viable?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "8",
//       },

//       {
//         id: "9",
//         title: "¿Cómo ingresar medicación a una unidad?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "9",
//       },

//       {
//         id: "10",
//         title: "¿Cómo son las revisiones, contemplando si hay escáner o no?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "10",
//       },

//       {
//         id: "11",
//         title: "¿En qué horarios, qué días?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "11",
//       },

//       {
//         id: "12",
//         title: "¿A dónde puedo llamar para corroborar la información?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "12",
//       },

//       {
//         id: "13",
//         title: "¿Qué documentación necesito para poder hacerlo?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "13",
//       },

//       {
//         id: "14",
//         title: "¿A quién se le entrega las pertenencias de la persona?",
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         url: "14",
//       },
//     ]
//   } 


// // 1) Registry de componentes (clave -> componente)
// export const registry = {
//   TextComponent,
//   Text2Component
// } as const;

// // 2) Tipos auxiliares para inferir props por componente
// type Registry = typeof registry;
// type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;


// // 2) Unión discriminada: componentType -> props correctas
// // export type ContentItem = {
// //   [K in keyof Registry]: {
// //     componentType: K;
// //     props: PropsOf<Registry[K]>;
// //   }
// // }[keyof Registry];

// // Base: interface genérica por variante
// export interface ContentItemOf<T extends keyof Registry> extends Item{
//   componentType: T;
//   props: PropsOf<Registry[T]>;
// }

// // Unión discriminada (sigue siendo type)
// export type ContentItem = {
//   [K in keyof Registry]: ContentItemOf<K>
// }[keyof Registry];


// // 3) Renderer genérico
// export function RenderContent({ items }: { items: ContentItem[] }) {
//   return (
//     <>
//       {items.map((it, i) => {
//         const Cmp = registry[it.componentType] as React.ComponentType<any>;
//         return <Cmp key={i} {...it.props} />;
//       })}
//     </>
//   );
// }
// // export interface ContentDefinition extends Item{
// // text: string;
// // componentType: Text
// // }