/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Oauth = require('../Oauth');
import Version = require('../../base/Version');
import { OauthList } from './v1/oauth';
import { OauthListInstance } from './v1/oauth';
import { OpenidDiscoveryList } from './v1/openidDiscovery';
import { OpenidDiscoveryListInstance } from './v1/openidDiscovery';
import { TokenList } from './v1/token';
import { TokenListInstance } from './v1/token';
import { UserInfoList } from './v1/userInfo';
import { UserInfoListInstance } from './v1/userInfo';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Oauth
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Oauth);

  readonly oauth: OauthListInstance;
  readonly openidDiscovery: OpenidDiscoveryListInstance;
  readonly token: TokenListInstance;
  readonly userInfo: UserInfoListInstance;
}

export = V1;
