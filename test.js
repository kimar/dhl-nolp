const DhlNolp = require('./index');

const tracker = new DhlNolp('443282422135');
tracker.status().then((status) => {
	console.log(JSON.stringify(status));
});