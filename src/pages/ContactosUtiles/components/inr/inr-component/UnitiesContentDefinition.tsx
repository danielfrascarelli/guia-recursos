import type { ContentDefinition } from "../../../../../components/ItemDefinition";

import type { InfoUnidad } from "../inr-unidad-component/InrUnidadProps";

import u1DataJson from '../../../../../data/inr/unities/1.json';
import u2DataJson from '../../../../../data/inr/unities/2.json';
import u3DataJson from '../../../../../data/inr/unities/3.json';
import u4DataJson from '../../../../../data/inr/unities/4.json';
import u5DataJson from '../../../../../data/inr/unities/5.json';
import u6DataJson from '../../../../../data/inr/unities/6.json';
import u7DataJson from '../../../../../data/inr/unities/7.json';
import u8DataJson from '../../../../../data/inr/unities/8.json';
import u9DataJson from '../../../../../data/inr/unities/9.json';
import u10DataJson from '../../../../../data/inr/unities/10.json';
import u11DataJson from '../../../../../data/inr/unities/11.json';
import u12DataJson from '../../../../../data/inr/unities/12.json';
import u13DataJson from '../../../../../data/inr/unities/13.json';
import u14DataJson from '../../../../../data/inr/unities/14.json';
import u15DataJson from '../../../../../data/inr/unities/15.json';
import u16DataJson from '../../../../../data/inr/unities/16.json';
import u17DataJson from '../../../../../data/inr/unities/17.json';
import u18DataJson from '../../../../../data/inr/unities/18.json';
import u19DataJson from '../../../../../data/inr/unities/19.json';
import u20DataJson from '../../../../../data/inr/unities/20.json';
import u21DataJson from '../../../../../data/inr/unities/21.json';
import u22DataJson from '../../../../../data/inr/unities/22.json';
import u23DataJson from '../../../../../data/inr/unities/23.json';
import u24DataJson from '../../../../../data/inr/unities/24.json';
import u25DataJson from '../../../../../data/inr/unities/25.json';
import u26DataJson from '../../../../../data/inr/unities/26.json';

