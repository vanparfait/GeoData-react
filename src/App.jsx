import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const FetchApi = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/europe"
      );
      console.log(response);
      const datas = await response.json();
      console.log(datas);

      datas.sort((a, b) => {
        if (a.name.common < b.name.common) return -1;
        else if (a.name.common > b.name.common) return -1;
        else return 0;
      });

      setCountries(datas);
    };

    FetchApi();
  }, []);

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe countries Data</h1>
        {countries &&
          countries.map((country) => (
            <h1 key={country.ccn3}>{country.cca2}</h1>
          ))}
        <p className="text-gray-100 text-xl nb-8">
          Click on a card to reveal a country's information
        </p>
      </div>
    </div>
  );
}

export default App;
