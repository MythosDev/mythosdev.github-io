import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  zoomPlugin
);

const StatisticalPage = () => {
  const [fileData, setFileData] = useState([]);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const [availableTags, setAvailableTags] = useState([]);


  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      parseCSV(file);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      parseCSV(file);
    }
  };

  const parseCSV = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        const [headerLine, ...lines] = text.trim().split('\n');
    //   const headers = headerLine.split(',');
        const headers = headerLine.split(',').map(h => h.trim());


        const data = lines.map(line => {
        const values = line.split(',');
        const entry = {};
        headers.forEach((h, i) => {
            entry[h.trim()] = values[i]?.trim() || '';
        });
        return entry;
        });

        setFileData(data || []);

        const allValues = data.flatMap(entry => Object.values(entry));
        const uniqueTags = [...new Set(allValues.filter(v => v !== ''))]; // Remove empty strings
        setAvailableTags(uniqueTags);

        // Now compute availableTags
        // if (data.length > 0) {
        //     const firstRowValues = Object.values(data[0]);
        //     const tags = headers.filter(h => !firstRowValues.includes(h));
        //     setAvailableTags(tags);
        // } else {
        //     setAvailableTags([]); // No data
        //     }
    };
    reader.readAsText(file);
    //   setFileData(data || []);
    // };
    // reader.readAsText(file);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

    const getFilteredData = () => {
        console.log('Tags for filtering:', tags); // 🛠️ show current tags
        if (tags.length === 0) {
        console.log('No tags selected, returning all file data:', fileData.length, 'entries');
        return fileData;
        }

        const filtered = fileData.filter(entry => {
        return tags.every(tag => {
            const isNegation = tag.startsWith('-');
            const cleanTag = isNegation ? tag.slice(1) : tag;

            let field = null;
            let value = cleanTag;

            if (cleanTag.includes(':')) {
            const parts = cleanTag.split(':');
            field = parts[0].trim();
            value = parts[1].trim();
            }

            const matches = field
            ? ((entry[field] || '').toString().toLowerCase() === value.toLowerCase())
            : Object.values(entry).some(val => (val || '').toString().toLowerCase() === value.toLowerCase());

            return isNegation ? !matches : matches;
        });
        });

        console.log('Filtered data:', filtered.length, 'entries after filtering');
        return filtered;
    };

    const filteredData = getFilteredData();

    const generateChartData = () => {
        if (filteredData.length === 0) {
        console.warn('⚠️ No filtered data to display!');
        return {
            labels: [],
            datasets: [],
        };
        }

        let yesCount = 0;
        let noCount = 0;

        filteredData.forEach(entry => {
        const answer = (entry['Question Answer'] || '').trim().toUpperCase();
        if (answer === 'Y') {
            yesCount++;
        } else if (answer === 'N') {
            noCount++;
        } else {
            console.warn('⚠️ Entry missing valid "Question Answer":', entry);
        }
        });

        console.log(`Counted: ${yesCount} Yes, ${noCount} No`);

        return {
        labels: ['Yes', 'No'],
        datasets: [
            {
            data: [yesCount, noCount],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            }
        ]
        };
    };
  

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "900px",
      margin: "0 auto",
    },
    dropArea: {
      border: '2px dashed #007bff',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      color: '#007bff',
      backgroundColor: isDragging ? '#f0f8ff' : '#fff',
      transition: 'background-color 0.3s ease',
      marginBottom: "20px",
    },
    tagSystem: {
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "20px",
    },
    tagsContainer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "8px",
    },
    tag: {
      backgroundColor: "#007BFF",
      color: "#fff",
      borderRadius: "3px",
      padding: "5px 8px",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    closeButton: {
      cursor: "pointer",
      marginLeft: "5px",
      fontWeight: "bold",
    },
    input: {
      border: "none",
      outline: "none",
      padding: "5px",
      fontSize: "14px",
      flex: "1",
      minWidth: "100px",
    },
    chartControls: {
      marginBottom: "20px",
      display: "flex",
      gap: "10px",
    },
  };

  const chartData = generateChartData();

  return (
    <div style={styles.container}>
      <h2 className='font-bold text-[64px] font-serif text-center m-4'>Statistica</h2>

      {/* Drag & Drop File Upload */}
      <div
        style={styles.dropArea}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p>{fileName || 'Drag & Drop a file here, or click to upload'}</p>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Choose a file
        </label>
      </div>

      {/* Tag Filtering System */}
      <div style={styles.tagSystem}>
        <div style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <div key={index} style={styles.tag}>
              {tag}
              <span
                style={styles.closeButton}
                onClick={() => removeTag(index)}
              >
                &times;
              </span>
            </div>
          ))}
          <input
            type="text"
            placeholder="Add a tag..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
        </div>
      </div>

      {inputValue && (
        <div style={{ marginTop: "8px", backgroundColor: "#f8f8f8", border: "1px solid #ccc", borderRadius: "4px", maxHeight: "150px", overflowY: "auto", padding: "5px" }}>
            {availableTags
            .filter(tag => tag.toLowerCase().includes(inputValue.toLowerCase()) && !tags.includes(tag))
            .map((tag, index) => (
                <div
                key={index}
                onClick={() => {
                    setTags([...tags, tag]);
                    setInputValue('');
                }}
                style={{ padding: "5px", cursor: "pointer", borderBottom: "1px solid #ddd" }}
                >
                {tag}
                </div>
            ))}
        </div>
        )}

      {/* Chart Controls */}
      <div style={styles.chartControls}>
        <label>Chart Type: </label>
        <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="pie">Pie</option>
          <option value="doughnut">Doughnut</option>
        </select>
      </div>

      {/* Chart Display */}
      <div style={{ minWidth: "600px", margin: "20px auto" }}>
        {chartData.datasets.length === 0 ? (
          <p>No data to display. Upload a file and add tags if needed.</p>
        ) : (
          <>
            {chartType === "line" && <Line data={chartData} />}
            {chartType === "bar" && <Bar data={chartData} />}
            {chartType === "pie" && <Pie data={chartData} />}
            {chartType === "doughnut" && <Doughnut data={chartData} />}
          </>
        )}
      </div>
    </div>
  );
};

export default StatisticalPage;
