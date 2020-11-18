import * as types from "./constants"
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})

export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})

export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})

export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})

export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})

export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})

export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})

export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})

export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})

export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})

export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})

export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})

export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})

export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})

export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})

export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})

export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})

export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})

export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})

export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})

export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})

export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})

export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})

export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})

export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})

export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_hgkhgj_list = () => ({ type: types.API_V1_HGKHGJ_LIST })
export const api_v1_hgkhgj_listSucceeded = (response, starter) => ({
  type: types.API_V1_HGKHGJ_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_hgkhgj_listFailed = (error, starter) => ({
  type: types.API_V1_HGKHGJ_LIST_FAILED,
  error,
  starter
})

export const api_v1_hgkhgj_create = data => ({
  type: types.API_V1_HGKHGJ_CREATE,
  data
})

export const api_v1_hgkhgj_createSucceeded = (response, starter) => ({
  type: types.API_V1_HGKHGJ_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hgkhgj_createFailed = (error, starter) => ({
  type: types.API_V1_HGKHGJ_CREATE_FAILED,
  error,
  starter
})

export const api_v1_hgkhgj_read = () => ({ type: types.API_V1_HGKHGJ_READ })
export const api_v1_hgkhgj_readSucceeded = (response, starter) => ({
  type: types.API_V1_HGKHGJ_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_hgkhgj_readFailed = (error, starter) => ({
  type: types.API_V1_HGKHGJ_READ_FAILED,
  error,
  starter
})

export const api_v1_hgkhgj_update = data => ({
  type: types.API_V1_HGKHGJ_UPDATE,
  data
})

export const api_v1_hgkhgj_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HGKHGJ_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hgkhgj_updateFailed = (error, starter) => ({
  type: types.API_V1_HGKHGJ_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_hgkhgj_partial_update = data => ({
  type: types.API_V1_HGKHGJ_PARTIAL_UPDATE,
  data
})

export const api_v1_hgkhgj_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HGKHGJ_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hgkhgj_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HGKHGJ_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_hgkhgj_delete = () => ({ type: types.API_V1_HGKHGJ_DELETE })
export const api_v1_hgkhgj_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_HGKHGJ_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hgkhgj_deleteFailed = (error, starter) => ({
  type: types.API_V1_HGKHGJ_DELETE_FAILED,
  error,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_list = () => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_LIST
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_LIST_SUCCEEDED,
  response,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listFailed = (
  error,
  starter
) => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_LIST_FAILED,
  error,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_create = data => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_CREATE,
  data
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createSucceeded = (
  response,
  starter
) => ({
  type:
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_CREATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createFailed = (
  error,
  starter
) => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_CREATE_FAILED,
  error,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_read = () => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_READ
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_READ_SUCCEEDED,
  response,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readFailed = (
  error,
  starter
) => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_READ_FAILED,
  error,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_update = data => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_UPDATE,
  data
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateSucceeded = (
  response,
  starter
) => ({
  type:
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateFailed = (
  error,
  starter
) => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_update = data => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_PARTIAL_UPDATE,
  data
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateSucceeded = (
  response,
  starter
) => ({
  type:
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateFailed = (
  error,
  starter
) => ({
  type:
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_PARTIAL_UPDATE_FAILED,
  error,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_delete = () => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_DELETE
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteSucceeded = (
  response,
  starter
) => ({
  type:
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_DELETE_SUCCEEDED,
  response,
  starter
})

export const api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteFailed = (
  error,
  starter
) => ({
  type: types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_DELETE_FAILED,
  error,
  starter
})
