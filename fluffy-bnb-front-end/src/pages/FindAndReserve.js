import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import SitterCard from "../components/SitterCard";
import "../css/FindAndReserve.css"

class FindAndReserve extends Component {

    static defaultProps = {
        center: {
            lat: 38.85,
            lng: -77.05
        },
        zoom: 13
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <h1>df</h1>
                    </div>

                    <div className="col-lg-5 col-md-8">
                        <SitterCard /><SitterCard /><SitterCard /><SitterCard /><SitterCard />
                    </div>

                    <div className="col-lg-4">
                        <div style={{height: '90vh', width: '100%'}} className="sticky-top sticky-offset">
                            <GoogleMapReact
                                // bootstrapURLKeys={{
                                //     key: ""
                                // }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                                {/*<AnyReactComponent*/}
                                {/*    lat={59.955413}*/}
                                {/*    lng={30.337844}*/}
                                {/*    text="My Marker"*/}
                                {/*/>*/}
                            </GoogleMapReact>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default FindAndReserve;