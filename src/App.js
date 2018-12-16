import React, { Component } from 'react';

import './App.css';

const initialState = {
    cells: Array(81).fill('-')
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
            <Board initialState={initialState}/>
        </header>
      </div>
    );
  }
}

class Board extends Component {
    render() {
        const {initialState} = this.props;
        const rows = [...Array(9).keys()].map(x => {
            const start = x * 9;
            const end = (x + 1) * 9;
            return initialState.cells.slice(start, end)
        });

        console.log(rows);
        return (
            <div className="Board">
             <table>
                 <tbody>
                    {rows.map(row => {
                        return(
                            <SudokuRow cells={row}/>
                        )
                    })}
                 </tbody>
             </table>
            </div>
        );
    }
}

class SudokuRow extends Component {
    render() {
        const {cells} = this.props;
        return (
            <tr>
                {cells.map(cell => {
                        return (
                            <td>
                                {cell}
                            </td>
                        )
                    })
                }
            </tr>
        )
    }
}

export default App;
