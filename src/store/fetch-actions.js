import { sliceActions } from "./country-slice";

// INSTEAD OF POLLUTING THE App.js OR ANY OTHER COMPONENT, I DECIDED TO TAKE THE FETCHING FUNCTION AND LOGIC TO A SEPARATE FILE (HERE)

export const fetchCountryData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      if (!response.ok) {
        throw new Error("Could not fetch country data!");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const countryData = await fetchData();
      console.log(countryData);
      dispatch(
        sliceActions.loadData({
          data: countryData,
        })
      );
    } catch (error) {
      alert("Data could not be loaded");
    }
  };
};
