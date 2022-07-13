/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import Domain from '../base/Domain';
import V1 from './chat/V1';
import V2 from './chat/V2';
import V3 from './chat/V3';

class ChatBase extends Domain {
    _v1?: V1;
    _v2?: V2;
    _v3?: V3;

    /**
     * Initialize chat domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any) {
        super(twilio, 'https://chat.twilio.com');
    }

    get v1(): V1 {
        this._v1 = this._v1 || new V1(this);
        return this._v1;
    }
    get v2(): V2 {
        this._v2 = this._v2 || new V2(this);
        return this._v2;
    }
    get v3(): V3 {
        this._v3 = this._v3 || new V3(this);
        return this._v3;
    }
}

export = ChatBase;
