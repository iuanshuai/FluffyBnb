import React, {Component} from 'react';

class SitterCard extends Component {
    render() {
        return (
            <div
                className="row no-gutters border rounded overflow-hidden flex-md-row mt-4 shadow-sm position-relative">
                <div className="fluid-col">
                    <h5 className="text-white bg-dark m-0"  style={{width: "150px", height: "150px"}}>pic here</h5>
                </div>
                <div className="fluid-col p-2 text-left">
                    <h4><strong>Michael R.</strong></h4>
                    <h6>Flexible Sitter That Loves All Pets</h6>
                    <h6><small><b>Capitol Hill, Washington, DC, 20002</b></small></h6>


                    <div className="row">
                        <div className="col">
                            <a className="btn btn-outline-secondary btn-sm mt-2">3 Reviews</a>
                        </div>
                        <div className="col ml-0 pl-0">
                            <div className="mt-2">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>

                    </div>




                </div>
                <div className="col float-right">
                    <h5>from</h5>
                    <h3 className="">$38</h3>
                </div>

            </div>
        )
    }
}

export default SitterCard;
