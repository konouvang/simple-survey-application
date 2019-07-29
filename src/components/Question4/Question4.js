import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Question2 extends Component {

    constructor(props){
        super(props)
        this.state = {
            question2: '',
        }
    }S

    handleFieldChange = (event) => {
         this.setState({
                question2: event.target.value
        });
    }


    submitFeeling = (event) => {
        this.props.dispatch({
            type: 'ADD_QUESTION2',
            payload: this.state.question2,
        });
        this.props.history.push('/questionthree');
    }

    render() {
        return (
            <Container maxWidth='xs' className="behindPaper">
                <Paper elevation={5}>
                    <Box m={3} p={2}>
                        <FormControl>
                            <Typography variant="h5" gutterBottom={true}>Occasion</Typography>
                                <RadioGroup>
                                    <label>
                                        <Radio
                                            type="radio"
                                            value="Job"
                                            checked={this.state.needsType === "Job"}
                                            onChange={this.handleChange}
                                        />
                                        Job
                            </label>
                                    <label>
                                        <Radio
                                            type="radio"
                                            value="Court"
                                            checked={this.state.needsType === "Court"}
                                            onChange={this.handleChange}
                                            control={<Radio color="primary" />}
                                        />
                                        Court
                            </label>
                                    <label>
                                        <Radio
                                            type="radio"
                                            value="Funeral"
                                            checked={this.state.needsType === "Funeral"}
                                            onChange={this.handleChange}
                                            control={<Radio color="primary" />}
                                        />
                                        Funeral
                            </label>
                                    <label>
                                        <Radio
                                            type="radio"
                                            value="Other"
                                            checked={this.state.needsType === "Other"}
                                            onChange={this.handleChange}
                                            control={<Radio color="primary" />}
                                        />
                                        Other
                            </label>
                                    {otherField}
                                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>Next</Button>
                                </RadioGroup>
                        </FormControl>
                    </Box>
                </Paper>
            </Container>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Question2));