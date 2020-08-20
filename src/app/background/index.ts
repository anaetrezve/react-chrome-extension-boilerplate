import { createStore, Store } from 'redux';
import { wrapStore } from 'webext-redux';
import { config } from '../../config';
import { saveState, loadState, reducers } from './store';
import { IAppState } from './store/interfaces/store';

const autoSaveAppState = (appStore: Store<IAppState>) => {
  chrome.tabs.onRemoved.addListener(() => saveState(appStore.getState()));
  chrome.windows.onRemoved.addListener(() => saveState(appStore.getState()));

  setInterval(() => saveState(appStore.getState()), config.saveFrequency);
};

const preloadedState = loadState();
const store = createStore(reducers, preloadedState);

wrapStore(store);
autoSaveAppState(store);
