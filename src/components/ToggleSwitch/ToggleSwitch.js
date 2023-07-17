import React, { useContext } from 'react';
import './ToggleSwitch.css';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

const ToggleSwitch = () => {
  const { currentTempUnit, handleToggleChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <>
      <input
        id={`temp-toggle`}
        className="button__toggle"
        type="checkbox"
        onChange={handleToggleChange}
      />
      <label htmlFor={`temp-toggle`} className="button__label">
        <p
          className={`button__temp-F ${
            currentTempUnit === 'F' && 'button__temp-active'
          }`}
        >
          F
        </p>
        <p
          className={`button__temp-C ${
            currentTempUnit === 'C' && 'button__temp-active'
          }`}
        >
          C
        </p>
        <span
          className={
            currentTempUnit === 'F'
              ? 'button__slide button__slide-F'
              : 'button__slide button__slide-C'
          }
        />
      </label>
    </>
  );
};

export default ToggleSwitch;
