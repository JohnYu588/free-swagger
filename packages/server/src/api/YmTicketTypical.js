/* eslint-disable */
// generated by free-swagger

import axios from "axios";
/**
 * @description 新增或编辑标准票, 需走审批流程  **/

// 新增或编辑标准票, 需走审批流程
export const AddOrUpdateTicketTypical = () =>
  axios.request({
    url: `/v1/api/services/app/YmTicketTypical/AddOrUpdateTicketTypical`,
    method: "post",
    params: {},
    data: {}
  });
