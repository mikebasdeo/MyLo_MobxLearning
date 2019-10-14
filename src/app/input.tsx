import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'

export class InputState {

    @observable
    value: string

    @action
    onChange(newValue: string) {
        this.value = newValue
    }

}