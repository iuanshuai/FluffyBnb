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
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <form className="text-left">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Dog Boarding near</label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Zip Code or Address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Dates</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                       placeholder="Another input"/>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                       className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadioInline1">Dog</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                       className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="customRadioInline2">Cat</label>
                            </div>
                        </form>

                    </div>

                    <div className="col-lg-5 col-md-8">
                        <SitterCard/>
                        <SitterCard/>
                        <SitterCard/>
                        <SitterCard/>
                        <SitterCard/>
                        <SitterCard/>
                        <SitterCard/>
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

                            </GoogleMapReact>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default FindAndReserve;