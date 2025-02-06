"use client";
import React, { useState, useEffect } from "react";
import * as FileSaver from "file-saver"; // For saving files

const LABEL_DICT = {
  '0': { color: '#FF00FF', description: 'Calculus-Plaque' },
  '1': { color: '#ff0000', description: 'Caries' },
  '2': { color: '#0000ff', description: 'Lesion' },
  '3': { color: '#00ff00', description: 'Gingivitis' },
  '4': { color: '#000000', description: 'Hypodontia' },
  '5': { color: '#00FFFF', description: 'Tooth Discoloration' },
  '6': { color: '#DAA520', description: 'Leukoplakia' },
};

const ReportScreen = () => {
  const [response, setResponse] = useState(null);
  const [selectedColors, setSelectedColors] = useState(Object.keys(LABEL_DICT));
  const [currentImage, setCurrentImage] = useState(0);
  const data = [
    "/oral-scan/full-width1.png",
    "/oral-scan/full-width2.png",
    "/oral-scan/full-width3.png",
  ];

  useEffect(() => {
    // Fetch the response data from the API
    const fetchData = async () => {
      try {
        const res = await fetch("/data/response.json");
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to download the PDF
  const sharePDF = async () => {
    try {
      const pdfUrl =
        "https://firebasestorage.googleapis.com/v0/b/msi-health.appspot.com/o/disease_report.pdf?alt=media&token=18b54c19-c890-44bc-a62f-7250d2ce8a91";
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      FileSaver.saveAs(blob, "report.pdf");
    } catch (error) {
      console.error("Error sharing PDF:", error);
    }
  };

  // Generate polygon points for the SVG
  const getPoints = (poly, scaleX, scaleY) => {
    console.log("Response", response);
    console.log("Poly", poly);
    if (Array.isArray(poly) && poly.length % 2 === 0) {
      return poly
        .map((value, index) =>
          index % 2 === 0
            ? `${value * scaleX},`
            : `${value * scaleY} `
        )
        .join('');
    }
    return '';
  };

  // Mock function to calculate areas for the bar chart
  const calculateAreasForClasses = (segmentationResults) => {
    const areas = {};
    if (segmentationResults && Array.isArray(segmentationResults)) {
      segmentationResults.forEach((segmentation) => {
        const { label, area } = segmentation;
        areas[label] = (areas[label] || 0) + area;
      });
    }
    return areas;
  };

  // Render bar chart
  const renderBarChart = () => {
    if (!response || !response.segmentation_results) return null; // Wait for response data

    const diseaseAreas = calculateAreasForClasses(response.segmentation_results);
    const totalArea = Object.values(diseaseAreas).reduce(
      (sum, area) => sum + area,
      0
    );
    if (totalArea === 0) return null;

    return (
      <div className="mt-8">
        {Object.keys(diseaseAreas).map((key) => {
          const barWidth = (diseaseAreas[key] / totalArea) * 100 + '%';
          return (
            <div className="flex justify-between py-2" key={key}>
              <span className="text-lg font-bold">
                {LABEL_DICT[key]?.description || key}
              </span>
              <div
                className="h-4 rounded-full"
                style={{ width: barWidth, backgroundColor: LABEL_DICT[key]?.color || '#ccc' }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const toggleColorSelection = (key) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(key)
        ? prevSelectedColors.filter((colorKey) => colorKey !== key)
        : [...prevSelectedColors, key]
    );
  };

  if (!response) return <div>Loading...</div>; // Show loading until data is fetched

  return (
    <div className="p-6 space-y-6">
      {/* Carousel */}
      <div className="flex overflow-x-auto w-full space-x-4">
        {data.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={`cursor-pointer w-96 h-96 object-cover rounded-lg shadow-md transition-transform duration-300 transform ${currentImage === index ? "scale-105 border-4 border-blue-500" : ""}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>

      {/* Disease Visualization */}
      <div className="flex justify-center">
        <svg width="375" height="375">
          {response.listOfAllImageSegmentations[currentImage]?.map(
            (segmentation, index) => (
              <polygon
                key={index}
                points={getPoints(segmentation, 375, 375)}
                fill={LABEL_DICT[segmentation.label]?.color || "transparent"}
                fillOpacity="0.5"
              />
            )
          )}
        </svg>
      </div>

      {/* Bar Chart */}
      {renderBarChart()}

      {/* Toggle Buttons for Colors */}
      <div className="flex flex-wrap justify-center space-x-2">
        {Object.keys(LABEL_DICT).map((key) => (
          <button
            key={key}
            className={`w-40 h-12 rounded-lg text-white font-semibold ${selectedColors.includes(key) ? "border-2 border-white" : ""
              }`}
            style={{ backgroundColor: LABEL_DICT[key]?.color }}
            onClick={() => toggleColorSelection(key)}
          >
            {LABEL_DICT[key]?.description}
          </button>
        ))}
      </div>

      {/* Detection Summary and Recommendation Boxes */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700">Detection Summary</h3>
          <p>Dummy data: Total number of diseases detected: 3</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700">Recommendation</h3>
          <p>Dummy data: Further investigation and treatment are recommended.</p>
        </div>
      </div>

      {/* Share PDF */}
      <button
        onClick={sharePDF}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Download Report
      </button>
    </div>
  );
};

export default ReportScreen;
