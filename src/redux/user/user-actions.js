const { createAction } = require('@reduxjs/toolkit');

const userVerification = createAction('user/check');
const logOut = createAction('user/logout');

const actions = { userVerification, logOut };

export default actions;
