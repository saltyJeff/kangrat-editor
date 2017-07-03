import {BrowserWindow, app} from 'electron';
import * as path from 'path';
import * as url from 'url';
import {SharedState} from './SharedState';

let win;
(global as any).state = new SharedState();
app.on('ready', () => {
	win = new BrowserWindow({width: 800, height: 600});
	win.loadURL(url.format({
		pathname: path.join(__dirname, '../front/index.html'),
  		protocol: 'file:',
		slashes: true,
  	}));
	win.on('closed', () => {
		win = null;
	});
});
app.on('window-all-closed', () => {
	app.quit();
});