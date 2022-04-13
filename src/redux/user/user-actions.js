const { createAction } = require('@reduxjs/toolkit');

const userVerification = createAction('user/check');

const actions = { userVerification };

export default actions;
