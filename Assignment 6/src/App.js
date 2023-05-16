import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "./components/Select";
import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";


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

  const { isLoading, error, data: WeatherData } = useQuery(
    ["weather", selectedCountry, selectedCity],
    async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${Key}`
      );
      const data = await response.json();
      return data.main;
    }
  );

  const handleCity = (e) => {
    setSelectedCity(selectedCountry.cities[e.target.value]);
  };

  const handleChange = (e) => {
    setSelectedCountry(countryList.filter((x) => x.id === e.target.value)[0]);
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
          {isLoading ? (
            <div className="d-flex justify-content-center mt-5">
              <BeatLoader color={"#36D7B7"} size={50} />
            </div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            <Row className="gap-5 mt-5">
              <Col>
                <Card
                  title={"Temperature"}
                  temp={
                    WeatherData &&
                    parseInt(WeatherData.temp - 273.15) + "°C"
                  }
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
          )}
        </Container>
      </main>
    </>
  );
}

export default App;
