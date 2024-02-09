import './DrawMaze.css';
import React, { useState, useRef, useEffect} from 'react';
import p5 from 'p5';

const DrawMaze = ({sendDataToApp, contStyle}) => {
  const clearBtnRef = useRef(null);
  const canvasCreatedRef = useRef(false);
  const myp5Ref = useRef(null);
  const canvasId = useRef(null);
  const lineSliderRef = useRef(null);
  const mazeReadyRef = useRef(null);

  const [scrnColor, setScrnColor] = useState(true);
  const [runCount, setRunCount] = useState(0);
  const [mazePositions, setMazePositions] = useState([]);
  const horizontalType = 0;
  const verticalType = 1;

  useEffect(() => {
    const mazeReadyBtn = mazeReadyRef.current;
    
    const sendData = () => {
      sendDataToApp(mazePositions);
    }

    mazeReadyBtn.addEventListener('click', sendData);

    return() => {
      mazeReadyBtn.removeEventListener('click', sendData);
    }
  }, [mazePositions, sendDataToApp]);

  useEffect(() => {
    const clearBtn = clearBtnRef.current;

    const sketch1 = (p) => {
      // console.log(lineSliderRef.current);
      p.setup = () => {
        if(runCount === 0 && !canvasCreatedRef.current && !canvasId.current){
          const canvas = p.createCanvas(570, 360);
          canvas.parent('drawCanvas');
          setRunCount((prevRunCount) => prevRunCount + 1 );
          canvasCreatedRef.current = true;
          canvasId.current = canvas.elt.id;
          if(canvasId.current === "defaultCanvas0"){
            myp5Ref.current = p5Obj;
          }

          canvas.mouseClicked(drw);
          p.noLoop();
        }
      }

      var lineSlider;
      lineSlider = p.createSlider(0, 1, 0, 1);
      lineSlider.elt.id = "myLineSlider";
      lineSliderRef.current = lineSlider.elt.id;
      lineSlider.parent('lineType');

      var drawing = false;
      var count = 0;
      var px, py, nx, ny;
      var vertical;

      const drw = () => {
        if (count === 0) {
          px = p.mouseX;
          py = p.mouseY;
          drawing = false;
        } else if (count === 1) {
          nx = p.mouseX;
          ny = p.mouseY;
          drawing = true;
        }
        count = (count + 1) % 2;
        p.redraw();
      }

      p.draw = () => {
        vertical = lineSlider.value() === 1;
        if (drawing && vertical) {
          // Continue drawing veritcally
          p.line(px, py, px, ny);
          pushPositions(px, py, 0, ny - py, verticalType);
          console.log(mazePositions);
        } else if (drawing && !vertical) {
          // Continue drawing horizontally
          p.line(px, py, nx, py);
          pushPositions(px, py, nx-px, 0, horizontalType);
        }
      };

      function clearFunc(event){
        p.clear(0,0,0);
        setScrnColor(!scrnColor);
        setMazePositions([]);
      }

      // function printPositions(){
      //   console.log(mazePositions);
      // }

      // const sendData = () => {
      //   sendDataToApp(mazePositions);
      // }

      const pushPositions = (x, y, width, height, type) => {
        setMazePositions((prevPositions) => [
          ...prevPositions,
          { objPosX: x, objPosY: y, width: width, height: height, type: type },
        ]);
      };

      clearBtn.addEventListener('click', clearFunc);

      return () => {
        clearBtn.removeEventListener('click', clearFunc);
      }
    };

    if(runCount === 0 && !canvasCreatedRef.current){
      var p5Obj = new p5(sketch1);
    }   
  }, [mazePositions, runCount, scrnColor, sendDataToApp]);
  

  return(
    <div className='mainCont' style={contStyle}>
      <div id='canvasInputs'>
        <label htmlFor="myLineSlider">Horizontal</label>
        <div id='lineType'>
          {/* <select value={lineType} onChange={(e) => setLineType(e.target.value)}>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select> */}
        </div>
        <label htmlFor="myLineSlider">Vertical</label>
      </div>
      <div width="600" height="360" id='drawCanvas'></div>
      <div>
        <button ref={clearBtnRef} className='btn btn-sm bg-danger mt-1 me-1' style={{ color: 'black' }} >Clear Canvas</button>
        <button ref={mazeReadyRef} className='btn btn-sm bg-success mt-1 me-1' style={{ color: 'black' }} >Done</button>
      </div>
    </div>
  );
}
export default DrawMaze;
