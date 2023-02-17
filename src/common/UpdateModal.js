import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {COLORS} from './Colors';

class UpdateModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal visible={this.props.visible} transparent>
        <View style={[styles.modal]}>
          <View style={[styles.container]}>
            <Text style={[styles.title]}>{this.props.title}</Text>

            {this.props.text ? (
              <Text style={[styles.text]}>{this.props.text}</Text>
            ) : null}

            {this.props.children && this.props.children}

            <View style={[styles.buttonContainer]}>
              <TouchableOpacity
                onPress={this.props.cancel}
                style={[styles.cancelButton]}>
                <Text style={[styles.buttonText]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.props.submit}
                style={[styles.submitButton]}>
                <Text style={[styles.buttonText]}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default UpdateModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    width: '90%',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.DARK_BLUE,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.DARK_BLUE,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: COLORS.GREY,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: COLORS.DARK_BLUE,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.WHITE,
  },
});
