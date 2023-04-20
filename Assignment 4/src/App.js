import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "./components/Select";

function App() {
  const Key = "916513af9f643ea8b91f0dd2ea1ab498";
  const countryList = [
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
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [WeatherData, setWeatherData] = useState(null);
  const handleCity = (e) => {
    setSelectedCity(selectedCountry.cities[e.target.value]);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        selectedCountry.cities[e.target.value]
      }&appid=${Key}`
    )
      .then((response) => response.json())
      .then((response) => {
        setWeatherData(response.main);
      })
      .catch((err) => console.error(err));
  };
  const handleChange = (e) => {
    setSelectedCountry(countryList.filter((x) => x.id === e.target.value)[0]);
    setWeatherData(null);
    setSelectedCity("Select City");
  };
  return (
    <>
      <Navbar />
      <main>
        <Container className="pt-4">
          <Row className="gap-5">
            <Col>
              <Select
                country={countryList.map((x) => ({
                  value: x.country,
                  id: x.id,
                }))}
                Change={handleChange}
                selected={selectedCountry.country}
              />
            </Col>
            <Col>
              {selectedCountry && (
                <Select
                  country={selectedCountry.cities.map((item, index) => ({
                    id: index,
                    value: item,
                  }))}
                  selected={selectedCity}
                  Change={handleCity}
                />
              )}
            </Col>
          </Row>
          <Row className="gap-5 mt-5">
            <Col>
              <Card
                title={"Temperature"}
                temp={WeatherData && parseInt(WeatherData.temp - 273.15) + "°C"}
              />
            </Col>
            <Col>
              <Card
                title={"Feels Like"}
                temp={
                  WeatherData &&
                  parseInt(WeatherData.feels_like - 273.15) + "°C"
                }
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
