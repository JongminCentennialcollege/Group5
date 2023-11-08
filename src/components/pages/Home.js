import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Home.css"; // Home 컴포넌트 스타일 시트
const containerStyle = {
  width: "791.503px",
  height: "380px",
  padding: "50px",
  borderRadius: "39px",
  backgroundColor: "lightgray 50% / cover no-repeat",
  boxShadow: " 0px 4px 16px 0px rgba(0, 0, 0, 0.25)",
};

// 스카보로 타운 센터의 기본 좌표
const defaultCenter = {
  lat: 43.7764,
  lng: -79.2318,
};

// 예시 Food Bank 위치들
const foodBanks = [
  { lat: 43.7732, lng: -79.2582 },
  { lat: 43.7813, lng: -79.3036 },
  // 다른 Food Bank 위치들을 여기에 추가할 수 있습니다.
];

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // 사용자의 위치를 가져오지 못했을 때 기본값을 사용합니다.
          setCurrentLocation(defaultCenter);
        }
      );
    } else {
      // Geolocation이 지원되지 않을 때 기본값을 사용합니다.
      setCurrentLocation(defaultCenter);
    }
  }, []);

  return (
    <div className="home">
      <div className="home__banner">
        <h1>The way to food!</h1>
      </div>

      <div className="home__foodbanks"></div>

      <div className="home__providers"></div>

      <div className="home__maps container">
        <div className="maps-map">
          <LoadScript
            googleMapsApiKey="AIzaSyC10SeXDmpOoFDnuRCv-kX2c56EeaBNd0g" // 실제 API 키로 교체해 주세요.
          >
            <GoogleMap
              ClassName="maps-map"
              mapContainerStyle={containerStyle}
              center={currentLocation}
              zoom={10}
            >
              {foodBanks.map((location, index) => (
                <Marker key={index} position={location} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="maps-locations">
          <h1>Foodbanks near you</h1>

          <div className="locations-location">
            <div className="location-dis">
              <p>0.5KM</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
              >
                <path
                  d="M4.96032 3.18303C5.1797 3.18303 5.35753 3.0052 5.35753 2.78582C5.35753 2.56645 5.1797 2.38861 4.96032 2.38861C4.74095 2.38861 4.56311 2.56645 4.56311 2.78582C4.56311 3.0052 4.74095 3.18303 4.96032 3.18303Z"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.76868 8.74411L4.96031 6.36084L6.15195 8.74411"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.57709 3.97754L4.96036 4.77196L7.34363 3.97754"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.96033 4.77191V6.36076"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="locations-des">
              <div className="location-dis">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <rect
                    x="0.866333"
                    y="0.332886"
                    width="43.0486"
                    height="43.8458"
                    rx="5.83015"
                    fill="#C4F277"
                  />
                  <path
                    d="M14.7508 30.2942V15.0146M14.7508 15.0146H30.0304M14.7508 15.0146L30.0304 30.2942"
                    stroke="black"
                    stroke-width="1.73329"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h1>Chester Le Bolevard</h1>
                <p>142 Chester Le Blvd, Scarborough, ON M1W 2M9</p>
              </div>
            </div>
          </div>

          <div className="locations-location">
            <div className="location-dis">
              <p>0.5KM</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
              >
                <path
                  d="M4.96032 3.18303C5.1797 3.18303 5.35753 3.0052 5.35753 2.78582C5.35753 2.56645 5.1797 2.38861 4.96032 2.38861C4.74095 2.38861 4.56311 2.56645 4.56311 2.78582C4.56311 3.0052 4.74095 3.18303 4.96032 3.18303Z"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.76868 8.74411L4.96031 6.36084L6.15195 8.74411"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.57709 3.97754L4.96036 4.77196L7.34363 3.97754"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.96033 4.77191V6.36076"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="locations-des">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect
                    x="0.866333"
                    y="-0.00268555"
                    width="43.0486"
                    height="43.8458"
                    rx="5.83015"
                    fill="#FDD65B"
                  />
                  <path
                    d="M14.7508 29.9586V14.679M14.7508 14.679H30.0304M14.7508 14.679L30.0304 29.9586"
                    stroke="black"
                    stroke-width="1.73329"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h1>Chester Le Bolevard</h1>
                <p>142 Chester Le Blvd, Scarborough, ON M1W 2M9</p>
              </div>
            </div>
          </div>

          <div className="locations-location">
            <div className="location-dis">
              <p>0.5KM</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
              >
                <path
                  d="M4.96032 3.18303C5.1797 3.18303 5.35753 3.0052 5.35753 2.78582C5.35753 2.56645 5.1797 2.38861 4.96032 2.38861C4.74095 2.38861 4.56311 2.56645 4.56311 2.78582C4.56311 3.0052 4.74095 3.18303 4.96032 3.18303Z"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.76868 8.74411L4.96031 6.36084L6.15195 8.74411"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.57709 3.97754L4.96036 4.77196L7.34363 3.97754"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.96033 4.77191V6.36076"
                  stroke="black"
                  stroke-width="0.794424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="locations-des">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                >
                  <rect
                    x="0.866333"
                    y="0.661743"
                    width="43.0486"
                    height="43.8458"
                    rx="5.83015"
                    fill="#F36541"
                  />
                  <path
                    d="M14.7508 30.623V15.3434M14.7508 15.3434H30.0304M14.7508 15.3434L30.0304 30.623"
                    stroke="white"
                    stroke-width="1.73329"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h1>Chester Le Bolevard</h1>
                <p>142 Chester Le Blvd, Scarborough, ON M1W 2M9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);