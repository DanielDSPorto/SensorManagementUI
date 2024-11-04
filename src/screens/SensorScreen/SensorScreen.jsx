import { useState, useRef } from "react";
import { Chart } from "react-google-charts";
import EquipmentSearchBar from "./SearchBar";
import { apiAdress } from "../../constants";
import { toast } from "react-toastify";

const SensorScreen = () => {
  const [sensorReadings, setSensorReadings] = useState([]);
  const equipmentIdRef = useRef("");

  async function fetchSensorReadingsByEqId(eqId) {
    try {
      console.log(apiAdress);
      const response = await fetch(`${apiAdress}/readings/${eqId}`);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const readings = await response.json();
      const data = [];
      data.push(["timestamp", "value"]);
      data.push(
        ...readings.map((row) => [
          new Date(row["timestamp"]).toLocaleString(),
          row["value"],
        ])
      );
      equipmentIdRef.current = readings[0]?.["equipment_id"];
      setSensorReadings(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const chartOptions = {
    chart: {
      title: `Leituras do equipamento ${equipmentIdRef.current}`,
    },
  };
  return (
    <>
      <EquipmentSearchBar fetchData={fetchSensorReadingsByEqId} />
      {!!sensorReadings.length && (
        <Chart
          chartType="Line"
          width="100%"
          height="400px"
          data={sensorReadings}
          options={chartOptions}
          style={{ padding: "0 1rem" }}
        />
      )}
    </>
  );
};

export default SensorScreen;
