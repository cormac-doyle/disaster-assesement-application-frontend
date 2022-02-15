import React from "react";
import { Component } from 'react/cjs/react.production.min';
import Map from "../map/MapDisaster"
import Title from "../Title"
import DisasterStatus from "../DisasterStatus";
// import { fetchResponseJson } from './fetchResponseJson'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchResponseJson } from '../fetchResponseJson'



class Report extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        return fetchResponseJson('https://ase-backend-2.herokuapp.com/api/1/handshake').then((responseJson) => {
            this.setState({
                items: responseJson
            })
        })
    }

    render() {
        return (<>
            <nav>
            </nav>
            <main>

                <Title />
                <h1>
                    Report A Disaster
                </h1>
                <DisasterStatus items={this.state.items}></DisasterStatus>
                <Map />

            </main>
        </>)

    }
};

export default Report;