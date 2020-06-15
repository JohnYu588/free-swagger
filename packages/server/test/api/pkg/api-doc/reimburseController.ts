// generated by free-swagger
// @ts-nocheck
/* eslint-disable */
import { Result, ReimbursementSaveRequest } from "./interface";
import axios, { AxiosResponse } from "axios";

// 初始化单据头
export const initReimbursementUsingPOST = () =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/reimbursements`,
    method: "post",
    params: {},
    data: {}
  });

// 查询单据详情
export const getReimbursementUsingGET = (
  params: { [key: string]: never },
  { unionId } = {
    unionId: string
  }
) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/reimbursements/${unionId}`,
    method: "get",
    params: {},
    data: {}
  });

// 更新单据头
export const saveReimbursementUsingPUT_1 = (
  params: ReimbursementSaveRequest,
  { unionId } = {
    unionId: string
  }
) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/reimbursements/${unionId}`,
    method: "put",
    params: {},
    data: params
  });

// 提交单据
export const submitReimbursementUsingPOST = (
  params: { [key: string]: never },
  { unionId } = {
    unionId: string
  }
) =>
  axios.request<Result, AxiosResponse<Result>>({
    url: `/v1/reimbursements/${unionId}`,
    method: "post",
    params: {},
    data: {}
  });