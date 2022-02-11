import React from "react";
import "./App.css";
import { Component } from 'react/cjs/react.production.min';
import Map from "./components/Map/MapTraffic"
import Title from "./components/Title"
import DisasterStatus from "./components/DisasterStatus";
import { fetchResponseJson } from './fetchResponseJson'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    return fetchResponseJson('http://localhost:8000/').then((responseJson) => {
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

export default App;


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
