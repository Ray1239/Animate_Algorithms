import React, { useEffect } from 'react';
import Konva from 'konva';

// const mazeData = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
//   [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
//   [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
//   [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
// ];  

// const Cell = ({ isWall }) => {
//   const style = {
//     width: 20,
//     height: 20,
//     backgroundColor: isWall ? 'black' : 'white',
//     border: '1px solid red',
//   };
//   return <div style={style} />;
// };

// return (
//   <div style={{ width: 300, height: 300, display: 'flex', flexWrap: 'wrap' }}>
//     {mazeData.map((row, rowIndex) =>
//       row.map((cell, colIndex) => (
//         <Cell key={`${rowIndex}-${colIndex}`} isWall={cell === 1} />
//       ))
//     )}
//   </div>
// );
const Maze = () => {
  useEffect(() => {
    // Set a specific size for the container
    const container = document.getElementById('container');
    const containerWidth = 300; // Set your desired width
    const containerHeight = 300; // Set your desired height
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;

    // Create Konva stage
    var stage = new Konva.Stage({
      container: 'container',
      width: containerWidth,
      height: containerHeight,
    });

    // Create Konva layer
    var layer = new Konva.Layer();

    // Create Konva rectangles and add them to the layer
    var rect1 = new Konva.Rect({
      x: 20,
      y: 20,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4,
    });
    layer.add(rect1);

    var rect2 = new Konva.Rect({
      x: 150,
      y: 40,
      width: 100,
      height: 50,
      fill: 'red',
      shadowBlur: 10,
      cornerRadius: 10,
    });
    layer.add(rect2);

    var rect3 = new Konva.Rect({
      x: 50,
      y: 120,
      width: 100,
      height: 100,
      fill: 'blue',
      cornerRadius: [0, 10, 20, 30],
    });
    layer.add(rect3);

    // Add the layer to the stage
    stage.add(layer);
  }, []); // Empty dependency array ensures that this effect runs once, similar to componentDidMount

  return <div id='container'></div>;
};

export default Maze;