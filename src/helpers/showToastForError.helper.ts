import {ToastAndroid} from 'react-native';

const showToastForError = (error: any, duration?: number) => {
  ToastAndroid.show(error.response.data.data.message, duration ?? 3000);
};

export {showToastForError};
