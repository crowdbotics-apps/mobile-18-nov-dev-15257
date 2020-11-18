import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_hgkhgj_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hgkhgj_list, action)
    yield put(actions.api_v1_hgkhgj_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hgkhgj_listFailed(err, action))
  }
}
function* api_v1_hgkhgj_listWatcher() {
  yield takeEvery(types.API_V1_HGKHGJ_LIST, api_v1_hgkhgj_listWorker)
}
function* api_v1_hgkhgj_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hgkhgj_create, action)
    yield put(actions.api_v1_hgkhgj_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hgkhgj_createFailed(err, action))
  }
}
function* api_v1_hgkhgj_createWatcher() {
  yield takeEvery(types.API_V1_HGKHGJ_CREATE, api_v1_hgkhgj_createWorker)
}
function* api_v1_hgkhgj_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hgkhgj_read, action)
    yield put(actions.api_v1_hgkhgj_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hgkhgj_readFailed(err, action))
  }
}
function* api_v1_hgkhgj_readWatcher() {
  yield takeEvery(types.API_V1_HGKHGJ_READ, api_v1_hgkhgj_readWorker)
}
function* api_v1_hgkhgj_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hgkhgj_update, action)
    yield put(actions.api_v1_hgkhgj_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hgkhgj_updateFailed(err, action))
  }
}
function* api_v1_hgkhgj_updateWatcher() {
  yield takeEvery(types.API_V1_HGKHGJ_UPDATE, api_v1_hgkhgj_updateWorker)
}
function* api_v1_hgkhgj_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hgkhgj_partial_update, action)
    yield put(actions.api_v1_hgkhgj_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hgkhgj_partial_updateFailed(err, action))
  }
}
function* api_v1_hgkhgj_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HGKHGJ_PARTIAL_UPDATE,
    api_v1_hgkhgj_partial_updateWorker
  )
}
function* api_v1_hgkhgj_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_hgkhgj_delete, action)
    yield put(actions.api_v1_hgkhgj_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_hgkhgj_deleteFailed(err, action))
  }
}
function* api_v1_hgkhgj_deleteWatcher() {
  yield takeEvery(types.API_V1_HGKHGJ_DELETE, api_v1_hgkhgj_deleteWorker)
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listWorker(
  action
) {
  try {
    const result = yield call(
      apiService.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_list,
      action
    )
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listFailed(
        err,
        action
      )
    )
  }
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listWatcher() {
  yield takeEvery(
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_LIST,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listWorker
  )
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createWorker(
  action
) {
  try {
    const result = yield call(
      apiService.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_create,
      action
    )
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createFailed(
        err,
        action
      )
    )
  }
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createWatcher() {
  yield takeEvery(
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_CREATE,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createWorker
  )
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readWorker(
  action
) {
  try {
    const result = yield call(
      apiService.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_read,
      action
    )
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readFailed(
        err,
        action
      )
    )
  }
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readWatcher() {
  yield takeEvery(
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_READ,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readWorker
  )
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateWorker(
  action
) {
  try {
    const result = yield call(
      apiService.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_update,
      action
    )
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateFailed(
        err,
        action
      )
    )
  }
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateWatcher() {
  yield takeEvery(
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_UPDATE,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateWorker
  )
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateWorker(
  action
) {
  try {
    const result = yield call(
      apiService.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_update,
      action
    )
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateFailed(
        err,
        action
      )
    )
  }
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_PARTIAL_UPDATE,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateWorker
  )
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteWorker(
  action
) {
  try {
    const result = yield call(
      apiService.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_delete,
      action
    )
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteFailed(
        err,
        action
      )
    )
  }
}
function* api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteWatcher() {
  yield takeEvery(
    types.API_V1_HLKGFDGFGFGDGFDGFDTRRERERTERSDADSDADSADSADS_DELETE,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_hgkhgj_listWatcher,
    api_v1_hgkhgj_createWatcher,
    api_v1_hgkhgj_readWatcher,
    api_v1_hgkhgj_updateWatcher,
    api_v1_hgkhgj_partial_updateWatcher,
    api_v1_hgkhgj_deleteWatcher,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_listWatcher,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_createWatcher,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_readWatcher,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_updateWatcher,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_partial_updateWatcher,
    api_v1_hlkgfdgfgfgdgfdgfdtrrerertersdadsdadsadsads_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_login_createWatcher,
    api_v1_signup_createWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
