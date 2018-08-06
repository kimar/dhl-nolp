# DhlNolp

**WARNING**: This library uses JSDOM's JavaScript execution machanism which might potentially result in code injection vulnerabilities, given the DHL page contains malicious JavaScript. By using this library you agree that you're aware of this fact. The author won't be held accountable for any problems/malfunctions/losses/whatsoever results to you or your business when using this software. Please also read the [LICENSE](LICENSE.md).

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
