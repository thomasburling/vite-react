import React, { useState } from 'react';

const MeasurementConverter: React.FC = () => {
  const [inches, setInches] = useState('');
  const [convertedValues, setConvertedValues] = useState<{ centimeters?: string; feet?: string } | null>(null);

  const convertMeasurements = () => {
    const inchesValue = parseFloat(inches);
    if (isNaN(inchesValue)) {
      setConvertedValues(null);
      return;
    }
    const centimeters = (inchesValue * 2.54).toFixed(2);
    const feet = (inchesValue / 12).toFixed(2);
    setConvertedValues({ centimeters, feet });
  };

  return (
    <div>
      <h2>Measurement Converter</h2>
      <input type="text" value={inches} onChange={(e) => setInches(e.target.value)} placeholder="Enter inches" />
      <button onClick={convertMeasurements}>Convert</button>
      {convertedValues && (
        <div>
          <p>Centimeters: {convertedValues.centimeters} cm</p>
          <p>Feet: {convertedValues.feet} ft</p>
        </div>
      )}
    </div>
  );
};

export default MeasurementConverter;