import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, computed, action } from 'mobx'

class EventStore {
    @observable errors = 42
    @observable name = 42
    @observable startDate = 42
    @observable endDate = 42
    @observable isValid = true
    @observable pending = 42
}

const store = new EventStore()


@observer
export default class EventForm extends Component<{}> {

    render() {
        const { errors, name, startDate, endDate, isValid, pending } = store
        const disabled = !isValid || pending

        return(
            <section>

                <div>
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                    >
                    </input>
                </div>

                <div>
                    <label>
                        Start Date
                    </label>
                    <input
                        type="date"
                    >
                    </input>
                </div>

                <div>
                    <label>
                        End Date
                    </label>
                    <input
                        type="date"
                    >
                    </input>
                </div>

            </section>
        )
    }
}