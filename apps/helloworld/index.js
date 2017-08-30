import config from './config'
import * as data from './data'

export default {
	name: "helloworld",
	version: "1.0.0",
	description: "helloworld",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "helloworld")
	}
}