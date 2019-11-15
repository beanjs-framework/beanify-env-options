const tap = require("tap")
const env = require("../index")

tap.test("index.js test", (t) => {
    const options = env()

    t.plan(1)

    t.strictSame(options, {
        log: { level: 'info' },
        nats:
        {
            pass: 'testpass',
            servers: ['nats://localhost:4222', 'nats://localhost:4244'],
            token: 'testtoken',
            url: 'nats://localhost:4222',
            user: 'testuser'
        }
    },'check options')
})

