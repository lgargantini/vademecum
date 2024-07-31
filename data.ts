export interface Brand {
  type: string;
  name: string;
}

enum AUTHORITY_COUNTRY_TYPE {
  AR = "ANMAT",
  BR = "ANVISA",
  CL = "ISP",
  CO = "INVIMA",
  MX = "COFEPRIS",
  PE = "DIGEMID",
  UY = "MS",
}

enum AUTHORITY_COUNTRY_INFORMATION {
  AR = "https://www.argentina.gob.ar/anmat",
  BR = "http://portal.anvisa.gov.br/",
  CL = "https://www.ispch.cl/",
  CO = "https://www.invima.gov.co/",
  MX = "https://www.gob.mx/cofepris",
  PE = "https://www.gob.pe/digemid",
  UY = "https://www.gub.uy/ministerio-salud-publica/",
}

export interface CountryAuthority {
  type: AUTHORITY_COUNTRY_TYPE;
  url: AUTHORITY_COUNTRY_INFORMATION;
}

export interface Presentation {
  id: number;
  drugUnit: DOSE_QUANTITY_TYPE;
  drugAmount?: number;
  dosageForm: string;
  doses: DosePresentation[];
}

export enum CATEGORIES {
  YUYOS = "Yuyos",
  ANTITUSIVOS = "Antitusivos",
  ANTIPRETICOS = "Antipiréticos",
  ANTIHISTAMINICOS = "Antihistamínicos",
  ANTITERMICOS = "Antitermicos",
  CORTICOIDES = "Corticoides",
  ALERGIA = "Alergia",
  GASTROINTESTINALES = "Gastrointestinales",
  ANTIBIOTICOS = "Antibióticos",
}

export enum TARGET_POPULATION_PERIOD_TYPE {
  YEAR = "year",
  MONTH = "month",
}

export enum TARGET_POPULATION_WEIGHT_TYPE {
  AR = "kg",
  BR = "kg",
  CL = "kg",
  CO = "kg",
  MX = "kg",
  PE = "kg",
}

export interface TargetPopulation {
  from?: number;
  from_type?: TARGET_POPULATION_PERIOD_TYPE | TARGET_POPULATION_WEIGHT_TYPE;
  to?: number;
  to_type?: TARGET_POPULATION_PERIOD_TYPE | TARGET_POPULATION_WEIGHT_TYPE;
  label?: string;
}

export enum DOSE_FRECUENCY_TYPE {
  HOURS = "hours",
  DAYS = "days",
}

enum DOSE_QUANTITY_TYPE {
  ML = "ml",
  DROPS = "gota",
  COMPRIMIDO = "comprimido",
  MILIGRAMS = "mg",
}

export interface Dose {
  label: string; // 2.5ml cada 12 hs
  unit: number; // 2.5
  measure: DOSE_QUANTITY_TYPE; // ml|gotas
  frecuency_type: DOSE_FRECUENCY_TYPE;
  frecuency_unit: number; // 6
  alternative_frecuency_unit?: number; //8
}

export interface Concentration {
  label: string; // 20 mg / 1 ml
  unit: number; // 20
  measure: DOSE_QUANTITY_TYPE; // mg
  volume: number; // 1
  volume_measure: DOSE_QUANTITY_TYPE; // ml
}

export interface DosePresentation {
  target_population?: TargetPopulation;
  recommended_dose: Dose;
  concentration: Concentration;
  max_dose?: Dose;
}

export interface Drug {
  id: number;
  name: string;
  nonProprietaryName: string;
  activeIngredient: string;
  isProprietary: boolean;
  warning?: string;
  presentations: Presentation[];
  category?: CATEGORIES;
  brand: Brand;
  recognizingAuthority: CountryAuthority;
}

