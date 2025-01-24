import { useState, useEffect } from "react";
import GridRow from "./GridRow/GridRow";
import GridHeader from "./GridHeader";
import "./GridView.css";
import { gridViewService } from "./gridViewService";
import { GRID_COLUMNS } from "../constants";
import DogsCountBar from "./GridRow/BreedCount/BreedCount";
import BreedAgeHistogram from "./GridRow/BreedAgeHistogram/BreedAgeHistogram";
import BreedColors from "./GridRow/BreedColors/BreedColors";
import BreedOwnerHistogram from "./GridRow/BreedOwnerHistogram/BreedOwnerHistogram";
import BreedSex from "./GridRow/BreedSex/BreedSex";

export default function GridView({ data }) {
  const [breeds, setBreeds] = useState(gridViewService.getDogsGrpByBreed(data));
  const [sortedColumnIdx, setSortedColumnIdx] = useState(null);
  const [isAscending, setIsAscending] = useState(false);
  const GridColumns = GRID_COLUMNS;
  const histDomain = gridViewService.getAgeHistogramDomain(breeds);
  const aggBreed = gridViewService.aggregateAllBreeds(data);

  function handleSort(columnIndex) {
    const column = Object.values(GridColumns)[columnIndex];
    columnIndex === sortedColumnIdx
      ? setIsAscending((prev) => !prev)
      : setIsAscending(true);
    setSortedColumnIdx(columnIndex);

    setBreeds((currentBreeds) => {
      const sortedBreeds = [...currentBreeds];
      isAscending
        ? sortedBreeds.sort(column.sortFunctionAsc)
        : sortedBreeds.sort(column.sortFunctionDesc);
      return sortedBreeds;
    });
  }

  const rows = breeds.map((b) => (
    <GridRow
      key={b.ID}
      breed={b}
      maxDogCountPerBreed={aggBreed.maleDogs + aggBreed.femaleDogs}
      beedAgeHistogramDomain={histDomain}
    ></GridRow>
  ));
  return (
    <>
      <GridHeader
        columns={GridColumns}
        onHeaderClicked={handleSort}
        sortedColumnIdx={sortedColumnIdx}
        isAsc={isAscending}
      >
        {[
          <div key="0"></div>,
          <div key="1">
            <span className="header-subtitle"></span>
            <DogsCountBar
              count={aggBreed.maleDogs + aggBreed.femaleDogs}
              maxCount={aggBreed.maleDogs + aggBreed.femaleDogs}
            />
          </div>,
          <div key="2">
            <span className="header-subtitle">Males vs. Females</span>
            <BreedSex
              maleDogsCount={aggBreed.maleDogs}
              femaleDogsCount={aggBreed.femaleDogs}
            />
          </div>,
          <div key="3">
            <span className="header-subtitle">{`${histDomain[0]}-${
              histDomain[histDomain.length - 1]
            }`}</span>
            <BreedAgeHistogram
              ageHistogram={aggBreed.ageHistogram}
              histogramDomain={histDomain}
            />
          </div>,
          <div key="4">
            <span className="header-subtitle"></span>
            <BreedColors colorHistogram={aggBreed.colorHistogram} />
          </div>,
          <div key="5">
            <span className="header-subtitle">Men vs. Women</span>
            <BreedOwnerHistogram
              maleOwnersHistogram={aggBreed.maleOwnersAgeHistogram}
              femaleOwnersHistogram={aggBreed.femaleOwnersAgeHistogram}
            />
          </div>,
        ]}
      </GridHeader>
      {rows}
    </>
  );
}
