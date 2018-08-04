# DhlNolp

## DHL Tracking Status

Work in progress.

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