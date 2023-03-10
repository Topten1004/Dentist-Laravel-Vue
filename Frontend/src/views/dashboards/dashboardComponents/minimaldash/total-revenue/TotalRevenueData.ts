export const RevenueChart = {
  series: [
    {
      name: "2015",
      data: [
        800000, 1200000, 1400000, 1300000, 1200000, 1400000, 1300000, 1300000,
        1200000,
      ],
    },
    {
      name: "2020",
      data: [
        200000, 400000, 500000, 300000, 400000, 500000, 300000, 300000, 400000,
      ],
    },
    {
      name: "2025",
      data: [
        100000, 200000, 400000, 600000, 200000, 400000, 600000, 600000, 200000,
      ],
    },
  ],
  chartOptions: {
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, .3)",
      strokeDashArray: 3,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        endingShape: "flat",
      },
    },
    colors: ["#1e88e5", "#26c6da", "#fc4b6c"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
      ],
      labels: {
        style: {
          cssClass: "text-muted fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          cssClass: "text-muted fill-color",
        },
      },
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
