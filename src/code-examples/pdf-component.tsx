import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { CardComponent } from "./components";

const mockData = Array.from({ length: 10 }).map((_, i) => ({
  title: `Report ${i + 1}`,
  description: `This is report number ${i + 1}`,
  date: `2025-07-${(19 + i).toString().padStart(2, "0")}`,
}));

export const HtmlToPdf: React.FC = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const generatePdf = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    const margin = 10;
    const colGap = 10;
    const rowGap = 10;
    const cardWidth = 90;
    const cardHeight = 60;

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let x = margin;
    let y = margin;

    for (let i = 0; i < containerRefs.current.length; i++) {
      const ref = containerRefs.current[i];
      if (!ref) {
        console.warn(`Ref for card ${i} is null`);
        continue;
      }

      try {
        const canvas = await html2canvas(ref, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        });

        const imgData = canvas.toDataURL("image/png");

        if (!imgData || imgData.length < 1000) {
          console.error(`Invalid or empty image data for card ${i}`, imgData);
          continue;
        }

        pdf.addImage(imgData, "PNG", x, y, cardWidth, cardHeight);
      } catch (err) {
        console.error(`Error rendering card ${i}:`, err);
        continue;
      }

      // Position for next card
      if (x + cardWidth + colGap + cardWidth <= pageWidth) {
        x += cardWidth + colGap;
      } else {
        x = margin;
        y += cardHeight + rowGap;

        if (y + cardHeight > pageHeight - margin) {
          pdf.addPage();
          x = margin;
          y = margin;
        }
      }
    }

    pdf.save("grid-cards.pdf");
  };

  return (
    <div>
      <button onClick={generatePdf}>Generate PDF</button>

      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          visibility: "visible", // allow rendering
        }}
      >
        {mockData.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (containerRefs.current[idx] = el)}
            style={{
              width: "340px", // ≈ 90mm
              height: "227px", // ≈ 60mm
              padding: "10px",
              boxSizing: "border-box",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          >
            <CardComponent
              title={item.title}
              description={item.description}
              date={item.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
