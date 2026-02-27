import { useEffect, useState } from "react";

function GetDataFromAnotherApi() {
  const [apiData, setApiData] = useState(null);
  let API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  function fetchPokemon() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchPokemon();
  }, []);
  console.log(apiData);
  if (!apiData) {
    return <div>Loading.........................</div>;
  }

  return (
    <div
      style={{
        marginTop: "10px",
        background: "grey",
        padding: "50px",
      }}
    >
      <img
        src={apiData.sprites.other.dream_world.front_default}
        alt={apiData.name}
        className="pokemon-image"
      />
      <h1>{apiData.name}</h1>
    </div>
  );
}
export default GetDataFromAnotherApi;
