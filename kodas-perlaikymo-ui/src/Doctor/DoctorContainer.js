import React from 'react';
import DocNavBar from './NavBar/DocNavBar';
import DoctorRouter from './DoctorRouter';

class DoctorContainer extends React.Component {



    render() {
        return (

            <div className="container">
                <DocNavBar />
                <div className="row">
                    <div className="col-md-12">
                        <DoctorRouter />
                    </div>
                </div>
            </div>

        );
    }
}


export default DoctorContainer;
