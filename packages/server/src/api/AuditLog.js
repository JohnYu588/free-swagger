/* eslint-disable */
// generated by free-swagger

import axios from "axios";
/** 
 * @description  
 * @param {{
    "StartDate": string
}} params 
 **/

export const GetAuditLogs = (params) =>
  axios.request({
    url: `/v1/api/services/app/AuditLog/GetAuditLogs`,
    method: "get",
    params: params,
    data: {}
  });