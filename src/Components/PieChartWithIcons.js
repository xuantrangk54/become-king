import React, { useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import "./PieChartWithIcons.scss";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Button } from "react-bootstrap";

Chart.register(ArcElement, Tooltip, Legend);

const PieChartWithIcons = () => {

  const [rotation, setRotation] = useState(0);
  const isSpinning = useRef(false);
  const data = {
    labels: ["Apple", "Banana", "Cherry"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#ff6384", "#ffcd56", "#36a2eb"],
      },
    ],
  };

  const icons = {
    Apple: "🍏",
    Banana: "🍌",
    Cherry: "🍒",
  };

  const startSpinning = () => {
    if (isSpinning.current) return;
    isSpinning.current = true;
    let angle = 0;         // Góc quay hiện tại
    let speed = 10;        // Tốc độ ban đầu (độ mỗi frame)
    const friction = 0.98; // Hệ số giảm tốc (0.95 nghĩa là giảm 5% mỗi frame)
    const spin = () => {
      if (speed < 0.1) {
        isSpinning.current = false;
        determineWinner(angle % 360);
        return;
      }
      angle += speed;
      speed *= friction;
      setRotation(angle); 
      requestAnimationFrame(spin);
    };
    spin();
  };

  const determineWinner = (angle) => {
    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
    const angles = data.datasets[0].data.map((value) => (value / total) * 360);
    let currentAngle = 0;
    for (let i = 0; i < angles.length; i++) {
      currentAngle += angles[i];
      if (angle >= currentAngle - angles[i] && angle < currentAngle) {
        setWinner(data.labels[i]); 
        break;
      }
    }
  };

  const setWinner = (data) => {
    console.log (`winner is: ${data}`)
  };
  
  const customLegend = (chart) => {
    const { labels } = chart.legend;
    labels.forEach((label) => {
      const text = label.text;
      label.text = `${icons[text]} ${text}`;
    });
  };

  return (
    <>
      <div className={["pieDiv", "container"]}>
        <div className={["row"]}>
          <div className="col">
            <div className="pie-wrapper" style={{ transform: `rotate(${rotation}deg)` }}>
              <Pie data={data} options={{ plugins: { legend: { display: false } } }} />
            </div>
          </div>
          <div className="col">
            <Button onClick={startSpinning} className="btn-primary">Quay</Button>
          </div>
        </div>
        <style>
          {`
          .chart-container {
            text-align: center;
          }
          .pie-wrapper {
            display: inline-block;
            transition: transform 0.1s linear;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default PieChartWithIcons;
