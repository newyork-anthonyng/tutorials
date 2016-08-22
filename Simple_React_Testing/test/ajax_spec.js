import { utility } from '../src/ajax';
import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Utility', () => {
	beforeEach(() => {
		sinon.spy(axios, 'get');
	});

	afterEach(() => {
		axios.get.restore();
	});

	it('should make an AJAX call', () => {
		utility.makeAjax();

		expect(axios.get.callCount).to.equal(1);
	});
});
