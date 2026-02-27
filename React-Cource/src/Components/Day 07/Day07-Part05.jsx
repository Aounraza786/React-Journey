import { useState, useEffect } from "react";
function GetDataUSingAsynAwait() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  let API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setApiData(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setErrors(err);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);
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
export default GetDataUSingAsynAwait;
