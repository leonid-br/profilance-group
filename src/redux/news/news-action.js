const { createAction } = require('@reduxjs/toolkit');

const addNews = createAction('news/addNews');
const verificationNews = createAction('news/verification');
const deleteNews = createAction('news/delete');
const getNews = createAction('news/getNews');

const actions = { addNews, getNews, verificationNews, deleteNews };

export default actions;