export const VADEMECUM_DATA: Drug[] = [
  // {
  //   id: 1,
  //   name: "CARBOCISTEINA",
  //   nonProprietaryName: "Carboximetilcisteina",
  //   activeIngredient: "Carboximetilcisteina",
  //   isProprietary: true,
  //   brand: {
  //     type: "Laboratorio",
  //     name: "CARBOCISTEINA",
  //   },
  //   recognizingAuthority: {
  //     type: AUTHORITY_COUNTRY_TYPE.AR,
  //     url: AUTHORITY_COUNTRY_INFORMATION.AR,
  //   },
  //   warning: "No administrar a menores de 2 años",
  //   presentations: [
  //     {
  //       drugUnit: DOSE_QUANTITY_TYPE.ML,
  //       dosageForm: "Jarabe",
  //       id: 3,
  //       doses: [
  //         {
  //           target_population: {
  //             label: "1-30 meses",
  //             from: 1,
  //             to: 30,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.MONTH,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.MONTH,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "2.5ml/12hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 2.5,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 12,
  //           },
  //         },
  //         {
  //           target_population: {
  //             label: "30 meses-5 años",
  //             from: 30,
  //             to: 5,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "5ml cada 12hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 5,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 12,
  //           },
  //         },
  //         {
  //           target_population: {
  //             label: "5-12 años",
  //             from: 5,
  //             to: 12,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "5ml cada 8hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 5,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 8,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   name: "ACEMUK- TOFLUX",
  //   nonProprietaryName: "N-acetilcisteina",
  //   activeIngredient: "N-acetilcisteina",
  //   isProprietary: true,
  //   warning: "No administrar a menores de 1 año",
  //   brand: {
  //     type: "Laboratorio",
  //     name: "ACEMUK- TOFLUX",
  //   },
  //   recognizingAuthority: {
  //     type: AUTHORITY_COUNTRY_TYPE.AR,
  //     url: AUTHORITY_COUNTRY_INFORMATION.AR,
  //   },
  //   presentations: [
  //     {
  //       dosageForm: "Jarabe",
  //       drugUnit: DOSE_QUANTITY_TYPE.ML,
  //       id: 4,
  //       doses: [
  //         {
  //           target_population: {
  //             label: "1-2 años",
  //             from: 1,
  //             to: 2,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "2.5ml cada 12 hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 2.5,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 12,
  //           },
  //         },
  //         {
  //           target_population: {
  //             label: "2-5 años",
  //             from: 2,
  //             to: 5,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "5ml cada 12hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 5,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 12,
  //           },
  //         },
  //         {
  //           target_population: {
  //             label: "6-14 años",
  //             from: 6,
  //             to: 14,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "10ml cada 12hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 10,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 12,
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       drugUnit: DOSE_QUANTITY_TYPE.ML,
  //       dosageForm: "Efervescente",
  //       id: 5,
  //       doses: [
  //         {
  //           target_population: {
  //             label: "2 a 12 años",
  //             from: 2,
  //             to: 12,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           concentration: {
  //             label: "200 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 200,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "200 cada 12",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 200,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 12,
  //           },
  //         },
  //         {
  //           target_population: {
  //             label: "Más 12 años",
  //             from: 12,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           concentration: {
  //             label: "600 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 600,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //           recommended_dose: {
  //             label: "600 al día",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 600,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.DAYS,
  //             frecuency_unit: 1,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   category: CATEGORIES.ANTIHISTAMINICOS,
  //   name: "MUCOLITIC INFANTIL",
  //   nonProprietaryName: "Carboximetilcisteina",
  //   activeIngredient: "Carboximetilcisteina",
  //   isProprietary: true,
  //   warning: "No administrar a menores de 1 año",
  //   brand: {
  //     type: "Laboratorio",
  //     name: "MUCOLITIC INFANTIL",
  //   },
  //   recognizingAuthority: {
  //     type: AUTHORITY_COUNTRY_TYPE.AR,
  //     url: AUTHORITY_COUNTRY_INFORMATION.AR,
  //   },
  //   presentations: [
  //     {
  //       drugUnit: DOSE_QUANTITY_TYPE.ML,
  //       dosageForm: "Jarabe",
  //       id: 6,
  //       doses: [
  //         {
  //           target_population: {
  //             label: "2-5 años",
  //             from: 2,
  //             to: 5,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           recommended_dose: {
  //             label: "2.5ml cada 6-8 hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 2.5,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 6,
  //             alternative_frecuency_unit: 8,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           },
  //         },
  //         {
  //           target_population: {
  //             label: "6-10 años",
  //             from: 6,
  //             to: 10,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //             to_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           recommended_dose: {
  //             label: "5ml cada 6-8 hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 5,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 6,
  //             alternative_frecuency_unit: 8,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           }
  //         },
  //         {
  //           target_population: {
  //             label: "Más 10 años",
  //             from: 10,
  //             from_type: TARGET_POPULATION_PERIOD_TYPE.YEAR,
  //           },
  //           recommended_dose: {
  //             label: "10ml cada 6-8 hs",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 10,
  //             frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
  //             frecuency_unit: 6,
  //             alternative_frecuency_unit: 8,
  //           },
  //           concentration: {
  //             label: "20 mg / 1 ml",
  //             measure: DOSE_QUANTITY_TYPE.ML,
  //             unit: 20,
  //             volume: 1,
  //             volume_measure: DOSE_QUANTITY_TYPE.ML,
  //           }
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 4,
    category: CATEGORIES.ANTITERMICOS,
    name: "TERMOFREN",
    nonProprietaryName: "Paracetamol",
    activeIngredient: "Paracetamol",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "ROEMMERS",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 2%",
        drugAmount: 120,
        id: 7,
        doses: [
          {
            recommended_dose: {
              label: "0.25 ml cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.25,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "20 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 20,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 25 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 25,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Gotas",
        drugAmount: 20,
        id: 8,
        doses: [
          {
            recommended_dose: {
              label: "2 gotas por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 2,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "5 mg / 1 gota",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 5,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.DROPS,
            },
            max_dose: {
              label: "max 100 gotas",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 100,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: CATEGORIES.ANTITERMICOS,
    name: "TAFIROLITO",
    nonProprietaryName: "Paracetamol",
    activeIngredient: "Paracetamol",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "GENOMA",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos masticable 80 mg",
        drugAmount: 20,
        id: 9,
        doses: [
          {
            recommended_dose: {
              label: "1 unidad cada 8 kg",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "80 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 80,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 6 comprimidos",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 6,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos masticable 160 mg",
        id: 10,
        drugAmount:20,
        doses: [
          {
            recommended_dose: {
              label: "1 unidad cada 16 kg",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "160 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 160,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 3 comprimidos",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 3,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
  },
  {
    id: 6,
    category: CATEGORIES.ANTITERMICOS,
    name: "TAFIROL",
    nonProprietaryName: "Paracetamol",
    activeIngredient: "Paracetamol",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "GENOMA",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos 500 mg",
        drugAmount: 10,
        id: 11,
        doses: [
          {
            recommended_dose: {
              label: "1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 500,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos 500 mg",
        drugAmount: 30,
        id: 12,
        doses: [
          {
            recommended_dose: {
              label: "1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 0.5,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
  },
  {
    id: 7,
    category: CATEGORIES.ANTITERMICOS,
    name: "GENIOL",
    nonProprietaryName: "Paracetamol",
    activeIngredient: "Paracetamol",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "ELEA",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos 500 mg",
        drugAmount: 16,
        id: 13,
        doses: [
          {
            recommended_dose: {
              label: "1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 500,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "BENADRYL",
    nonProprietaryName: "Difenhidramina",
    activeIngredient: "Difenhidramina",
    brand: {
      type: "Laboratorio",
      name: "BENADRYL",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    isProprietary: true,
    warning: "No administrar a menores de 2 años",
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe",
        id: 8,
        doses: [
          {
            target_population: {
              label: "2.5-5 kg",
              from: 2.5,
              to: 5,
              from_type: TARGET_POPULATION_WEIGHT_TYPE.AR,
              to_type: TARGET_POPULATION_WEIGHT_TYPE.AR,
            },
            concentration: {
              label: "0.8 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.8,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            recommended_dose: {
              label: "ml cada 8 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 2.5,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 8,
            },
          },
          {
            target_population: {
              from: 10,
              to: 20,
              from_type: TARGET_POPULATION_WEIGHT_TYPE.AR,
              to_type: TARGET_POPULATION_WEIGHT_TYPE.AR,
            },
            concentration: {
              label: "0.8 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.8,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            recommended_dose: {
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 5,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 8,
              label: "ml cada 8 hs",
            },
          },
        ],
      },
    ],
  },
  {
    id: 9,
    category: CATEGORIES.ANTITERMICOS,
    name: "DIOXADOL",
    nonProprietaryName: "Dipirona/Paracetamol",
    activeIngredient: "Dipirona/Paracetamol",
    isProprietary: true,
    warning: "No administrar a menores de 2 años",
    brand: {
      type: "Laboratorio",
      name: "MONTPELLIER",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe",
        drugAmount: 120,
        id: 9,
        doses: [
          {
            concentration: {
              label: "50 mg /100 ml",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 50,
              volume: 100,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            recommended_dose: {
              label: "0.2 ml por kg",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.2,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            max_dose: {
              label: "max 20 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 20,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Gotas",
        drugAmount: 30,
        id: 10,
        doses: [
          {
            recommended_dose: {
              label: "0.5 gotas por kg",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 0.5,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "20 mg /1 gota",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 0.02,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.DROPS,
            },
            max_dose: {
              label: "max 50 gotas",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 50,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "FEBRATIC",
    nonProprietaryName: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "ROEMMERS",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 2%",
        drugAmount: 100,
        id: 10,
        doses: [
          {
            recommended_dose: {
              label: "0.5 ml cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.5,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "20 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 20,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 4%",
        drugAmount: 100,
        id: 11,
        doses: [
          {
            recommended_dose: {
              label: "0.25 ml por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.25,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "40 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 40,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 10 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 10,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],  
      },
    ],
  },
  {
    id: 11,
    name: "ACTRON PEDIATRICO",
    nonProprietaryName: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "BAYER",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 2%",
        drugAmount: 100,
        id: 12,
        doses: [
          {
            recommended_dose: {
              label: "0.5 ml por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.5,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "20 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 20,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 20 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 20,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 4%",
        drugAmount: 100,
        id: 13,
        doses: [
          {
            recommended_dose: {
              label: "0.25 ml por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.25,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "40 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 40,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 10 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 10,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 4%",
        drugAmount: 180,
        id: 14,
        doses: [
          {
            recommended_dose: {
              label: "0.25 ml por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.25,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "40 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 40,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 10 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 10,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
           }
          },
          ], 
      },
    ],
  },
  {
    name: "ACTRON",
    nonProprietaryName: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "BAYER",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Cápsulas blandas 400 mg",
        drugAmount: 10,
        id: 15,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "400 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 400,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Cápsulas blandas 600 mg",
        drugAmount: 10,
        id: 16,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "600 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 600,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            }
          },
        ],
      },
    ],
    id: 12
  },
  {
    name: "IBUPIRAC",
    nonProprietaryName: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "PFIZER",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 2%",
        drugAmount: 110,
        id: 17,
        doses: [
          {
            recommended_dose: {
              label: "0.5 ml por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.5,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "20 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 20,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 20 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 20,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comp 400 mg",
        drugAmount: 12,
        id: 18,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "40 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 40,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
    id: 22
  },
  {
    name: "IBUPIRAC",
    nonProprietaryName: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "ELEA",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 4%",
        drugAmount: 200,
        id: 20,
        doses: [
          {
            recommended_dose: {
              label: "0.25 ml por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.25,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "40 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 40,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 10 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 10,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
    id: 13,
  },
  {
    name: "IBUPIRETA",
    nonProprietaryName: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "URUFARMA",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos masticable x 100 mg",
        drugAmount: 10,
        id: 21,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "100 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 100,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 4 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 4,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
    id: 14
  },
  {
    name: "IBUPIRETA JUNIORS",
    nonProprietaryName: "Ibuprofeno",
    activeIngredient: "Ibuprofeno",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "ELEA",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos masticable x 200 mg",
        drugAmount: 20,
        id: 22,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "200 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 200,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 2 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 2,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
    id: 15
  },
  {
    name: "NOVALGINA",
    nonProprietaryName: "Metamizol",
    activeIngredient: "Metamizol",
    isProprietary: true,
    brand: {
      type: "Laboratorio",
      name: "SANOFI",
    },
    recognizingAuthority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Jarabe 50 mg/ml",
        drugAmount: 100,
        id: 23,
        doses: [
          {
            recommended_dose: {
              label: "0.2 ml por kg",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 0.2,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "50 mg / 1 ml",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 50,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.ML,
            },
            max_dose: {
              label: "max 10-20 ml",
              measure: DOSE_QUANTITY_TYPE.ML,
              unit: 20,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.ML,
        dosageForm: "Gotas 500 mg/ml",
        drugAmount: 20,
        id: 24,
        doses: [
          {
            recommended_dose: {
              label: "0.4 gotas por kg",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 0.4,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 gota",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 500,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.DROPS,
            },
            max_dose: {
              label: "max 20-40 gotas",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 40,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
        dosageForm: "Comprimidos 500 mg",
        drugAmount: 10,
        id: 25,
        doses: [
          {
            recommended_dose: {
              label: "1-2 comprimidos",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 0.5,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            },
            max_dose: {
              label: "max 1-2 comprimidos",
              measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
              unit: 2,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
    ],
    id: 16
  },
{
  name: "BETACORT",
  nonProprietaryName: "Betametasona",
  activeIngredient: "Betametasona",
  isProprietary: true,
  brand: {
    type: "Laboratorio",
    name: "CASSARA",
  },
  recognizingAuthority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drugUnit: DOSE_QUANTITY_TYPE.ML,
      dosageForm: "Gotas",
      drugAmount: 15,
      id: 26,
      doses: [
        {
          recommended_dose: {
            label: "1 gota por kg",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.5 mg / 1 ml",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.5,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.ML,
          },
          max_dose: {
            label: "40 gotas",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 40,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.ML,
      dosageForm: "Gotas",
      drugAmount: 30,
      id: 27,
      doses: [
        {
          recommended_dose: {
            label: "1 gota por kg",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.5 mg / 1 ml",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.5,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.ML,
          },
          max_dose: {
            label: "40 gotas",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 40,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
  ],
  id: 17
},
{
  name: "CORTICAS",
  nonProprietaryName: "Dexametasona",
  activeIngredient: "Dexametasona",
  isProprietary: true,
  brand: {
    type: "Laboratorio",
    name: "CASSACO",
  },
  recognizingAuthority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drugUnit: DOSE_QUANTITY_TYPE.ML,
      dosageForm: "Gotas",
      drugAmount: 30,
      id: 28,
      doses: [
        {
          recommended_dose: {
            label: "1 gota por kg",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.03 mg / 1 gota",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.03,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.DROPS,
          },
          max_dose: {
            label: "40 gotas",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 40,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
      dosageForm: "Comprimidos 0.6 mg",
      drugAmount: 30,
      id: 29,
      doses: [
        {
          recommended_dose: {
            label: "1-2 comprimidos",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.6 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.6,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
          },
          max_dose: {
            label: "1-2 comprimidos",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
      dosageForm: "Comprimidos 1.2 mg",
      drugAmount: 30,
      id: 30,
      doses: [
        {
          recommended_dose: {
            label: "1 comprimido",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "1.2 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 1.2,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
          },
          max_dose: {
            label: "1 comprimido",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
  ],
  id: 18
},
{
  name: "CORTEROID",
  nonProprietaryName: "Dexametasona",
  activeIngredient: "Dexametasona",
  isProprietary: true,
  brand: {
    type: "Laboratorio",
    name: "MONTPELLIER",
  },
  recognizingAuthority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drugUnit: DOSE_QUANTITY_TYPE.ML,
      dosageForm: "Gotas",
      drugAmount: 30,
      id: 31,
      doses: [
        {
          recommended_dose: {
            label: "1 gota por kg",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.03 mg / 1 gota",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.03,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.DROPS,
          },
          max_dose: {
            label: "40 gotas",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 40,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
      dosageForm: "Comprimidos 0.6 mg",
      drugAmount: 30,
      id: 32,
      doses: [
        {
          recommended_dose: {
            label: "1-2 comprimidos",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.6 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.6,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
          },
          max_dose: {
            label: "1-2 comprimidos",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
      dosageForm: "Comprimidos 1.2 mg",
      drugAmount: 30,
      id: 33,
      doses: [
        {
          recommended_dose: {
            label: "1 comprimido",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "1.2 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 1.2,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
          },
          max_dose: {
            label: "1 comprimido",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
  ],
  id: 19
},
{
  name: "DELTISONA B",
  nonProprietaryName: "Metilprednisolona",
  activeIngredient: "Metilprednisolona",
  isProprietary: true,
  brand: {
    type: "Laboratorio",
    name: "ELEA",
  },
  recognizingAuthority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drugUnit: DOSE_QUANTITY_TYPE.ML,
      dosageForm: "Gotas",
      drugAmount: 20,
      id: 34,
      doses: [
        {
          recommended_dose: {
            label: "0.2 mg por gota",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.2 mg / 1 gota",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.2,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.DROPS,
          },
          max_dose: {
            label: "65 gotas",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 65,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
      dosageForm: "Comprimidos 4 mg",
      drugAmount: 20,
      id: 35,
      doses: [
        {
          recommended_dose: {
            label: "1 comp por 12 kg",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "4 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 4,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
          },
          max_dose: {
            label: "2 comp",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
      dosageForm: "Comprimidos 8 mg",
      drugAmount: 20,
      id: 36,
      doses: [
        {
          recommended_dose: {
            label: "1 comp por 24 kg",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "8 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 8,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
          },
          max_dose: {
            label: "1 comp",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
        },
      ],
    },
    {
      drugUnit: DOSE_QUANTITY_TYPE.COMPRIMIDO,
      dosageForm: "Comprimidos 40 mg",
      drugAmount: 20,
      id: 37,
      doses: [
        {
          recommended_dose: {
            label: "1/2 comp",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 0.5,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 12,
          },
          concentration: {
            label: "40 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 40,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
          },
          max_dose: {
            label: "1/2 comp",
            measure: DOSE_QUANTITY_TYPE.COMPRIMIDO,
            unit: 0.5,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 12,
          },
        },
      ],
    },
  ],
  id: 20
}
];