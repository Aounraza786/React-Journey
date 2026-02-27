import { useState, useEffect } from "react";
function LoadingAndErrorState() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  let API = "https://pokeapi.co/api/v2/pokemons/pikachu"; // wrong api(we add s fro ourside after "pokemon")

  function fetchPokemon() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchPokemon();
  }, []);
  console.log(apiData);
  if (loading) {
    return <div>Loading.........................</div>;
  }
  if (errors) {
    return <div>{errors.message}</div>;
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
      <p>Height: {apiData.height}</p>
      <p>Weight: {apiData.weight}</p>
    </div>
  );
}
export default LoadingAndErrorState;
