'use strict'

const {
	SuccessModel,
	ErrorModel
} = require('../models/resModel')
const {mubu_list,mubu_new} = require('../controllers/request_ctrl')
const request = require('request')


exports.list = async (ctx) => {
	const query = ctx.request.query
	const params = ctx.params
	const author = params.author
	if (!author) {
		ctx.body = new ErrorModel('body.author 没有赋值,必须赋值才能看到相应数据列表')
		return false
	}
	if (typeof author !== 'string') {
		ctx.body = new ErrorModel(`body.author 的数据类型应该是string,实际数据类型是${typeof author}`)
		return false
	}


	const limit_data = query.limit || 20 //limit_data赋值，默认为20
	const page_data = query.page || 1 //page_data赋值，默认为1    

	const res_data = await mubu_list({
		author,
		page:page_data,
		limit:limit_data
	})
	ctx.body = res_data
	return
}

exports.add = async (ctx) => {
	const params = ctx.params
	const author = params.author
	const data = ctx.request.body
	console.log(`--data:${data}--type:${typeof data}--`)
	const res_data = await mubu_new({
		author,
		data
	})
	ctx.body = res_data
	return
}

