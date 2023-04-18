import React, {useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "./components/Select";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [WeatherData, setWeatherData] = useState(null);

  const obj = [
    {
      id: "1",
      country: "Pakistan",
      cities: ["Peshawar", "Lahore", "Islamabad"],
    },
    {
      id: "2",
      country: "Germany",
      cities: ["Berlin", "Munich", "Hamburg"],
    },
    {
      id: "3",
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane"],
    },
  ];
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e585921683msh61b40603e3229f9p11cee5jsn70729d60ec1b",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const handleCity = (e) => {
    let city = selectedCountry.cities[e.target.value];
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setWeatherData(response);
      })
      .catch((err) => console.error(err));
  };
  const handleChange = (e) => {
    setSelectedCountry(obj.filter((x) => x.id === e.target.value)[0]);
    setWeatherData(null);
  };
  return (
    <>
      <Navbar />
      <main>
        <Container className="pt-4">
          <Row className="gap-5">
            <Col>
              <Select
                select={"Select Country"}
                country={obj.map((x) => ({ value: x.country, id: x.id }))}
                Change={handleChange}
              />
            </Col>
            <Col>
              {selectedCountry && (
                <Select
                  select={"Select City"}
                  country={selectedCountry.cities.map((item, index) => ({
                    id: index,
                    value: item,
                  }))}
                  Change={handleCity}
                />
              )}
            </Col>
          </Row>
          <Row className="gap-5 mt-5">
            <Col>
              <Card
                title={"Temperature"}
                temp={WeatherData && WeatherData.temp + "°C"}
              />
            </Col>
            <Col>
              <Card
                title={"Feels Like"}
                temp={WeatherData && WeatherData.feels_like + "°C"}
              />
            </Col>
            <Col>
              <Card
                title={"Humidity"}
                temp={WeatherData && WeatherData.humidity + "%"}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
