import React from "react";
import "../../App.css";
import { Component } from 'react/cjs/react.production.min';
import Map from "../map/MapTraffic"
import Title from "../Title"
import DisasterStatus from "../DisasterStatus";
import { fetchResponseJson } from '../fetchResponseJson'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';


class Home extends Component {

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
                <GDPRAlert />
                <DisasterStatus items={this.state.items}></DisasterStatus>
                <Map />

            </main>
        </>)

    }
};

export default Home;


function GDPRAlert() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Disclaimer</Alert.Heading>
                <p>
                    By proceeding with this application you are consenting to the use of your location data for routing purposes
                </p>
            </Alert>
        );
    }
    return null;
}