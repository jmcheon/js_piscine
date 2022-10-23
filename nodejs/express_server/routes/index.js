const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');
const auth = require('../lib/auth');

router.get('/', (request, response) => {
    title = 'Welcome';
    let data = 'HTML, CSS and JavaScript';
    let list = template.list(request.list);
    let html = template.html(title, list, 
        `
        <h2>${title}</h2>
        <p>${data}</p>
        <img src="server.jpg" style="width:500px; height 500px; display:block; margin-top:10px"/>
        `,
        `<a href="/topic/create">create</a>`,
        auth.statusUI(request, response));
    response.send(html);
})

module.exports = router;