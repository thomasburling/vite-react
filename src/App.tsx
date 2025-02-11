import MeasurementConverter from './MeasurementConverter'; 

function App() {
  return (
    <div className="app-container">
      <h1>Measurement Converter</h1>
      <p>Enter a measurement in inches and click "Convert" to see the result in centimeters and feet.</p>
      <MeasurementConverter />
    </div>
  );
}

export default App;