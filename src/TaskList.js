import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Trash from './icons/trash-2-outline.svg';
import Award from './icons/award-outline.svg';
import Edit from './icons/edit-outline.svg';
import UpdateModal from './common/UpdateModal';
import TaskInput from './common/TaskInput';
import {COLORS} from './common/Colors';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      editableTask: '',
      modalTitle: '',
      modalText: '',
      modalSubmit: () => {},
    };
  }

  render() {
    return this.props.tasks.length ? (
      <View style={{flex: 1}}>
        <UpdateModal
          visible={this.state.visible}
          title={this.state.modalTitle}
          text={this.state.modalText}
          submit={this.state.modalSubmit}
          cancel={() =>
            this.setState({
              visible: false,
              editableTask: '',
              modalTitle: '',
              modalText: '',
            })
          }>
          {this.state.modalText.length < 1 && (
            <TaskInput
              value={this.state.editableTask}
              onTaskTyped={task => this.setState({editableTask: task})}
              style={[styles.input]}
              onTaskCleared={() => this.setState({editableTask: ''})}
              onTaskAdded={task => {
                this.setState({editableTask: task});
              }}
            />
          )}
        </UpdateModal>

        <FlatList
          data={this.props.tasks}
          renderItem={({item}) => (
            <View style={[styles.taskContainer]}>
              <TouchableOpacity
                style={[styles.taskButton]}
                onPress={() => this.props.onTaskClicked(item)}>
                <Text
                  style={[
                    item.isComplete
                      ? styles.taskComplete
                      : styles.taskNotComplete,
                  ]}>
                  {item.text}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.editButton]}
                onPress={() =>
                  this.setState({
                    visible: true,
                    editableTask: item.text,
                    modalTitle: 'Edit Task',
                    modalSubmit: () => {
                      item.text = this.state.editableTask;
                      this.props.onTaskUpdated(item);
                      this.setState({
                        visible: false,
                        editableTask: null,
                        modalTitle: '',
                        modalText: '',
                      });
                    },
                  })
                }>
                <Edit width={30} height={30} fill={COLORS.DARK_BLUE} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.deleteButton]}
                onPress={() =>
                  this.setState({
                    visible: true,
                    editableTask: item.text,
                    modalTitle: 'Delete Task',
                    modalText: 'Are you sure you want to delete this task?',
                    modalSubmit: () => {
                      this.props.onTaskDeleted(item);
                      this.setState({
                        visible: false,
                        editableTask: null,
                        modalTitle: '',
                        modalText: '',
                      });
                    },
                  })
                }>
                <Trash width={30} height={30} fill={COLORS.RED} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.date.toString()}
        />
      </View>
    ) : (
      <View style={[styles.noTasksContainer]}>
        <Text style={[styles.noTasks]}>You have no tasks!</Text>
        <Award width={30} height={30} fill={COLORS.RED} />
      </View>
    );
  }
}

export default TaskList;

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    marginBottom: 15,
    borderRadius: 10,
    width: '100%',
    elevation: 3,
  },
  taskButton: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  deleteButton: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  editButton: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  taskComplete: {
    color: COLORS.GREY,
    textDecorationLine: 'line-through',
  },
  taskNotComplete: {
    color: COLORS.DARK_BLUE,
  },
  noTasksContainer: {
    alignItems: 'center',
  },
  noTasks: {
    color: COLORS.DARK_BLUE,
    fontSize: 20,
    marginBottom: 10,
  },
  modal: {
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editTaskContainer: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 300,
  },
});
