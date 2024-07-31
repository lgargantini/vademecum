"use client";

import { useState } from "react";
import {
  DosePresentation,
  Drug,
  Presentation,
  TargetPopulation,
  VADEMECUM_DATA,
} from "../../data";

export interface ISearchBar {
  search_label: string;
}

const SearchBar = ({ search_label }: ISearchBar) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">{search_label}</h1>
      <input
        className="p-2 border border-gray-300 rounded-lg w-96 text-black"
        type="text"
        placeholder="Search for a medication"
        value={query}
        id="search-bar"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Results query={query} />
    </>
  );
};

const DisplayTargetPopulation = (
  target_population: TargetPopulation,
  presentationId: number
): JSX.Element => {
  if (target_population.from && target_population.to) {
    return (
      <div key={`${presentationId}${target_population?.label}`}>
        Target Population: {target_population?.from}{" "}
        {target_population?.from_type} {target_population?.to}{" "}
        {target_population?.to_type}
      </div>
    );
  } else if (target_population.from) {
    return (
      <div key={`${presentationId}${target_population?.label}`}>
        Target Population: Beginning from {target_population?.from}{" "}
        {target_population?.from_type}
      </div>
    );
  } else if (target_population.to) {
    return (
      <div key={`${presentationId}${target_population?.label}`}>
        Target Population: Up to {target_population?.to}{" "}
        {target_population?.to_type}
      </div>
    );
  }
  return <></>;
};
const DrugItemPresentationDoses = (
  dose: DosePresentation[],
  presentationId: number
) =>
  dose.map((dosePresentation: DosePresentation, idx: number) => {
    // @TODO: using index as key is not recommended, generate a unique key instead
    return (
      <div key={idx}>
        {dosePresentation.recommended_dose && (
          <div>
            {dosePresentation.recommended_dose?.unit}{" "}
            {dosePresentation.recommended_dose?.measure} each{" "}
            {dosePresentation.recommended_dose?.frecuency_unit}{" "}
            {dosePresentation.recommended_dose?.frecuency_type}
          </div>
        )}
        {dosePresentation.max_dose && (
          <div>
            Max: {dosePresentation.max_dose?.unit}{" "}
            {dosePresentation.max_dose?.measure}
          </div>
        )}
        {dosePresentation.target_population &&
          DisplayTargetPopulation(
            dosePresentation.target_population,
            presentationId
          )}
      </div>
    );
  });

const DrugItemPresentation = (item: Drug) =>
  item.presentations.map((presentation: Presentation) => (
    <li
      className="flex flex-col items-center border border-gray-300 rounded-lg w-96 p-4 mb-4"
      key={`result-item-${item.id}-drug-presentation-presentations-${presentation.id}`}
      id={`result-item-${item.id}-drug-presentation-presentations-${presentation.id}`}
    >
      <h3
        className="text-lg font-bold"
        id={`result-item-${item.id}-drug-presentation-presentations-${presentation.id}-dosage-form`}
      >
        {presentation.dosageForm}
      </h3>
      <p
        className="text-sm"
        id={`result-item-${item.id}-drug-presentation-presentations-${presentation.id}-drug-unit-and-amount`}
      >
        {presentation.drugAmount} {presentation.drugUnit}
      </p>
      {DrugItemPresentationDoses(presentation.doses, presentation.id)}
    </li>
  ));

const DrugPresentation = (item: Drug) => (
  <div
    id={`result-item-${item.id}-drug-presentation`}
    className="flex flex-col items-center border border-gray-200 rounded-lg w-96 p-4 mb-4"
    key={`result-item-${item.id}-drug-presentation`}
  >
    <h3 className="text-lg font-bold" id="result-item-drug-presentation-name">
      {item.name}
    </h3>
    <p className="text-sm" id="result-item-drug-presentation-active-ingredient">
      Active Ingredient: {item.activeIngredient}
    </p>
    <p>
      Brand: {item.brand.type} {item.brand.name}
    </p>
    {item.warning && (
      <p className="text-xs" id="result-item-drug-presentation-warning">
        Warning: {item.warning}
      </p>
    )}
    <ul id={`result-item-${item.id}-drug-presentation-presentations-container`}>
      {DrugItemPresentation(item)}
    </ul>
  </div>
);

interface IResults {
  query: string;
}

const Results = ({ query }: IResults): JSX.Element => {
  //replace this with API call
  const resultsDrug: Drug[] = VADEMECUM_DATA;

  //filter results mock, use different approach for API
  const filteredResults: Drug[] = resultsDrug.filter(
    (item: Drug) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.activeIngredient.toLowerCase().includes(query.toLowerCase()) || item.brand.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center" id="results-container">
      <h2 className="text-2xl font-bold mt-12 mb-6">Results</h2>
      {filteredResults.length
        ? filteredResults.map((item: Drug) => DrugPresentation(item))
        : "No results found"}
    </div>
  );
};

export default function Home() {
  return (
    <nav className="flex flex-col items-center justify-between p-24">
      <SearchBar search_label={"Vademecum - Main Search"} />
    </nav>
  );
}
