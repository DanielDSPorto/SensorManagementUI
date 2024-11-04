export const fetchDummyData = () =>
  new Promise((resolve, reject) => {
    const sensorData = [
      {
        equipmentId: "EQ-12495",
        timestamp: "2023-02-15T01:30:00.000-05:00",
        value: 78.42,
      },
      {
        equipmentId: "EQ-12496",
        timestamp: "2023-02-15T02:30:00.000-05:00",
        value: 65.31,
      },
      {
        equipmentId: "EQ-12497",
        timestamp: "2023-02-15T03:30:00.000-05:00",
        value: 82.15,
      },
      {
        equipmentId: "EQ-12498",
        timestamp: "2023-02-15T04:30:00.000-05:00",
        value: 74.56,
      },
      {
        equipmentId: "EQ-12499",
        timestamp: "2023-02-15T05:30:00.000-05:00",
        value: 89.47,
      },
      {
        equipmentId: "EQ-12500",
        timestamp: "2023-02-15T06:30:00.000-05:00",
        value: 55.23,
      },
      {
        equipmentId: "EQ-12501",
        timestamp: "2023-02-15T07:30:00.000-05:00",
        value: 92.34,
      },
      {
        equipmentId: "EQ-12502",
        timestamp: "2023-02-15T08:30:00.000-05:00",
        value: 68.78,
      },
      {
        equipmentId: "EQ-12503",
        timestamp: "2023-02-15T09:30:00.000-05:00",
        value: 73.21,
      },
      {
        equipmentId: "EQ-12504",
        timestamp: "2023-02-15T10:30:00.000-05:00",
        value: 81.45,
      },
    ];
    setTimeout(() => resolve(sensorData), 3000);
  });
