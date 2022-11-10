'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('SettingsUpdate', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'settings_updates': [
              {
                  'sid': 'OBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'scheduled',
                  'packages': [
                      {
                          'name': 'base-settings',
                          'version': '1.0.0',
                          'more_info': 'https://twilio.com/docs/iot/supersim/settings-packages/base-settings'
                      }
                  ],
                  'date_completed': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'settings_updates'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.settingsUpdates.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'settings_updates': [
              {
                  'sid': 'OBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'scheduled',
                  'packages': [
                      {
                          'name': 'base-settings',
                          'version': '1.0.0',
                          'more_info': 'https://twilio.com/docs/iot/supersim/settings-packages/base-settings'
                      }
                  ],
                  'date_completed': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'settings_updates'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.settingsUpdates.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://supersim.twilio.com/v1/SettingsUpdates',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'settings_updates': [
              {
                  'sid': 'OBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'scheduled',
                  'packages': [
                      {
                          'name': 'base-settings',
                          'version': '1.0.0',
                          'more_info': 'https://twilio.com/docs/iot/supersim/settings-packages/base-settings'
                      }
                  ],
                  'date_completed': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'settings_updates'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.settingsUpdates.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.settingsUpdates.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/SettingsUpdates';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'settings_updates': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'settings_updates'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.settingsUpdates.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'settings_updates': [
              {
                  'sid': 'OBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '89883070000123456789',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'scheduled',
                  'packages': [
                      {
                          'name': 'base-settings',
                          'version': '1.0.0',
                          'more_info': 'https://twilio.com/docs/iot/supersim/settings-packages/base-settings'
                      }
                  ],
                  'date_completed': '2015-07-30T20:00:00Z',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SettingsUpdates?Sim=1234567890123456789&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'settings_updates'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.settingsUpdates.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
