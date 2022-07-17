import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useTheme } from "next-themes";

const ChartContainer = ({ price, datetime }) => {
  const { theme } = useTheme();

  return (
    <div className="font-raleway container mx-auto">
      <Line
        data={{
          labels: datetime,
          datasets: [
            {
              label: "Price Value",
              data: price,
              backgroundColor: ["#18978F", "#11756F", "#0C635D"],
              borderColor: `${theme == "dark" ? "#fff" : "#2be9dc"}`,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#3773f5",
              pointHoverBorderColor: "#3773f5",
              pointHoverBorderWidth: 2,
            },
          ],
        }}
        height={600}
        width={700}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          aspectRatio: 1,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: `${theme == "dark" ? "#fff" : "#666"}`,
              },
              grid: {
                borderColor: `${theme == "dark" ? "#666666" : "rgba(0, 0, 0, 0.1)"}`,
                drawBorder: false,
              },
              
            },
            x: {
              grid: {
                borderColor: `${theme == "dark" ? "#666666" : "rgba(0, 0, 0, 0.1)"}`,
                drawBorder: false,
              },
              ticks: {},
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  family: "Raleway",
                },
              },
              title: {
                color: "#777",
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartContainer;
