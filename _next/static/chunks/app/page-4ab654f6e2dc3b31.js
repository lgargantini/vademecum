(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2103:function(e,t,r){Promise.resolve().then(r.bind(r,4867))},4867:function(e,t,r){"use strict";r.d(t,{default:function(){return T}});var a,n,o,u,m,i,s,l,d,c,_,p,g,y,b=r(7437),f=r(2265);(a=l||(l={})).AR="ANMAT",a.BR="ANVISA",a.CL="ISP",a.CO="INVIMA",a.MX="COFEPRIS",a.PE="DIGEMID",a.UY="MS",(n=d||(d={})).AR="https://www.argentina.gob.ar/anmat",n.BR="http://portal.anvisa.gov.br/",n.CL="https://www.ispch.cl/",n.CO="https://www.invima.gov.co/",n.MX="https://www.gob.mx/cofepris",n.PE="https://www.gob.pe/digemid",n.UY="https://www.gub.uy/ministerio-salud-publica/",(o=c||(c={})).HERBS="herbs",o.ANTITUSSIVES="Antitusivos",o.ANTIPYRETICS="Antipyretics",o.ANTIHISTAMINES="Antihistamines",o.ANTITHERMICS="Antithermics",o.CORTICOIDS="Corticoids",o.ALLERGY="Allergy",o.GASTROINTESTINALS="Gastrointestinal",o.ANTIBIOTICS="Antibiotics",(u=_||(_={})).YEAR="year",u.MONTH="month",(m=p||(p={})).AR="kg",m.BR="kg",m.CL="kg",m.CO="kg",m.MX="kg",m.PE="kg",(i=g||(g={})).HOURS="hours",i.DAYS="days",(s=y||(y={})).ML="ml",s.DROPS="drop",s.TABLET="tablet",s.MILIGRAMS="mg";let h=[{id:4,category:"Antithermics",name:"TERMOFREN",non_proprietary_name:"Paracetamol",active_ingredient:"Paracetamol",is_proprietary:!0,brand:{type:"Lab",name:"ROEMMERS"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Jarabe 2%",drug_amount:120,id:7,doses:[{recommended_dose:{label:"0.25 ml cada 6 hs",measure:"ml",unit:.25,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"20 mg / 1 ml",measure:"ml",unit:20,volume:1,volume_measure:"ml"},max_dose:{label:"max 25 ml",measure:"ml",unit:25,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"ml",dosage_form:"Drops",drug_amount:20,id:8,doses:[{recommended_dose:{label:"2 drops por kg cada 6 hs",measure:"drop",unit:2,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"5 mg / 1 drop",measure:"mg",unit:5,volume:1,volume_measure:"drop"},max_dose:{label:"max 100 drops",measure:"drop",unit:100,frecuency_type:"hours",frecuency_unit:6}}]}]},{id:5,category:"Antithermics",name:"TAFIROLITO",non_proprietary_name:"Paracetamol",active_ingredient:"Paracetamol",is_proprietary:!0,brand:{type:"Lab",name:"GENOMA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"tablet",dosage_form:"tablets masticable 80 mg",drug_amount:20,id:9,doses:[{recommended_dose:{label:"1 unidad cada 8 kg",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"80 mg / 1 comp",measure:"mg",unit:80,volume:1,volume_measure:"tablet"},max_dose:{label:"max 6 tablets",measure:"tablet",unit:6,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"tablet",dosage_form:"tablets masticable 160 mg",id:10,drug_amount:20,doses:[{recommended_dose:{label:"1 unidad cada 16 kg",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"160 mg / 1 comp",measure:"mg",unit:160,volume:1,volume_measure:"tablet"},max_dose:{label:"max 3 tablets",measure:"tablet",unit:3,frecuency_type:"hours",frecuency_unit:6}}]}]},{id:6,category:"Antithermics",name:"TAFIROL",non_proprietary_name:"Paracetamol",active_ingredient:"Paracetamol",is_proprietary:!0,brand:{type:"Lab",name:"GENOMA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"tablet",dosage_form:"tablets 500 mg",drug_amount:10,id:11,doses:[{recommended_dose:{label:"1 comp / dosis",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"500 mg / 1 comp",measure:"mg",unit:500,volume:1,volume_measure:"tablet"},max_dose:{label:"max 1 comp / dosis",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"tablet",dosage_form:"tablets 500 mg",drug_amount:30,id:12,doses:[{recommended_dose:{label:"1 comp / dosis",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"500 mg / 1 comp",measure:"mg",unit:.5,volume:1,volume_measure:"tablet"},max_dose:{label:"max 1 comp / dosis",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6}}]}]},{id:7,category:"Antithermics",name:"GENIOL",non_proprietary_name:"Paracetamol",active_ingredient:"Paracetamol",is_proprietary:!0,brand:{type:"Lab",name:"ELEA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"tablet",dosage_form:"tablets 500 mg",drug_amount:16,id:13,doses:[{recommended_dose:{label:"1 comp / dosis",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"500 mg / 1 comp",measure:"mg",unit:500,volume:1,volume_measure:"tablet"},max_dose:{label:"max 1 comp / dosis",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6}}]}]},{id:8,name:"BENADRYL",non_proprietary_name:"Difenhidramina",active_ingredient:"Difenhidramina",brand:{type:"Lab",name:"BENADRYL"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},is_proprietary:!0,warning:"No administrar a menores de 2 a\xf1os",presentations:[{drug_unit:"ml",dosage_form:"Jarabe",id:8,doses:[{target_population:{label:"2.5-5 kg",from:2.5,to:5,from_type:"kg",to_type:"kg"},concentration:{label:"0.8 mg / 1 ml",measure:"ml",unit:.8,volume:1,volume_measure:"ml"},recommended_dose:{label:"ml cada 8 hs",measure:"ml",unit:2.5,frecuency_type:"hours",frecuency_unit:8}},{target_population:{from:10,to:20,from_type:"kg",to_type:"kg"},concentration:{label:"0.8 mg / 1 ml",measure:"ml",unit:.8,volume:1,volume_measure:"ml"},recommended_dose:{measure:"ml",unit:5,frecuency_type:"hours",frecuency_unit:8,label:"ml cada 8 hs"}}]}]},{id:9,category:"Antithermics",name:"DIOXADOL",non_proprietary_name:"Dipirona/Paracetamol",active_ingredient:"Dipirona/Paracetamol",is_proprietary:!0,warning:"No administrar a menores de 2 a\xf1os",brand:{type:"Lab",name:"MONTPELLIER"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Jarabe",drug_amount:120,id:9,doses:[{concentration:{label:"50 mg /100 ml",measure:"mg",unit:50,volume:100,volume_measure:"ml"},recommended_dose:{label:"0.2 ml por kg",measure:"ml",unit:.2,frecuency_type:"hours",frecuency_unit:6},max_dose:{label:"max 20 ml",measure:"ml",unit:20,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"ml",dosage_form:"Drops",drug_amount:30,id:10,doses:[{recommended_dose:{label:"0.5 drops por kg",measure:"drop",unit:.5,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"20 mg /1 drop",measure:"mg",unit:.02,volume:1,volume_measure:"drop"},max_dose:{label:"max 50 drops",measure:"drop",unit:50,frecuency_type:"hours",frecuency_unit:6}}]}]},{id:10,name:"FEBRATIC",non_proprietary_name:"Ibuprofeno",active_ingredient:"Ibuprofeno",is_proprietary:!0,brand:{type:"Lab",name:"ROEMMERS"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Jarabe 2%",drug_amount:100,id:10,doses:[{recommended_dose:{label:"0.5 ml cada 6 hs",measure:"ml",unit:.5,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"20 mg / 1 ml",measure:"mg",unit:20,volume:1,volume_measure:"ml"}}]},{drug_unit:"ml",dosage_form:"Jarabe 4%",drug_amount:100,id:11,doses:[{recommended_dose:{label:"0.25 ml por kg cada 6 hs",measure:"ml",unit:.25,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"40 mg / 1 ml",measure:"ml",unit:40,volume:1,volume_measure:"ml"},max_dose:{label:"max 10 ml",measure:"ml",unit:10,frecuency_type:"hours",frecuency_unit:6}}]}]},{id:11,name:"ACTRON PEDIATRICO",non_proprietary_name:"Ibuprofeno",active_ingredient:"Ibuprofeno",is_proprietary:!0,brand:{type:"Lab",name:"BAYER"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Jarabe 2%",drug_amount:100,id:12,doses:[{recommended_dose:{label:"0.5 ml por kg cada 6 hs",measure:"ml",unit:.5,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"20 mg / 1 ml",measure:"ml",unit:20,volume:1,volume_measure:"ml"},max_dose:{label:"max 20 ml",measure:"ml",unit:20,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"ml",dosage_form:"Jarabe 4%",drug_amount:100,id:13,doses:[{recommended_dose:{label:"0.25 ml por kg cada 6 hs",measure:"ml",unit:.25,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"40 mg / 1 ml",measure:"ml",unit:40,volume:1,volume_measure:"ml"},max_dose:{label:"max 10 ml",measure:"ml",unit:10,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"ml",dosage_form:"Jarabe 4%",drug_amount:180,id:14,doses:[{recommended_dose:{label:"0.25 ml por kg cada 6 hs",measure:"ml",unit:.25,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"40 mg / 1 ml",measure:"ml",unit:40,volume:1,volume_measure:"ml"},max_dose:{label:"max 10 ml",measure:"ml",unit:10,frecuency_type:"hours",frecuency_unit:6}}]}]},{name:"ACTRON",non_proprietary_name:"Ibuprofeno",active_ingredient:"Ibuprofeno",is_proprietary:!0,brand:{type:"Lab",name:"BAYER"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"tablet",dosage_form:"Tablets blandas 400 mg",drug_amount:10,id:15,doses:[{recommended_dose:{label:"1 comp cada 6 hs",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"400 mg / 1 comp",measure:"mg",unit:400,volume:1,volume_measure:"tablet"}}]},{drug_unit:"tablet",dosage_form:"Tablets blandas 600 mg",drug_amount:10,id:16,doses:[{recommended_dose:{label:"1 comp cada 6 hs",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"600 mg / 1 comp",measure:"mg",unit:600,volume:1,volume_measure:"tablet"}}]}],id:12},{name:"IBUPIRAC",non_proprietary_name:"Ibuprofeno",active_ingredient:"Ibuprofeno",is_proprietary:!0,brand:{type:"Lab",name:"PFIZER"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Jarabe 2%",drug_amount:110,id:17,doses:[{recommended_dose:{label:"0.5 ml por kg cada 6 hs",measure:"ml",unit:.5,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"20 mg / 1 ml",measure:"ml",unit:20,volume:1,volume_measure:"ml"},max_dose:{label:"max 20 ml",measure:"ml",unit:20,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"tablet",dosage_form:"Comp 400 mg",drug_amount:12,id:18,doses:[{recommended_dose:{label:"1 comp cada 6 hs",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"40 mg / 1 ml",measure:"ml",unit:40,volume:1,volume_measure:"ml"},max_dose:{label:"max 1 comp cada 6 hs",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6}}]}],id:22},{name:"IBUPIRAC",non_proprietary_name:"Ibuprofeno",active_ingredient:"Ibuprofeno",is_proprietary:!0,brand:{type:"Lab",name:"ELEA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Jarabe 4%",drug_amount:200,id:20,doses:[{recommended_dose:{label:"0.25 ml por kg cada 6 hs",measure:"ml",unit:.25,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"40 mg / 1 ml",measure:"ml",unit:40,volume:1,volume_measure:"ml"},max_dose:{label:"max 10 ml",measure:"ml",unit:10,frecuency_type:"hours",frecuency_unit:6}}]}],id:13},{name:"IBUPIRETA",non_proprietary_name:"Ibuprofeno",active_ingredient:"Ibuprofeno",is_proprietary:!0,brand:{type:"Lab",name:"URUFARMA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"tablet",dosage_form:"tablets masticable x 100 mg",drug_amount:10,id:21,doses:[{recommended_dose:{label:"1 comp cada 6 hs",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"100 mg / 1 comp",measure:"mg",unit:100,volume:1,volume_measure:"tablet"},max_dose:{label:"max 4 comp cada 6 hs",measure:"tablet",unit:4,frecuency_type:"hours",frecuency_unit:6}}]}],id:14},{name:"IBUPIRETA JUNIORS",non_proprietary_name:"Ibuprofeno",active_ingredient:"Ibuprofeno",is_proprietary:!0,brand:{type:"Lab",name:"ELEA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"tablet",dosage_form:"tablets masticable x 200 mg",drug_amount:20,id:22,doses:[{recommended_dose:{label:"1 comp cada 6 hs",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"200 mg / 1 comp",measure:"mg",unit:200,volume:1,volume_measure:"tablet"},max_dose:{label:"max 2 comp cada 6 hs",measure:"tablet",unit:2,frecuency_type:"hours",frecuency_unit:6}}]}],id:15},{name:"NOVALGINA",non_proprietary_name:"Metamizol",active_ingredient:"Metamizol",is_proprietary:!0,brand:{type:"Lab",name:"SANOFI"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Jarabe 50 mg/ml",drug_amount:100,id:23,doses:[{recommended_dose:{label:"0.2 ml por kg",measure:"ml",unit:.2,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"50 mg / 1 ml",measure:"mg",unit:50,volume:1,volume_measure:"ml"},max_dose:{label:"max 10-20 ml",measure:"ml",unit:20,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"ml",dosage_form:"Drops 500 mg/ml",drug_amount:20,id:24,doses:[{recommended_dose:{label:"0.4 drops por kg",measure:"drop",unit:.4,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"500 mg / 1 drop",measure:"mg",unit:500,volume:1,volume_measure:"drop"},max_dose:{label:"max 20-40 drops",measure:"drop",unit:40,frecuency_type:"hours",frecuency_unit:6}}]},{drug_unit:"tablet",dosage_form:"tablets 500 mg",drug_amount:10,id:25,doses:[{recommended_dose:{label:"1-2 tablets",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:6},concentration:{label:"500 mg / 1 comp",measure:"mg",unit:.5,volume:1,volume_measure:"tablet"},max_dose:{label:"max 1-2 tablets",measure:"tablet",unit:2,frecuency_type:"hours",frecuency_unit:6}}]}],id:16},{name:"BETACORT",non_proprietary_name:"Betametasona",active_ingredient:"Betametasona",is_proprietary:!0,brand:{type:"Lab",name:"CASSARA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Drops",drug_amount:15,id:26,doses:[{recommended_dose:{label:"1 drop por kg",measure:"drop",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"0.5 mg / 1 ml",measure:"mg",unit:.5,volume:1,volume_measure:"ml"},max_dose:{label:"40 drops",measure:"drop",unit:40,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"ml",dosage_form:"Drops",drug_amount:30,id:27,doses:[{recommended_dose:{label:"1 drop por kg",measure:"drop",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"0.5 mg / 1 ml",measure:"mg",unit:.5,volume:1,volume_measure:"ml"},max_dose:{label:"40 drops",measure:"drop",unit:40,frecuency_type:"hours",frecuency_unit:8}}]}],id:17},{name:"CORTICAS",non_proprietary_name:"Dexametasona",active_ingredient:"Dexametasona",is_proprietary:!0,brand:{type:"Lab",name:"CASSACO"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Drops",drug_amount:30,id:28,doses:[{recommended_dose:{label:"1 drop por kg",measure:"drop",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"0.03 mg / 1 drop",measure:"mg",unit:.03,volume:1,volume_measure:"drop"},max_dose:{label:"40 drops",measure:"drop",unit:40,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"tablet",dosage_form:"tablets 0.6 mg",drug_amount:30,id:29,doses:[{recommended_dose:{label:"1-2 tablets",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"0.6 mg / 1 comp",measure:"mg",unit:.6,volume:1,volume_measure:"tablet"},max_dose:{label:"1-2 tablets",measure:"tablet",unit:2,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"tablet",dosage_form:"tablets 1.2 mg",drug_amount:30,id:30,doses:[{recommended_dose:{label:"1 tablet",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"1.2 mg / 1 comp",measure:"mg",unit:1.2,volume:1,volume_measure:"tablet"},max_dose:{label:"1 tablet",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8}}]}],id:18},{name:"CORTEROID",non_proprietary_name:"Dexametasona",active_ingredient:"Dexametasona",is_proprietary:!0,brand:{type:"Lab",name:"MONTPELLIER"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Drops",drug_amount:30,id:31,doses:[{recommended_dose:{label:"1 drop por kg",measure:"drop",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"0.03 mg / 1 drop",measure:"mg",unit:.03,volume:1,volume_measure:"drop"},max_dose:{label:"40 drops",measure:"drop",unit:40,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"tablet",dosage_form:"tablets 0.6 mg",drug_amount:30,id:32,doses:[{recommended_dose:{label:"1-2 tablets",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"0.6 mg / 1 comp",measure:"mg",unit:.6,volume:1,volume_measure:"tablet"},max_dose:{label:"1-2 tablets",measure:"tablet",unit:2,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"tablet",dosage_form:"tablets 1.2 mg",drug_amount:30,id:33,doses:[{recommended_dose:{label:"1 tablet",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"1.2 mg / 1 comp",measure:"mg",unit:1.2,volume:1,volume_measure:"tablet"},max_dose:{label:"1 tablet",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8}}]}],id:19},{name:"DELTISONA B",non_proprietary_name:"Metilprednisolona",active_ingredient:"Metilprednisolona",is_proprietary:!0,brand:{type:"Lab",name:"ELEA"},recognizing_authority:{type:"ANMAT",url:"https://www.argentina.gob.ar/anmat"},presentations:[{drug_unit:"ml",dosage_form:"Drops",drug_amount:20,id:34,doses:[{recommended_dose:{label:"0.2 mg por drop",measure:"mg",unit:.2,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"0.2 mg / 1 drop",measure:"mg",unit:.2,volume:1,volume_measure:"drop"},max_dose:{label:"65 drops",measure:"drop",unit:65,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"tablet",dosage_form:"tablets 4 mg",drug_amount:20,id:35,doses:[{recommended_dose:{label:"1 comp por 12 kg",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"4 mg / 1 comp",measure:"mg",unit:4,volume:1,volume_measure:"tablet"},max_dose:{label:"2 comp",measure:"tablet",unit:2,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"tablet",dosage_form:"tablets 8 mg",drug_amount:20,id:36,doses:[{recommended_dose:{label:"1 comp por 24 kg",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8},concentration:{label:"8 mg / 1 comp",measure:"mg",unit:8,volume:1,volume_measure:"tablet"},max_dose:{label:"1 comp",measure:"tablet",unit:1,frecuency_type:"hours",frecuency_unit:8}}]},{drug_unit:"tablet",dosage_form:"tablets 40 mg",drug_amount:20,id:37,doses:[{recommended_dose:{label:"1/2 comp",measure:"tablet",unit:.5,frecuency_type:"hours",frecuency_unit:12},concentration:{label:"40 mg / 1 comp",measure:"mg",unit:40,volume:1,volume_measure:"tablet"},max_dose:{label:"1/2 comp",measure:"tablet",unit:.5,frecuency_type:"hours",frecuency_unit:12}}]}],id:20}],v=(e,t)=>(0,b.jsxs)("div",{children:[e.from&&e.to&&(0,b.jsxs)("div",{children:["Target Population: ",null==e?void 0:e.from," ",null==e?void 0:e.from_type," ",null==e?void 0:e.to," ",null==e?void 0:e.to_type]}),e.from&&(0,b.jsxs)("div",{children:["Target Population: Beginning from ",null==e?void 0:e.from," ",null==e?void 0:e.from_type]}),e.to&&(0,b.jsxs)("div",{children:["Target Population: Up to ",null==e?void 0:e.to," ",null==e?void 0:e.to_type]})]},"".concat(t).concat(null==e?void 0:e.label)),x=e=>{var t,r,a,n,o,u,m;return"\n      ".concat(null===(t=e.recommended_dose)||void 0===t?void 0:t.unit,"\n      ").concat(null===(r=e.recommended_dose)||void 0===r?void 0:r.measure,"\n      ").concat(null===(a=e.recommended_dose)||void 0===a?void 0:a.frecuency_unit,"\n      ").concat(null===(n=e.recommended_dose)||void 0===n?void 0:n.frecuency_type,"\n      ").concat(null===(o=e.max_dose)||void 0===o?void 0:o.unit,"\n      ").concat(null===(u=e.max_dose)||void 0===u?void 0:u.measure,"\n      ").concat(null===(m=e.target_population)||void 0===m?void 0:m.label,"\n      ")},A=(e,t)=>e.map(e=>{var r,a,n,o,u,m;return(0,b.jsxs)("div",{children:[e.recommended_dose&&(0,b.jsxs)("div",{children:[null===(r=e.recommended_dose)||void 0===r?void 0:r.unit," ",null===(a=e.recommended_dose)||void 0===a?void 0:a.measure," each"," ",null===(n=e.recommended_dose)||void 0===n?void 0:n.frecuency_unit," ",null===(o=e.recommended_dose)||void 0===o?void 0:o.frecuency_type]}),e.max_dose&&(0,b.jsxs)("div",{children:["Max: ",null===(u=e.max_dose)||void 0===u?void 0:u.unit," ",null===(m=e.max_dose)||void 0===m?void 0:m.measure]}),e.target_population&&v(e.target_population,t)]},x(e))}),w=e=>e.presentations.map(t=>(0,b.jsxs)("li",{className:"flex flex-col items-center border border-gray-300 rounded-lg w-96 p-4 mb-4",id:"result-item-".concat(e.id,"-drug-presentation-presentations-").concat(t.id),children:[(0,b.jsx)("h3",{className:"text-lg font-bold",id:"result-item-".concat(e.id,"-drug-presentation-presentations-").concat(t.id,"-dosage-form"),children:t.dosage_form}),(0,b.jsxs)("p",{className:"text-sm",id:"result-item-".concat(e.id,"-drug-presentation-presentations-").concat(t.id,"-drug-unit-and-amount"),children:[t.drug_amount," ",t.drug_unit]}),A(t.doses,t.id)]},"result-item-".concat(e.id,"-drug-presentation-presentations-").concat(t.id))),I=e=>(0,b.jsxs)("div",{id:"result-item-".concat(e.id,"-drug-presentation"),className:"flex flex-col items-center border border-gray-200 rounded-lg w-96 p-4 mb-4",children:[(0,b.jsx)("h3",{className:"text-lg font-bold",id:"result-item-drug-presentation-name",children:e.name}),(0,b.jsxs)("p",{className:"text-sm",id:"result-item-drug-presentation-active-ingredient",children:["Active Ingredient: ",e.active_ingredient]}),(0,b.jsxs)("p",{children:["Brand: ",e.brand.type," ",e.brand.name]}),e.warning&&(0,b.jsxs)("p",{className:"text-xs",id:"result-item-drug-presentation-warning",children:["Warning: ",e.warning]}),(0,b.jsx)("ul",{id:"result-item-".concat(e.id,"-drug-presentation-presentations-container"),children:w(e)})]},"result-item-".concat(e.id,"-drug-presentation")),N=e=>{let{query:t}=e,r=h.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())||e.active_ingredient.toLowerCase().includes(t.toLowerCase())||e.brand.name.toLowerCase().includes(t.toLowerCase()));return(0,b.jsx)("div",{className:"flex flex-col items-center",id:"results-container",children:r.length?r.map(e=>I(e)):"No results found"})};var T=e=>{let{search_label:t}=e,[r,a]=(0,f.useState)("");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{className:"text-4xl font-bold mb-6",children:t}),(0,b.jsx)("input",{className:"p-2 border border-gray-300 rounded-lg w-96 text-black",type:"text",placeholder:"Search for medication",value:r,id:"search-bar",onChange:e=>a(e.target.value)}),(0,b.jsx)(N,{query:r})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=2103)}),_N_E=e.O()}]);