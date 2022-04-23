async function getLocations(queryString, lat, lon, radius, maxResults) {
  // querying response from API
  let response = await fetch(
    `https://api.tomtom.com/search/2/search/${queryString}.json?lat=${lat}&lon=${lon}&minFuzzyLevel=1&maxFuzzyLevel=2&radius=${radius}&view=IN&limit=${maxResults}&key=jfrauXJmVhngdkTlrE1A91800bRbUQZQ`
  );
  response = await response.json();
  response = await response.results;

  const modifiedArray = await response.map((element) => {
    return {
      name: element.poi.name,
      coordinates: [element.position.lon, element.position.lat],
      distance: element.dist,
    };
  });
  console.log(modifiedArray);
  // console.log(response)
  return modifiedArray;
}

export default getLocations;
