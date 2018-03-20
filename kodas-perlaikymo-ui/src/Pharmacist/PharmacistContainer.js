import React from 'react';
import PharNavBar from './NavBar/PharNavBar';
import PharmacistRouter from './PharmacistRouter';

class PharmacistContainer extends React.Component {



    render() {
        return (

            <div className="container">
                <PharNavBar />
                <div className="row">
                    <div className="col-md-12">
                        <PharmacistRouter />
                    </div>
                </div>
            </div>

        );
    }
}


export default PharmacistContainer;
