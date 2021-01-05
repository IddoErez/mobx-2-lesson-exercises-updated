import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component {
    addRes = () => {
        let name = this.props.GeneralStore.name
        let numPeople = this.props.GeneralStore.numPeople
        this.props.RestaurantStore.addRes(name, numPeople)
    }
   

    render() {
        console.log(this.props.RestaurantStore.reservations)
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>the number of people in the restaurant is {this.props.RestaurantStore.restPopulation}</div>
                <div id="completedTables">the number of completed tables in the restaurant is {this.props.RestaurantStore.completedTables}</div>

                <ResInput />

                <button id="addRes" onClick={this.addRes}>Add Reservation</button>

                {/* Make the Add Reservation button work */}
                <div className="reservations">
                    {this.props.RestaurantStore.reservations.map(r => {

                        console.log('hello', r)
                        return <Reservation key={r.id} res={r} />
                   })}

                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))