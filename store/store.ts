import {configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@/store/slices/authSlices';
import JobsReducer from '@/store/slices/jobsSlice';
import ApplicationsReducer from '@/store/slices/applicationsSlice';

const persistConfig = {
    key: 'root',
    storage,
  };
  

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        jobs: JobsReducer,
        applications: ApplicationsReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;