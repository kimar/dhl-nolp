# DhlNolp

## DHL Tracking Status

Track the status of a DHL parcel via https://nolp.dhl.de

### Howto

```
const DhlNolp = require('./lib');

const tracker = new DhlNolp('443282422135');
tracker.status().then((status) => {
	console.log(status);
});
```

### License

Please see [LICENSE.md](LICENSE.md).
