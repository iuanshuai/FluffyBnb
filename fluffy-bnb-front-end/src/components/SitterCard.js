import React, {Component} from 'react';

class SitterCard extends Component {
    render() {
        return (
            <div
                className="row no-gutters border rounded overflow-hidden flex-md-row mt-4 shadow-sm position-relative">
                <div className="fluid-col">
                    <h1 className="text-white bg-dark m-0"  style={{width: "150px", height: "150px"}}>pic here</h1>
                </div>
                <div className="fluid-col p-2 text-left">
                    <h4><strong>Michael R.</strong></h4>
                    <h6>Flexible Sitter That Loves All Pets</h6>
                    <h6><b>Capitol Hill, Washington, DC, 20002</b></h6>



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
