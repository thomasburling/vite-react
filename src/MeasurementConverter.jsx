import React, { useState } from 'react';
import { Input, Button, Card, CardContent } from "@/components/ui";

const MeasurementConverter = () => {
  const [inches, setInches] = useState("");
  const [convertedValues, setConvertedValues] = useState(null);

  const convertMeasurements = () => {
    const inchesValue = parseFloat(inches);
    if (isNaN(inchesValue)) {
      setConvertedValues("Please enter a valid number.");
      return;
    }

    const centimeters = (inchesValue * 2.54).toFixed(2);
    const feet = (inchesValue / 12).toFixed(2);

    setConvertedValues({ centimeters, feet });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Measurement Converter</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Enter measurement in inches:</label>
            <Input
              type="text"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              placeholder="e.g., 12"
              className="w-full"
            />
          </div>
          <Button onClick={convertMeasurements} className="w-full">Convert</Button>
          {convertedValues && (
            <div className="mt-4 bg-white p-4 rounded shadow">
              {typeof convertedValues === "string" ? (
                <p className="text-red-500">{convertedValues}</p>
              ) : (
                <div>
                  <p><strong>Centimeters:</strong> {convertedValues.centimeters} cm</p>
                  <p><strong>Feet:</strong> {convertedValues.feet} ft</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MeasurementConverter;
