import React, { useEffect, useState } from "react";

const Joke = ({ selectedType }) => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    if (!selectedType) return;
    setLoading(true);
    try {
      const res = await fetch(`https://official-joke-api.appspot.com/jokes/${selectedType}/random`);
      const data = await res.json();
      setJoke(data[0]);
    } catch (err) {
      console.error("Error fetching joke", err);
      setJoke(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, [selectedType]);

  return (
    <div>
      {selectedType && loading && <p>Loading...</p>}
      {joke && !loading && (
        <div>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
          <button onClick={fetchJoke}>Get another joke</button>
        </div>
      )}
    </div>
  );
};

export default Joke;
