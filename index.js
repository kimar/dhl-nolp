const request = require('request-promise');
const Promise = require('bluebird');
const { JSDOM } = require("jsdom");

module.exports = class DhlNolp {
	constructor(id, opts) {
		this.id = id;
		this.opts = opts || { language: 'en' }
	}

	status(cb) {
		return request(
			`https://nolp.dhl.de/nextt-online-public/set_identcodes.do?lang=${this.opts.language}&idc=${this.id}`
		).then((html) => {
			return new Promise((resolve, reject) => {
				resolve(new JSDOM(html, { runScripts: "dangerously" }));
			});
		}).then((dom) => {
			return new Promise((resolve, reject) => {
				resolve(dom.window.__INITIAL_APP_STATE__.initialState);
			});
		}).nodeify(cb);
	}
}
