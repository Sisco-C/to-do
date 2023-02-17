import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Cross from '../icons/close-circle-outline.svg';
import {COLORS} from './Colors';

class TaskInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.props.value}
          placeholder={this.props.placeholder}
          placeholderTextColor={COLORS.GREY}
          onChangeText={this.props.onTaskTyped}
          onSubmitEditing={event =>
            this.props.onTaskAdded(event.nativeEvent.text)
          }
          style={[styles.input]}
        />
        <TouchableOpacity
          style={[styles.clearButton]}
          onPress={this.props.onTaskCleared}>
          <Cross width={25} height={25} fill={COLORS.RED} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    marginBottom: 25,
    borderColor: COLORS.DARK_BLUE,
    borderRadius: 25,
    borderWidth: 2,
    height: 50,
    elevation: 3,
  },
  input: {
    width: '85%',
    borderBottomLeftRadius: 23,
    borderTopLeftRadius: 23,
    color: COLORS.DARK_BLUE,
    paddingLeft: 20,
  },
  clearButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    borderTopRightRadius: 23,
    borderBottomRightRadius: 23,
  },
});
