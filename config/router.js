'use strict'

const Router = require('koa-router')
const app = require('../app/router_handle/app')

module.exports = function(){
	var router = new Router({
    prefix: '/ata'
  })

  // DB Interface test
  // router.get('/list',User.list)
  // router.post('/add',User.add)
  // router.post('/update',User.update)
  // router.post('/delete',User.del)
  // router.get('/mongodb/findQuery',User.findQuery)
  router.get('/:author/list',app.list)
  router.post('/:author/add',app.add)
  

  return router
}