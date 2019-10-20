// Functional Based TypeScript Mobx Example

import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { observable, computed, action } from 'mobx'

let time = observable({
    value: new Date()
})

setInterval(() => {
    time.value = new Date()
}, 1)

export const Clock = observer(() => {
    const hours = time.value.getHours()
    const minutes = time.value.getMinutes()
    const seconds = time.value.getSeconds()
    const milliseconds = time.value.getMilliseconds()

    return(
        <div>
            <h2>
                {`${hours}:${minutes}:${seconds}:${milliseconds}`}
            </h2>
        </div>
    )
})
