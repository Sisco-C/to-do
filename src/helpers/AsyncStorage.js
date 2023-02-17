import AsyncStorage from '@react-native-community/async-storage';

export async function saveTask(value) {
  try {
    await AsyncStorage.setItem('ToDos', JSON.stringify(value));
  } catch (e) {
    console.error('Error saving task');
  }

  console.log('Finished saving task');
}

export async function getAllTasks() {
  let allTasks = null;
  try {
    allTasks = await AsyncStorage.getItem('ToDos');
  } catch (e) {
    console.error('Error getting task');
  }

  console.log('DONE: ', allTasks);
  return JSON.parse(allTasks);
}

// export async function clearAll() {
//   try {
//     await AsyncStorage.clear();
//   } catch (e) {
//     // clear error
//   }

//   console.log('Done.');
// }
