import '../index';
const assert = require('assert');

describe('SuperDate', function () {
    it('format', function () {
        assert.equal(new Date(2016, 0, 1).format(), '2016-01-01 00:00:00');
        assert.equal(new Date(2016, 2, 4).format('yyyy-MM-dd'), '2016-03-04');
        assert.equal(new Date(2016, 2, 4).format('YYYY-MM-DD'), '2016-03-04');
        assert.equal(new Date(2016, 2, 4, 1, 2, 13).format('YYYY-MM-DD hh:mm:ss'), '2016-03-04 01:02:13');
        assert.equal(new Date(2016, 2, 4, 1, 2, 13).format('YYYY-MM-DD HH:mm:ss'), '2016-03-04 01:02:13');
        assert.equal(new Date(2016, 2, 4, 1, 2, 13).format('YYYY-M-D h:m:s'), '2016-3-4 1:2:13');
        assert.equal(new Date(2016, 2, 4, 1, 2, 13).format('YYYY-M-D H:m:s'), '2016-3-4 1:2:13');
        assert.equal(new Date(2016, 2, 4, 11, 12, 13, 456).format('0q hh:mm:ss SSS'), '01 11:12:13 456');
        assert.equal(new Date(2016, 2, 4, 23, 12, 13, 456).format('0q hh:mm:ss S'), '01 23:12:13 456');
        assert.equal(new Date(2016, 2, 4, 23, 12, 13, 45).format('0q hh:mm:ss SSS'), '01 23:12:13 045');
        assert.equal(new Date(2016, 2, 4, 23, 12, 13, 45).format('0q hh:mm:ss S'), '01 23:12:13 45');
        assert.equal(new Date(2016, 2, 4, 23, 12, 13, 4).format('0q hh:mm:ss SSS'), '01 23:12:13 004');
        assert.equal(new Date(2016, 2, 4, 11, 12, 13, 4).format('0q hh:mm:ss S'), '01 11:12:13 4');
        assert.equal(new Date(2016, 9, 4, 1, 2, 13, 456).format('yy-M-d h:m:s q'), '16-10-4 1:2:13 4');
    })

    it('today', function () {
        assert.equal(new Date(Date.today()).format('yyyy-M-d hh:mm:ss S'), `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} 00:00:00 0`);
    })
})