import React from "react";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const CardComponent: React.FC<Props> = ({ title, description, date }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
    </div>
  );
};
