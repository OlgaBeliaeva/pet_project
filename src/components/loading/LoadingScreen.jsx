import React from 'react';
import { Bars } from 'react-loader-spinner'; // Импортируем анимацию Bars
import './Loading.css'; // Ваши стили

export default function LoadingScreen() {
  return (
    <div className="loadBox">
      <Bars
        height="80"
        width="80"
        color="#e0e0e0" // Цвет индикатора
        ariaLabel="loading-indicator"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
}