import {configureStore} from '@reduxjs/toolkit';

import loginReducer from '@src/screens/login/login.slice';
import incompleteReducer from '@src/screens/events/incomplete/incomplete.slice';
import completeReducer from '@src/screens/events/complete/complete.slice';
import eventDetailReducer from '@src/screens/events/eventDetail/eventDetail.slice';
import timerReducer from '@src/screens/events/eventDetail/components/timer/timer.slice';
import filePhotosReducer from '@src/screens/filesPhotos/filePhotos.slice';
import signoffsReducer from '@src/screens/signoffs/signoffs.slice';
import timeEntryReducer from '@src/screens/timeEntry/timeEntry.slice';
import checklistReducer from '@src/screens/checklists/checklists.slice';
import signOffDetailReducer from '@src/screens/signoffs/signoffDetail/signoffDetail.slice';
import addSignoffReducer from '@src/screens/signoffs/addSignoff/addSignoff.slice';
import checklistDetailReducer from '@src/screens/checklists/checklistDetail/checklistDetail.slice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    incomplete: incompleteReducer,
    complete: completeReducer,
    eventDetail: eventDetailReducer,
    timer: timerReducer,
    filePhoto: filePhotosReducer,
    signoffs: signoffsReducer,
    signoffDetail: signOffDetailReducer,
    addSignoff: addSignoffReducer,
    timeEntry: timeEntryReducer,
    checklist: checklistReducer,
    checklistDetail: checklistDetailReducer,
  },
});

export {store};
