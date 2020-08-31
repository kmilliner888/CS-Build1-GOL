import React, {useState, useCallback, useRef} from 'react';
import produce, { setAutoFreeze } from 'immer';
import logo from './logo.svg';
import './App.css';

/* setting the rows and columns for the grid */
const rowCount = 25;
const columnCount = 25;

/* Location of all the neighbors for cell, streamlined */
const direction = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];


function App() {
  /* Setting state for grid */
  const [grid, setGrid] = useState(()=> {
    const rows = [];
    for(let i = 0; i< rowCount; i++) {
      rows.push(Array.from(Array(columnCount), ()=> 0));
    }
    return rows;
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current= running

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid(g => { /* g is the current grid */
      return produce(g, gridCopy => { /* This is going through every cell in the grid */
        for (let i = 0; i < rowCount; i++) {
          for (let j = 0; j< columnCount; j++) {
            let neighbors = 0;
            /* This is going to tell us for each cell, how many neighboring cells are there */
            direction.forEach(([x, y]) => {
              const newI= i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < rowCount && newJ >= 0 && newJ <columnCount) { /* This will check to make sure we don't go out of bounds, and that there are neighbors */
                neighbors += g[newI][newJ]
              }
            })
            /* RULE #1 and RULE #2 */
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0; /* KILLS IT */
            } else if (g[i][j] === 0 && neighbors ===3) {
              gridCopy[i][j] = 1;   /*RULE #3, COMES ALIVE*/
            } /*This part is mutating the gridCopy, and produce is creating a new grid, which updates the setGrid value */
          }
        }
      });
    });
    setTimeout(runSimulation, 100);
  }, [])

  return (
    <>
      <div style={{backgroundColor: "black", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly",color: "white", textAlign: "center"}}>
            <h1 style={{width: "100%"}}>Game of Life</h1>
            <p style={{width: "100%", padding: "0px", margin: "0px 0px 20px 0px"}}>Select a grouping of cells then click START.<br></br>Once it stops, click on nearby cells to watch it keep growing,<br></br> or click STOP to start over.<br></br><a style={{textDecoration: "none", color: "yellow"}} href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Click here for full description and rules.</a></p>


        <div style={{padding: "0px 0px 20px 0px"}}>
          <button onClick={()=> {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation()
            }
          /* BUTTON: Is it running? If so, show Stop. If not, show Start */
          }}>{running ? 'STOP': 'START'}
          </button>
        </div>
      </div>
      <div id="grid container" style={{width: "100%",
          height: "auto"}}>
        <div className="App" style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columnCount}, 20px)`,
          backgroundColor: "black", paddingBottom: "100px"}}>
          {grid.map((rows, i) =>
            rows.map((col, j) =>
              <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                })
                // const randomGrid = produce(grid, gridCopy => {
                //   gridCopy[i][j] = grid[i][j] ? 0 : 1;
                // })
                setGrid(newGrid)
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][j] ? 'purple' : undefined,
                border: '1px solid grey'
              }}/>
            ))}
            {/* <button onClick={() => {
              setGrid(randomGrid)
            }}>Random</button> */}
        </div>
        <div style={{backgroundColor: "black", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly",color: "white", textAlign: "center"}}>
          <div style={{padding: "0px 0px 20px 0px"}}>
            <button onClick={()=> {
              setRunning(!running);
              if (!running) {
                runningRef.current = true;
                runSimulation()
              }
            /* BUTTON: Is it running? If so, show Stop. If not, show Start */
            }}>{running ? 'STOP': 'START'}
            </button>
          </div>
          <div className="App" style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columnCount}, 20px)`,
            backgroundColor: "black", paddingBottom: "100px"}}>
            {grid.map((rows, i) =>
              rows.map((col, j) =>
                <div
                key={`${i}-${j}`}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[Math.floor((Math.random()*625)+1), i][Math.floor((Math.random()*625)+1), j] = 'purple',
                  border: '1px solid grey'
                }}/>
              ))}
              {/* <button onClick={() => {
                setGrid(randomGrid)
              }}>Random</button> */}
          </div>
        </div>

        </div>

    </>
  )
}

export default App;

