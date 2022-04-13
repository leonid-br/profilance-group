const { createAction } = require('@reduxjs/toolkit');

const addNews = createAction('news/addNews');

const actions = { addNews };

export default actions;
