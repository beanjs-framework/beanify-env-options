const envSchema = require("env-schema")

const envOptions = {
    dotenv: true,
    schema: {
        type: 'object',
        properties: {
            BEANIFY_NATS_URL: {
                type: "string"
            },
            BEANIFY_NATS_SERVERS: {
                type: 'string',
                separator: ","
            },
            BEANIFY_NATS_USER: {
                type: 'string'
            },
            BEANIFY_NATS_PASS: {
                type: 'string'
            },
            BEANIFY_NATS_TOKEN: {
                type: 'string'
            },
            BEANIFY_PINO_LEVEL: {
                enum: ['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'],
                default:"debug"
            }
        }


    }
}

module.exports = function () {
    envObj = envSchema(envOptions)

    beanifyOpts = {}

    Object.keys(envObj)
        .forEach((key) => {
            const segs = key.toLowerCase().split('_')

            if (beanifyOpts[segs[1]] == undefined) {
                beanifyOpts[segs[1]] = {}
            }

            beanifyOpts[segs[1]][segs[2]] = envObj[key]

        })

    return beanifyOpts
}

