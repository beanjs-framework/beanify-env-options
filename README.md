# beanify-env-options

## install

```
npm i beanify-env-options
```

## Environmental variable

* ```BEANIFY_NATS_URL```:config opts.nats.url
* ```BEANIFY_NATS_SERVERS```:config opts.nats.servers
* ```BEANIFY_NATS_USER```:config opts.nats.user
* ```BEANIFY_NATS_PASS```:config opts.nats.pass
* ```BEANIFY_NATS_TOKEN```:config opts.nats.token
* ```BEANIFY_LOG_LEVEL```:config opts.log.level;```enum:'fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'```

## usage
```
const Beanify=require("beanify")
const beanifyEnvOptions=require("beanify-env-options")

const beanify=new Beanify(beanifyEnvOptions())


```