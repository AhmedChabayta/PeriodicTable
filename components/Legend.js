import React, { useState } from "react";

export default function Legend({ element: { category } }) {
  const positionY = [4, 5, 6, 7, 8, 9, 10];
  const legendCols = positionY.map((number) => {
    return (
      <h1 key={number} style={{ gridRow: 3, gridColumn: number }}>
        {category.current}
      </h1>
    );
  });
  return <>{legendCols}</>;
}
