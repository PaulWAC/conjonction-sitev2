import React from "react";
import IsoTopeGrid from "react-isotope";
import cardsLayout from "./Cards.json";

import * as S from "./styles";

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "test", isChecked: false },
  { label: "test1", isChecked: false },
  { label: "chart", isChecked: false },
  { label: "tile", isChecked: false }
];
export default function App() {
  const [filters, updateFilters] = React.useState(filtersDefault);

const onFilter = (event) => {
    const {
      target: { value, checked }
    } = event;

updateFilters((state) =>
      state.map((f) => {
          console.log(f.label)
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked
          };
        }

return f;
      })
    );
  };

return (
    <S.App>
      <div className="filter-container">
        {filters.map((f) => (
          <div className="filter" key={`${f.label}_key`}>
            <input
              id={f.label}
              type="checkbox"
              value={f.label}
              onChange={onFilter}
              checked={f.isChecked}
            />
            <label htmlFor={f.label}>{f.label}</label>
          </div>
        ))}
      </div>
      <div className="container">
        <IsoTopeGrid
          gridLayout={cardsLayout}
          noOfCols={3}
          unitWidth={200}
          unitHeight={100}
          filters={filters}
        >
          {cardsLayout.map((card) => (
            <S.Card key={card.id} className={card.filter[0]}>
              {card.id}
            </S.Card>
          ))}
        </IsoTopeGrid>
      </div>
    </S.App>
  );
}