import jsdom from 'jsdom';
import chai from 'chai';

const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
	if(!(key in global)) {
		global[key] = window[key];
	}
});
