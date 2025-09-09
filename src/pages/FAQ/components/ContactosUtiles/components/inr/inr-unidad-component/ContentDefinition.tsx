// import type { ContentDefinition } from "../../../../../../components/ItemDefinition";


// export function getContentDefinition(): ContentDefinition[] {
//   const items = [ 
//           {
//             id: "unidad-1",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 1 - Punta de Rieles Montevideo",
//             }
//             url: "unidad-1"
//           }, {
//             id: "unidad-2",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 2 - Chacra de Libertad, San José",
//             },
//             url: "unidad-2"
//           },
//           {
//             id: "unidad-3",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 3 - Penal de Libertad, San José ",
//             },
//             url: "unidad-3"
//           }, {
//             id: "unidad-4",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 4 - Santiago Vázquez Montevideo",
//             },
//             url: "unidad-4"
//           },
//           {
//             id: "unidad-5",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 5 - CMRF, Montevideo ",
//             },
//             url: "unidad-5"
//           },
//           {
//             id: "unidad-6",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 6 - Punta de Rieles, Montevideo",
//             },
//             url: "unidad-6"
//           },
//           {
//             id: "unidad-7",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 7 - Chacra Policial, Canelones",
//             },
//             url: "unidad-7"
//           },
//           {
//             id: "unidad-8",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 8 - Domingo Arena, Montevideo",
//             },
//             url: "unidad-8"
//           },
//           {
//             id: "unidad-9",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 9 - Montevideo",
//             },
//             url: "unidad-9"
//           },
//           {
//             id: "unidad-10",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 10 - Soler, San José",
//             },
//             url: "unidad-10"
//           },
//           {
//             id: "unidad-11",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 11 - Cañitas, Río Negro",
//             },
//             url: "unidad-11"
//           },
//           {
//             id: "unidad-12",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 12 - Cerro Carancho, Rivera",
//             },
//             url: "unidad-12"
//           },
//           {
//             id: "unidad-13",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 13 - Paraje Las Rosas, Maldonado",
//             },
//             url: "unidad-13"
//           },
//           {
//             id: "unidad-14",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 14 - Piedra de los Indios, Colonia",
//             },
//             url: "unidad-14"
//           },
//           {
//             id: "unidad-15",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 15 - Melo, Cerro Largo",
//             },
//             url: "unidad-15"
//           },
//           {
//             id: "unidad-16",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 16 - Paysandú",
//             },
//             url: "unidad-16"
//           },
//           {
//             id: "unidad-17",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 17 - Campanero, Lavalleja",
//             },
//             url: "unidad-17"
//           },
//           {
//             id: "unidad-18",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 18 - Durazno",
//             },
//             url: "unidad-18"
//           },
//           {
//             id: "unidad-19",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 19 - Florida",
//             },
//             url: "unidad-19"
//           },
//           {
//             id: "unidad-20",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 20 - Salto, Salto",
//             },
//             url: "unidad-20"
//           },
//           {
//             id: "unidad-21",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 21 - Paraje Pintado Grande, Artigas",
//             },
//             url: "unidad-21"
//           },
//           {
//             id: "unidad-22",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 22 - Rocha",
//             },
//             url: "unidad-22"
//           },
//           {
//             id: "unidad-23",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 23 - Chacra Treinta y Tres, Treinta y Tres",
//             },
//             url: "unidad-23"
//           },
//           {
//             id: "unidad-24",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 24 - Ruta 2 Km. 278.000, Pense, Soriano Soriano",
//             },
//             url: "unidad-24"
//           },
//           {
//             id: "unidad-25",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 25 - Máxima Seguridad, Santiago Vazquez, Montevideo",
//             },
//             url: "unidad-25"
//           },
//           {
//             id: "unidad-26",
//             icon: "",
//             variant: "green",
//             componentType: "InrUnidadComponent",
//             props:{
//             title: "Unidad 26 - Tacuarembó, Tacuarembó      ",
//             },
//             url: "unidad-26"
//           },
        
//   ] satisfies ContentDefinition[];
//   return items;
// }
