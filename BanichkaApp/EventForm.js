import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from './util';
import { addEvent } from "./EventService";

class EventForm extends Component {
  state = {
    title: "",
    date: Date.now(),
    description: "",
    showDatePicker: false
  };

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  };

  handleChangeDescription = (value) => {
    this.setState({ description: value });
  };

  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false });  
  };

  handleDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({date: currentDate});
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Event title"
          value={this.state.title}
          onChangeText={this.handleChangeTitle}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Event date"
          value={formatDate(this.state.date)}
          editable={!this.state.showDatePicker}
          onFocus={this.handleDatePress}
        />
        {
          this.state.showDatePicker &&
          <DateTimePicker
            value={this.state.date}
            mode="datetime"
            is24Hour={true}
            onChange={this.handleDatePicked}
          />
        }
        <TextInput
          style={styles.textInput}
          placeholder="Event description"
          value={this.state.description}
          onChangeText={this.handleChangeDescription}
        />
        <Button title="Add" onPress={
            () => {
              addEvent({
                title: this.state.title,
                date: formatDate(this.state.date),
                description: this.state.description
              })
              .then(() => this.props.navigation.navigate('ThankYou'));
            }
        } />
      </View>
    );
  }
}
export default EventForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
