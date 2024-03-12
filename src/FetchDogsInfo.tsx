const fetchDogsInfo = async (numberOfDogs: number) => {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/breeds?limit=${numberOfDogs}`,
      {
        method: "GET",
        headers: {
          "x-api-key": `${process.env.REACT_DOGS_API_KEY}`,
        },
      },
    );
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export default fetchDogsInfo;
