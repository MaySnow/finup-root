/**
 * run this test with command:
 * nodeunit DynamicKeyTest.js
 * see https://github.com/caolan/nodeunit
 */
var DynamicKey = require('../src/DynamicKey');
var DynamicKey3 = require('../src/DynamicKey3');
var DynamicKey4 = require('../src/DynamicKey4');
var appID  = "970ca35de60c44645bbae8a215061b33";
var appCertificate     = "5cfd2fd1755d40ecb72977518be15d3b";
var channel = "7d72365eb983485397e3e3f9d460bdda";
var ts = 1446455472;
var r = 58964981;
//var uid=999;
var uid=2882341273;
var expiredTs=1446455471;

exports.DynamicKeyTest = function (test) {
  var expected = "870588aad271ff47094eb622617e89d6b5b5a615970ca35de60c44645bbae8a215061b3314464554720383bbf5";
  var actual = DynamicKey.generate(appID, appCertificate, channel, ts, r);
  test.equal(expected, actual);
  test.done();
};

exports.DynamicKey3Test = function (test) {
  var expected = "0037666966591a93ee5a3f712e22633f31f0cbc8f13970ca35de60c44645bbae8a215061b3314464554720383bbf528823412731446455471";
  var actual = DynamicKey3.generate(appID, appCertificate, channel, ts, r, uid, expiredTs);
  test.equal(expected, actual);
  test.done();
};

exports.PublicSharingKeyTest = function (test) {
  var expected = "004ec32c0d528e58ef90e8ff437a9706124137dc795970ca35de60c44645bbae8a215061b3314464554720383bbf51446455471";
  var actual = DynamicKey4.generatePublicSharingKey(appID, appCertificate, channel, ts, r, uid, expiredTs);
  test.equal(expected, actual);
  test.done();
};


exports.RecordingKeyTest = function (test) {
  var expected = "004e0c24ac56aae05229a6d9389860a1a0e25e56da8970ca35de60c44645bbae8a215061b3314464554720383bbf51446455471";
  var actual = DynamicKey4.generateRecordingKey(appID, appCertificate, channel, ts, r, uid, expiredTs);
  test.equal(expected, actual);
  test.done();
};

exports.MediaChannelKeyTest = function (test) {
  var expected = "004d0ec5ee3179c964fe7c0485c045541de6bff332b970ca35de60c44645bbae8a215061b3314464554720383bbf51446455471";
  var actual = DynamicKey4.generateMediaChannelKey(appID, appCertificate, channel, ts, r, uid, expiredTs);
  test.equal(expected, actual);
  test.done();
};
