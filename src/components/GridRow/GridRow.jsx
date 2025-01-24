import DogsCountBar from "./BreedCount/BreedCount";
import BreedAgeHistogram from "./BreedAgeHistogram/BreedAgeHistogram";
import BreedColors from "./BreedColors/BreedColors";
import BreedPic from "./BreedPic/BreedPic";
import BreedOwnerHistogram from "./BreedOwnerHistogram/BreedOwnerHistogram";
import BreedSex from "./BreedSex/BreedSex";
export default function GridRow({
  breed,
  maxDogCountPerBreed,
  beedAgeHistogramDomain,
}) {
  return (
    <div className="grid-row">
      <div>
        <BreedPic name={breed.name}/>
      </div>
      <div>
        <DogsCountBar
          count={breed.props.maleDogs + breed.props.femaleDogs}
          maxCount={maxDogCountPerBreed}
        />
      </div>
      <div>
        <BreedSex
            maleDogsCount={breed.props.maleDogs}
            femaleDogsCount={breed.props.femaleDogs}
          />
      </div>
      <div>
        <BreedAgeHistogram
          ageHistogram={breed.props.ageHistogram}
          histogramDomain={beedAgeHistogramDomain}
        />
      </div>
      <div>
        <BreedColors colorHistogram={breed.props.colorHistogram} />
      </div>
      <div>
        <BreedOwnerHistogram maleOwnersHistogram={breed.props.maleOwnersAgeHistogram} 
        femaleOwnersHistogram={breed.props.femaleOwnersAgeHistogram}
        />
      </div>
    </div>
  );
}
