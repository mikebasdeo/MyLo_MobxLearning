// Functional Based TypeScript Mobx Example

import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { observable, computed, action } from 'mobx'

let time = observable({
    value: new Date()
})

setInterval(() => {
    time.value = new Date()
}, 1000)

export const Clock = observer(() => {
    const hours = time.value.getHours()
    const minutes = time.value.getMinutes()
    const seconds = time.value.getSeconds()

    return(
        <div>
            <h2>
                {`${hours}:${minutes}:${seconds}`}
            </h2>
        </div>
    )
})
