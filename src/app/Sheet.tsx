// Class Based TypeScript Mobx Example

import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { observable, computed, action } from 'mobx'

class SheetStore {
  @observable inputGrid = [
    [{id: 'A1', value: 1}, {id: 'A2', value: 1}, {id: 'A3', value: 1}, {id: 'A4', value: 1}],
    [{id: 'B1', value: 1}, {id: 'B2', value: 1}, {id: 'B3', value: 1}, {id: 'B4', value: 1}],
    [{id: 'C1', value: 1}, {id: 'C2', value: 1}, {id: 'C3', value: 1}, {id: 'C4', value: 1}],
    [{id: 'D1', value: 2}, {id: 'D2', value: 1}, {id: 'D3', value: 1}, {id: 'D4', value: 1}],
  ]

  @computed get inputMap(){
    const rows = this.inputGrid.slice()
    const map = {}

    rows.forEach((row) => {
      row.slice().forEach((cell) => {
        map[cell.id] = cell
      })
    })

    return map
  }

  @action
  setValue(value, id) {
    this.inputMap[id].value = parseFloat(value)
  }

}

const sheet = new SheetStore()

@observer
export default class Sheet extends Component<{}> {

  onInputChange(value, id) {
    sheet.setValue(value, id)

  }

  render() {
    const { inputGrid } = sheet
    console.log(inputGrid.length)

    return (
      <table>
        <tbody>
          {
            inputGrid.slice()
            .map((row, index) => {
              return(
                <tr key = {index}>
                  {
                    row.slice()
                    .map((v) => {
                      return(
                        <td key = {v.id}>
                          <input 
                            type="number" value={v.value}
                            onChange={event => this.onInputChange(event.target.value, v.id)}

                           />
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}