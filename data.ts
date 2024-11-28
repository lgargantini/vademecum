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
  drug_unit: DOSE_QUANTITY_TYPE;
  drug_amount?: number;
  dosage_form: string;
  doses: DosePresentation[];
}

export enum CATEGORIES {
  HERBS = "herbs",
  ANTITUSSIVES = "Antitusivos",
  ANTIPYRETICS = "Antipyretics",
  ANTIHISTAMINES = "Antihistamines",
  ANTITHERMICS = "Antithermics",
  CORTICOIDS = "Corticoids",
  ALLERGY = "Allergy",
  GASTROINTESTINALS = "Gastrointestinal",
  ANTIBIOTICS = "Antibiotics",
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
  DROPS = "drop",
  TABLET = "tablet",
  MILIGRAMS = "mg",
}

export interface Dose {
  label: string; // 2.5ml cada 12 hs
  unit: number; // 2.5
  measure: DOSE_QUANTITY_TYPE; // ml|drops
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
  non_proprietary_name: string;
  active_ingredient: string;
  is_proprietary: boolean;
  warning?: string;
  presentations: Presentation[];
  category?: CATEGORIES;
  brand: Brand;
  recognizing_authority: CountryAuthority;
}

export const VADEMECUM_DATA: Drug[] = [
  // {
  //   id: 1,
  //   name: "CARBOCISTEINA",
  //   non_proprietary_name: "Carboximetilcisteina",
  //   active_ingredient: "Carboximetilcisteina",
  //   is_proprietary: true,
  //   brand: {
  //     type: "Lab",
  //     name: "CARBOCISTEINA",
  //   },
  //   recognizing_authority: {
  //     type: AUTHORITY_COUNTRY_TYPE.AR,
  //     url: AUTHORITY_COUNTRY_INFORMATION.AR,
  //   },
  //   warning: "No administrar a menores de 2 años",
  //   presentations: [
  //     {
  //       drug_unit: DOSE_QUANTITY_TYPE.ML,
  //       dosage_form: "Jarabe",
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
  //   non_proprietary_name: "N-acetilcisteina",
  //   active_ingredient: "N-acetilcisteina",
  //   is_proprietary: true,
  //   warning: "No administrar a menores de 1 año",
  //   brand: {
  //     type: "Lab",
  //     name: "ACEMUK- TOFLUX",
  //   },
  //   recognizing_authority: {
  //     type: AUTHORITY_COUNTRY_TYPE.AR,
  //     url: AUTHORITY_COUNTRY_INFORMATION.AR,
  //   },
  //   presentations: [
  //     {
  //       dosage_form: "Jarabe",
  //       drug_unit: DOSE_QUANTITY_TYPE.ML,
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
  //       drug_unit: DOSE_QUANTITY_TYPE.ML,
  //       dosage_form: "Efervescente",
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
  //   non_proprietary_name: "Carboximetilcisteina",
  //   active_ingredient: "Carboximetilcisteina",
  //   is_proprietary: true,
  //   warning: "No administrar a menores de 1 año",
  //   brand: {
  //     type: "Lab",
  //     name: "MUCOLITIC INFANTIL",
  //   },
  //   recognizing_authority: {
  //     type: AUTHORITY_COUNTRY_TYPE.AR,
  //     url: AUTHORITY_COUNTRY_INFORMATION.AR,
  //   },
  //   presentations: [
  //     {
  //       drug_unit: DOSE_QUANTITY_TYPE.ML,
  //       dosage_form: "Jarabe",
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
    category: CATEGORIES.ANTITHERMICS,
    name: "TERMOFREN",
    non_proprietary_name: "Paracetamol",
    active_ingredient: "Paracetamol",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "ROEMMERS",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 2%",
        drug_amount: 120,
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
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Drops",
        drug_amount: 20,
        id: 8,
        doses: [
          {
            recommended_dose: {
              label: "2 drops por kg cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 2,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "5 mg / 1 drop",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 5,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.DROPS,
            },
            max_dose: {
              label: "max 100 drops",
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
    category: CATEGORIES.ANTITHERMICS,
    name: "TAFIROLITO",
    non_proprietary_name: "Paracetamol",
    active_ingredient: "Paracetamol",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "GENOMA",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets masticable 80 mg",
        drug_amount: 20,
        id: 9,
        doses: [
          {
            recommended_dose: {
              label: "1 unidad cada 8 kg",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "80 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 80,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 6 tablets",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 6,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets masticable 160 mg",
        id: 10,
        drug_amount: 20,
        doses: [
          {
            recommended_dose: {
              label: "1 unidad cada 16 kg",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "160 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 160,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 3 tablets",
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
    category: CATEGORIES.ANTITHERMICS,
    name: "TAFIROL",
    non_proprietary_name: "Paracetamol",
    active_ingredient: "Paracetamol",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "GENOMA",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets 500 mg",
        drug_amount: 10,
        id: 11,
        doses: [
          {
            recommended_dose: {
              label: "1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 500,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets 500 mg",
        drug_amount: 30,
        id: 12,
        doses: [
          {
            recommended_dose: {
              label: "1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 0.5,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
    category: CATEGORIES.ANTITHERMICS,
    name: "GENIOL",
    non_proprietary_name: "Paracetamol",
    active_ingredient: "Paracetamol",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "ELEA",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets 500 mg",
        drug_amount: 16,
        id: 13,
        doses: [
          {
            recommended_dose: {
              label: "1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 500,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 1 comp / dosis",
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
    non_proprietary_name: "Difenhidramina",
    active_ingredient: "Difenhidramina",
    brand: {
      type: "Lab",
      name: "BENADRYL",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    is_proprietary: true,
    warning: "No administrar a menores de 2 años",
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe",
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
    category: CATEGORIES.ANTITHERMICS,
    name: "DIOXADOL",
    non_proprietary_name: "Dipirona/Paracetamol",
    active_ingredient: "Dipirona/Paracetamol",
    is_proprietary: true,
    warning: "No administrar a menores de 2 años",
    brand: {
      type: "Lab",
      name: "MONTPELLIER",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe",
        drug_amount: 120,
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
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Drops",
        drug_amount: 30,
        id: 10,
        doses: [
          {
            recommended_dose: {
              label: "0.5 drops por kg",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 0.5,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "20 mg /1 drop",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 0.02,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.DROPS,
            },
            max_dose: {
              label: "max 50 drops",
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
    non_proprietary_name: "Ibuprofeno",
    active_ingredient: "Ibuprofeno",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "ROEMMERS",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 2%",
        drug_amount: 100,
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
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 4%",
        drug_amount: 100,
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
    non_proprietary_name: "Ibuprofeno",
    active_ingredient: "Ibuprofeno",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "BAYER",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 2%",
        drug_amount: 100,
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
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 4%",
        drug_amount: 100,
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
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 4%",
        drug_amount: 180,
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
    non_proprietary_name: "Ibuprofeno",
    active_ingredient: "Ibuprofeno",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "BAYER",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "Tablets blandas 400 mg",
        drug_amount: 10,
        id: 15,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "400 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 400,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            }
          },
        ],
      },
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "Tablets blandas 600 mg",
        drug_amount: 10,
        id: 16,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "600 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 600,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            }
          },
        ],
      },
    ],
    id: 12
  },
  {
    name: "IBUPIRAC",
    non_proprietary_name: "Ibuprofeno",
    active_ingredient: "Ibuprofeno",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "PFIZER",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 2%",
        drug_amount: 110,
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
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "Comp 400 mg",
        drug_amount: 12,
        id: 18,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
    non_proprietary_name: "Ibuprofeno",
    active_ingredient: "Ibuprofeno",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "ELEA",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 4%",
        drug_amount: 200,
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
    non_proprietary_name: "Ibuprofeno",
    active_ingredient: "Ibuprofeno",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "URUFARMA",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets masticable x 100 mg",
        drug_amount: 10,
        id: 21,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "100 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 100,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 4 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
    non_proprietary_name: "Ibuprofeno",
    active_ingredient: "Ibuprofeno",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "ELEA",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets masticable x 200 mg",
        drug_amount: 20,
        id: 22,
        doses: [
          {
            recommended_dose: {
              label: "1 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "200 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 200,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 2 comp cada 6 hs",
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
    non_proprietary_name: "Metamizol",
    active_ingredient: "Metamizol",
    is_proprietary: true,
    brand: {
      type: "Lab",
      name: "SANOFI",
    },
    recognizing_authority: {
      type: AUTHORITY_COUNTRY_TYPE.AR,
      url: AUTHORITY_COUNTRY_INFORMATION.AR,
    },
    presentations: [
      {
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Jarabe 50 mg/ml",
        drug_amount: 100,
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
        drug_unit: DOSE_QUANTITY_TYPE.ML,
        dosage_form: "Drops 500 mg/ml",
        drug_amount: 20,
        id: 24,
        doses: [
          {
            recommended_dose: {
              label: "0.4 drops por kg",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 0.4,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 drop",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 500,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.DROPS,
            },
            max_dose: {
              label: "max 20-40 drops",
              measure: DOSE_QUANTITY_TYPE.DROPS,
              unit: 40,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            }
          },
        ],
      },
      {
        drug_unit: DOSE_QUANTITY_TYPE.TABLET,
        dosage_form: "tablets 500 mg",
        drug_amount: 10,
        id: 25,
        doses: [
          {
            recommended_dose: {
              label: "1-2 tablets",
              measure: DOSE_QUANTITY_TYPE.TABLET,
              unit: 1,
              frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
              frecuency_unit: 6,
            },
            concentration: {
              label: "500 mg / 1 comp",
              measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
              unit: 0.5,
              volume: 1,
              volume_measure: DOSE_QUANTITY_TYPE.TABLET,
            },
            max_dose: {
              label: "max 1-2 tablets",
              measure: DOSE_QUANTITY_TYPE.TABLET,
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
  non_proprietary_name: "Betametasona",
  active_ingredient: "Betametasona",
  is_proprietary: true,
  brand: {
    type: "Lab",
    name: "CASSARA",
  },
  recognizing_authority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drug_unit: DOSE_QUANTITY_TYPE.ML,
      dosage_form: "Drops",
      drug_amount: 15,
      id: 26,
      doses: [
        {
          recommended_dose: {
            label: "1 drop por kg",
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
            label: "40 drops",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 40,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.ML,
      dosage_form: "Drops",
      drug_amount: 30,
      id: 27,
      doses: [
        {
          recommended_dose: {
            label: "1 drop por kg",
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
            label: "40 drops",
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
  non_proprietary_name: "Dexametasona",
  active_ingredient: "Dexametasona",
  is_proprietary: true,
  brand: {
    type: "Lab",
    name: "CASSACO",
  },
  recognizing_authority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drug_unit: DOSE_QUANTITY_TYPE.ML,
      dosage_form: "Drops",
      drug_amount: 30,
      id: 28,
      doses: [
        {
          recommended_dose: {
            label: "1 drop por kg",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.03 mg / 1 drop",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.03,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.DROPS,
          },
          max_dose: {
            label: "40 drops",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 40,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.TABLET,
      dosage_form: "tablets 0.6 mg",
      drug_amount: 30,
      id: 29,
      doses: [
        {
          recommended_dose: {
            label: "1-2 tablets",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.6 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.6,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.TABLET,
          },
          max_dose: {
            label: "1-2 tablets",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.TABLET,
      dosage_form: "tablets 1.2 mg",
      drug_amount: 30,
      id: 30,
      doses: [
        {
          recommended_dose: {
            label: "1 tablet",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "1.2 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 1.2,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.TABLET,
          },
          max_dose: {
            label: "1 tablet",
            measure: DOSE_QUANTITY_TYPE.TABLET,
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
  non_proprietary_name: "Dexametasona",
  active_ingredient: "Dexametasona",
  is_proprietary: true,
  brand: {
    type: "Lab",
    name: "MONTPELLIER",
  },
  recognizing_authority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drug_unit: DOSE_QUANTITY_TYPE.ML,
      dosage_form: "Drops",
      drug_amount: 30,
      id: 31,
      doses: [
        {
          recommended_dose: {
            label: "1 drop por kg",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.03 mg / 1 drop",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.03,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.DROPS,
          },
          max_dose: {
            label: "40 drops",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 40,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.TABLET,
      dosage_form: "tablets 0.6 mg",
      drug_amount: 30,
      id: 32,
      doses: [
        {
          recommended_dose: {
            label: "1-2 tablets",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.6 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.6,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.TABLET,
          },
          max_dose: {
            label: "1-2 tablets",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.TABLET,
      dosage_form: "tablets 1.2 mg",
      drug_amount: 30,
      id: 33,
      doses: [
        {
          recommended_dose: {
            label: "1 tablet",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "1.2 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 1.2,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.TABLET,
          },
          max_dose: {
            label: "1 tablet",
            measure: DOSE_QUANTITY_TYPE.TABLET,
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
  non_proprietary_name: "Metilprednisolona",
  active_ingredient: "Metilprednisolona",
  is_proprietary: true,
  brand: {
    type: "Lab",
    name: "ELEA",
  },
  recognizing_authority: {
    type: AUTHORITY_COUNTRY_TYPE.AR,
    url: AUTHORITY_COUNTRY_INFORMATION.AR,
  },
  presentations: [
    {
      drug_unit: DOSE_QUANTITY_TYPE.ML,
      dosage_form: "Drops",
      drug_amount: 20,
      id: 34,
      doses: [
        {
          recommended_dose: {
            label: "0.2 mg por drop",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "0.2 mg / 1 drop",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 0.2,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.DROPS,
          },
          max_dose: {
            label: "65 drops",
            measure: DOSE_QUANTITY_TYPE.DROPS,
            unit: 65,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          }
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.TABLET,
      dosage_form: "tablets 4 mg",
      drug_amount: 20,
      id: 35,
      doses: [
        {
          recommended_dose: {
            label: "1 comp por 12 kg",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "4 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 4,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.TABLET,
          },
          max_dose: {
            label: "2 comp",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 2,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.TABLET,
      dosage_form: "tablets 8 mg",
      drug_amount: 20,
      id: 36,
      doses: [
        {
          recommended_dose: {
            label: "1 comp por 24 kg",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
          concentration: {
            label: "8 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 8,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.TABLET,
          },
          max_dose: {
            label: "1 comp",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 1,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 8,
          },
        },
      ],
    },
    {
      drug_unit: DOSE_QUANTITY_TYPE.TABLET,
      dosage_form: "tablets 40 mg",
      drug_amount: 20,
      id: 37,
      doses: [
        {
          recommended_dose: {
            label: "1/2 comp",
            measure: DOSE_QUANTITY_TYPE.TABLET,
            unit: 0.5,
            frecuency_type: DOSE_FRECUENCY_TYPE.HOURS,
            frecuency_unit: 12,
          },
          concentration: {
            label: "40 mg / 1 comp",
            measure: DOSE_QUANTITY_TYPE.MILIGRAMS,
            unit: 40,
            volume: 1,
            volume_measure: DOSE_QUANTITY_TYPE.TABLET,
          },
          max_dose: {
            label: "1/2 comp",
            measure: DOSE_QUANTITY_TYPE.TABLET,
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