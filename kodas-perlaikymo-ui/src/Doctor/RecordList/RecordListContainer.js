import React, {Component} from 'react';
import {RecordListComponent} from "./RecordListComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

export class RecordListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          records: [],
          doctorId: ''
        };
    }

    componentDidMount = () => {
      axios.get('http://localhost:8081/api/userId')
        .then((response) => {
          this.setState({
            doctorId: response.data
          });
          axios.get('http://localhost:8081/api/doctors/' + this.state.doctorId + '/records')
              .then((response) => {
                  this.setState({records: response.data});
              })
              .catch((error) => {
                  console.log(error);
              });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    removeRecord = (index) => {
        const items = this.state.records.filter((record) => {
          return record.id !== parseInt(index, 10);
        });
        this.setState({ records : items });
    }

    render() {
        return (
            <div>
                <RecordListComponent records={this.state.records} history={this.props.history} remove={this.removeRecord} />
            </div>
        );
    }
}
