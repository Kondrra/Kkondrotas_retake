import React from 'react';
import EditRecordComponent from "./EditRecordComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

class EditRecordContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            duration: '',
            tlk: '',
            appDesc: '',
            vlk: '',
            repeated: '',
            date: '',
            history: {}
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8081/api/records/" + this.props.match.params.id)
        .then((response) => {
            const {duration, tlk, appDesc, vlk, repeated, date} = response.data;
            this.setState({
                duration : duration,
                tlk : tlk,
                appDesc : appDesc,
                vlk : vlk,
                repeated : repeated,
                date : date,
                history: this.props.history
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
                [id]: value
            }
        );
    };

    handleClick = (event) => {
        const outputProduct = {
            duration: this.state.duration,
            tlk: this.state.tlk,
            appDesc: this.state.appDesc,
            vlk: this.state.vlk,
            repeated: this.state.repeated,
            date: this.state.date
        };

        axios.put("http://localhost:8081/api/records/" + this.props.match.params.id, outputProduct)
            .then((response) => {
              alert("Duomenys išsaugoti!");
                this.props.history.push("/doctor/myRecords");
            })
            .catch((error) => {
              alert("Nepavyko! Blogai įvesti duomenys");
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <EditRecordComponent
                    duration={this.state.duration}
                    tlk={this.state.tlk}
                    appDesc={this.state.appDesc}
                    vlk={this.state.vlk}
                    repeated={this.state.repeated}
                    date={this.state.date}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default EditRecordContainer;
