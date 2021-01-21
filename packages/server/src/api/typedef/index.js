// generated by free-swagger-client
    
/**
 * @typedef {
 *   {
 *     'items': T[]
 *     'totalCount': number
 *   }
 * } PagedResultDto<T>
**/

/**
 * @typedef {
 *   {
 *     'result': boolean
 *     'code': "Success" | "Timeout" | "Fail" | "Expired" | "Error" | "InternalServerError" | "InvalidAnonymousAccess" | "UserSessionExpired" | "UserIsBinded"
 *     'data': string
 *     'message': string
 *   }
 * } JsonResult<T>
**/

/**
 * @typedef {
 *   {
 *     'product_id': string
 *     'description': string
 *     'display_name': string
 *     'capacity': string
 *     'image': string
 *   }
 * } Product
**/

/**
 * @typedef {
 *   {
 *     'product_id': string
 *     'currency_code': string
 *     'display_name': string
 *     'estimate': string
 *     'low_estimate': number
 *     'high_estimate': number
 *     'surge_multiplier': number
 *   }
 * } PriceEstimate
**/

/**
 * @typedef {
 *   {
 *     'first_name': string
 *     'last_name': string
 *     'email': string
 *     'picture': string
 *     'promo_code': string
 *     'role': RoleType
 *   }
 * } Profile
**/

/**
 * @typedef {
 *   {
 *     'uuid': string
 *   }
 * } Activity
**/

/**
 * @typedef {
 *   {
 *     'offset': number
 *     'limit': number
 *     'count': number
 *     'history': Activity[]
 *   }
 * } Activities
**/

/**
 * @typedef {
 *   {
 *     'userId': number
 *     'userRights': ("View" | "Operate" | "Auth" | "Search" | "Delete" | "UserManage" | "UserConfig" | "SetTime" | "SetNetwork" | "SetSms" | "SystemManage")[]
 *   }
 * } CreateOrUpdateUserInput
**/

/**
 * @typedef {
 *   {
 *     'id': string
 *     'isLow': boolean
 *   }
 * } Abc
**/

/**
 * @typedef {
 *   {
 *     'foo': ("0" | "1" | "2" | "4" | "8")[]
 *     'bar': ("0" | "1" | "2" | "3")[]
 *   }
 * } NumberArrayEnumModel
**/

/**
 * @typedef {
 *   {
 *     'code': number
 *     'message': string
 *     'fields': string
 *   }
 * } Error
**/

/**
 * @typedef {
 *   {
 *     'userId': number
 *     'id': number
 *   }
 * } AuditLogListDto
**/
