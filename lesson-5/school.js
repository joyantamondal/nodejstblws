const EventEmitter = require('events');

const emitter = new EventEmitter();
class school extends EventEmitter {
    startPeriod() {
        console.log('Class Started');
        // raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}
module.exports = school;
