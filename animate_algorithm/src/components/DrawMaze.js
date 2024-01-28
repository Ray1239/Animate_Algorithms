import './DrawMaze.css';
import React, { useState, useRef, useEffect } from 'react';

const DrawMaze = () => {
  const canvasRef = useRef(null);
  const [lineType, setLineType] = useState('horizontal');
  const [lineWidth, setLineWidth] = useState(2);
  const [lineHeight, setLineHeight] = useState(50);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawLine = (event) => {
      const x = event.clientX - canvas.getBoundingClientRect().left;
      const y = event.clientY - canvas.getBoundingClientRect().top;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = lineWidth;

      if (lineType === 'horizontal') {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + lineHeight, y);
        ctx.stroke();
      } else if (lineType === 'vertical') {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + lineHeight);
        ctx.stroke();
      }
    };

    canvas.addEventListener('click', drawLine);

    return () => {
      canvas.removeEventListener('click', drawLine);
    };
  }, [lineType, lineWidth, lineHeight]);

  return (
    <div>
      <label>
        Select line type:
        <select value={lineType} onChange={(e) => setLineType(e.target.value)}>
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>
      </label>

      <br />

      <label>
        Line Width:
        <input type="number" value={lineWidth} onChange={(e) => setLineWidth(e.target.valueAsNumber)} min="1" />
      </label>

      <br />

      <label>
        Line Height:
        <input type="number" value={lineHeight} onChange={(e) => setLineHeight(e.target.valueAsNumber)} min="1" />
      </label>
      <br />

      <canvas ref={canvasRef} width="600" height="360" id='drawCanvas'></canvas>
    </div>
  );
};

export default DrawMaze;
