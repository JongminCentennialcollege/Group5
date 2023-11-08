import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Home.css'; // Home 컴포넌트 스타일 시트
const containerStyle = {
  width: '100%',
  height: '400px'
};

// 스카보로 타운 센터의 기본 좌표
const defaultCenter = {
  lat: 43.7764,
  lng: -79.2318
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
            lng: position.coords.longitude
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
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <LoadScript
        googleMapsApiKey="AIzaSyC10SeXDmpOoFDnuRCv-kX2c56EeaBNd0g" // 실제 API 키로 교체해 주세요.
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation}
          zoom={10}
        >
          {foodBanks.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </LoadScript>
      <main>
        {/* 'The way to food!' 섹션 */}
        <section className="way-to-food">
          <h1>The way to food!</h1>
          <button>Find the nearest foodbank!</button>
        </section>

        {/* 'Top Food Providers' 섹션 */}
        <section className="top-food-providers">
          <h2>Top Food Providers</h2>
          <div className="providers-list">
            <div className="provider">
              <span className="provider-logo">{/* 로고 이미지 */}</span>
              <div className="provider-info">
                <h3>Daily Bread</h3>
                <p>Provided over $400 in three years. Saved the world!</p>
              </div>
            </div>
            <div className="provider">
              <span className="provider-logo">{/* 로고 이미지 */}</span>
              <div className="provider-info">
                <h3>Action Against Hunger</h3>
                <p>Provided over $100 in three years. Saved the world!</p>
              </div>
            </div>
            <div className="provider">
              <span className="provider-logo">{/* 로고 이미지 */}</span>
              <div className="provider-info">
                <h3>Food Donor</h3>
                <p>Provided over $999 in three years. Saved the world!</p>
              </div>
            </div>
          </div>
        </section>

        {/* 이미 만들어진 Footer 컴포넌트를 여기에 넣으세요. */}
      </main>
    </div>
  );
};

export default React.memo(Home);

