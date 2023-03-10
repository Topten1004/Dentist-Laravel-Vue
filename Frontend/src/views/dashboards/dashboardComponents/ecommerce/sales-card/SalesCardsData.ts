export const SalesChartC = {
  series: [
    {
      name: "Sales C",
      data: [2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2],
    },
  ],
  chartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    colors: ["#7460ee"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 0,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export const SalesChartB = {
  series: [
    {
      name: "Sales B",
      data: [0, 2, 8, 6, 8, 5, 6, 4, 8, 6, 6, 2],
    },
  ],
  chartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    colors: ["#009efb"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 0,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export const SalesChartA = {
  series: [
    {
      name: "Sales A",
      data: [2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2],
    },
  ],
  chartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    colors: ["#26c6da"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 0,
    },
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  },
};
