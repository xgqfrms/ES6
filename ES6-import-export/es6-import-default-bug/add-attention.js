"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description addAttention 添加关注(包含企业，领域)
 * @augments POST /isv/duck/jt/user/attention/add
 * @example
 * @link
 *
 */

import IPs from "./ips.js";
import APIs from "./apis.js";
// import {IPs} from "./ips.js";
// import {APIs} from "./apis.js";

const addAttention = (datas = [], debug = false) => {
    let result = ``;
    // do something...
    let log = console.log;
    // let error = console.error;
    log(`IPs =`, JSON.stringify(IPs, null, 4));
    log(`APIs =`, JSON.stringify(APIs, null, 4));
    return result;
};

export default addAttention;

export {
    addAttention,
};