export function getContentDefinition(): ContentDefinition[] {
  const u1Data: InfoUnidad = u1DataJson;
  const u2Data: InfoUnidad = u2DataJson;
  const u3Data: InfoUnidad = u3DataJson;
  const u4Data: InfoUnidad = u4DataJson;
  const u5Data: InfoUnidad = u5DataJson;
  const u6Data: InfoUnidad = u6DataJson;
  const u7Data: InfoUnidad = u7DataJson;
  const u8Data: InfoUnidad = u8DataJson;
  const u9Data: InfoUnidad = u9DataJson;
  const u10Data: InfoUnidad = u10DataJson;
  const u11Data: InfoUnidad = u11DataJson;
  const u12Data: InfoUnidad = u12DataJson;
  const u13Data: InfoUnidad = u13DataJson;
  const u14Data: InfoUnidad = u14DataJson;
  const u15Data: InfoUnidad = u15DataJson;
  const u16Data: InfoUnidad = u16DataJson;
  const u17Data: InfoUnidad = u17DataJson;
  const u18Data: InfoUnidad = u18DataJson;
  const u19Data: InfoUnidad = u19DataJson;
  const u20Data: InfoUnidad = u20DataJson;
  const u21Data: InfoUnidad = u21DataJson;
  const u22Data: InfoUnidad = u22DataJson;
  const u23Data: InfoUnidad = u23DataJson;
  const u24Data: InfoUnidad = u24DataJson;
  const u25Data: InfoUnidad = u25DataJson;
  const u26Data: InfoUnidad = u26DataJson;

  const items = [
    {
      id: "unidad-1",
      iconLabel: "1",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        shortAddressDescription: "Punta de Rieles, Montevideo",
        title: "Unidad 1",
        data: u1Data
      },
      url: "unidades/1"
    }
    , {
      id: "unidad-2",
      iconLabel: "2",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 2",
        shortAddressDescription: "Chacra de Libertad, San José",
        data: u2Data
      },
      url: "unidades/2"
    },
    {
      id: "unidad-3",
      iconLabel: "3",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 3",
        shortAddressDescription: "Penal de Libertad, San José ",
        data: u3Data
      },
      url: "unidades/3"
    }, {
      id: "unidad-4",
      iconLabel: "4",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 4",
        shortAddressDescription: "Santiago Vázquez, Montevideo",
        data: u4Data
      },
      url: "unidades/4"
    },
    {
      id: "unidad-5",
      iconLabel: "5",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 5",
        shortAddressDescription: "CMRF, Montevideo",
        data: u5Data
      },
      url: "unidades/5"
    },
    {
      id: "unidad-6",
      iconLabel: "6",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 6",
        shortAddressDescription: "Punta de Rieles, Montevideo",
        data: u6Data
      },
      url: "unidades/6"
    },
    {
      id: "unidad-7",
      iconLabel: "7",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 7",
        shortAddressDescription: "Chacra Policial, Canelones",
        data: u7Data
      },
      url: "unidades/7"
    },
    {
      id: "unidad-8",
      iconLabel: "8",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 8",
        shortAddressDescription: "Domingo Arena, Montevideo",
        data: u8Data
      },
      url: "unidades/8"
    },
    {
      id: "unidad-9",
      iconLabel: "9",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 9",
        shortAddressDescription: "Montevideo",
        data: u9Data
      },
      url: "unidades/9"
    },
    {
      id: "unidad-10",
      iconLabel: "10",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 10",
        shortAddressDescription: "Soler, San José",
        data: u10Data
      },
      url: "unidades/10"
    },
    {
      id: "unidad-11",
      iconLabel: "11",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 11",
        shortAddressDescription: "Cañitas, Río Negro",
        data: u11Data
      },
      url: "unidades/11"
    },
    {
      id: "unidad-12",
      iconLabel: "12",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 12",
        shortAddressDescription: "Cerro Carancho, Rivera",
        data: u12Data
      },
      url: "unidades/12"
    },
    {
      id: "unidad-13",
      iconLabel: "13",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 13",
        shortAddressDescription: "Paraje Las Rosas, Maldonado",
        data: u13Data
      },
      url: "unidades/13"
    },
    {
      id: "unidad-14",
      iconLabel: "14",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 14",
        shortAddressDescription: "Piedra de los Indios, Colonia",
        data: u14Data
      },
      url: "unidades/14"
    },
    {
      id: "unidad-15",
      iconLabel: "15",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 15",
        shortAddressDescription: "Melo, Cerro Largo",
        data: u15Data
      },
      url: "unidades/15"
    },
    {
      id: "unidad-16",
      iconLabel: "16",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 16",
        shortAddressDescription: "Paysandú",
        data: u16Data
      },
      url: "unidades/16"
    },
    {
      id: "unidad-17",
      iconLabel: "17",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 17",
        shortAddressDescription: "Campanero, Lavalleja",
        data: u17Data
      },
      url: "unidades/17"
    },
    {
      id: "unidad-18",
      iconLabel: "18",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 18",
        shortAddressDescription: "Durazno",
        data: u18Data
      },
      url: "unidades/18"
    },
    {
      id: "unidad-19",
      iconLabel: "19",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 19",
        shortAddressDescription: "Florida",
        data: u19Data
      },
      url: "unidades/19"
    },
    {
      id: "unidad-20",
      iconLabel: "20",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 20",
        shortAddressDescription: "Salto, Salto",
        data: u20Data
      },
      url: "unidades/20"
    },
    {
      id: "unidad-21",
      iconLabel: "21",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 21",
        shortAddressDescription: "Paraje Pintado Grande, Artigas",
        data: u21Data
      },
      url: "unidades/21"
    },
    {
      id: "unidad-22",
      iconLabel: "22",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 22",
        shortAddressDescription: "Rocha",
        data: u22Data
      },
      url: "unidades/22"
    },
    {
      id: "unidad-23",
      iconLabel: "23",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 23",
        shortAddressDescription: "Chacra Treinta y Tres, Treinta y Tres",
        data: u23Data
      },
      url: "unidades/23"
    },
    {
      id: "unidad-24",
      iconLabel: "24",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 24",
        shortAddressDescription: "Ruta 2 Km. 278.000, Pense, Soriano Soriano",
        data: u24Data
      },
      url: "unidades/24"
    },
    {
      id: "unidad-25",
      iconLabel: "25",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "**Unidad 25",
        shortAddressDescription: "Máxima Seguridad, Santiago Vazquez, Montevideo",
        data: u25Data
      },
      url: "unidades/25"
    },
    {
      id: "unidad-26",
      iconLabel: "26",
      variant: "pretty_white",
      componentType: "InrUnidadComponent",
      props: {
        title: "Unidad 26",
        shortAddressDescription: "Tacuarembó",
        data: u26Data
      },
      url: "unidades/26"
    }
  ] satisfies ContentDefinition[];
  return items;
}
