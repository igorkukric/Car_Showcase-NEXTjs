export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "08ebccc3c9msh77f68fd16fad305p199121jsneed6e32d5908",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
