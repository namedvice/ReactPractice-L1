const fetchCatsInfo = async (numberOfCats: number) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=${numberOfCats}`,
      {
        method: "GET",
        headers: {
          "x-api-key": `${process.env.REACT_CATS_API_KEY}`,
        },
      },
    );
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export default fetchCatsInfo;
