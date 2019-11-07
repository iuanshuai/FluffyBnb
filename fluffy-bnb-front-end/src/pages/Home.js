import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <h1>FlyffyBnb</h1>
                <p className="lead">FluffyBnb is design to help you find a real, loving home for your pets, so that their boarding
                    experience is as much a vacation as their owner’s.</p>
                <p className="lead">
                    <a href="/search" className="btn btn-lg btn-secondary">Find a home</a>
                </p>

            </div>
        );
    }
}

export default Home;