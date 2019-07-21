'use strict'


const {
	SuccessModel,
	ErrorModel
} = require('../models/resModel')

const request = require('request')

const base_url = 'http://127.0.0.1:8000/kmas'

const table = 'users'

exports.mubu_list = async (idata)=>{
	let url = `${base_url}/${idata.author}/${table}/list?page=${idata.page}&limit=${idata.limit}`	
	const res_data = await request(url,function (error, response, data) {	   
	    if(error){
			return new ErrorModel()
		}else{
			console.log(`--error:${error}--response:${JSON.stringify(response)}--data:${JSON.stringify(data)}--`)
			return data
		}	    
	});
	return res_data
}
exports.mubu_new = async (idata)=>{
	let url = `${base_url}/${idata.author}/${table}/add`
		console.log(`--data:${idata.data}--url:${idata.data.data}`)
	let form = JSON.stringify(idata.data)
	const res_data = await request({
        url: url,
        method: "POST",
        headers: {            
			'Content-Type':'application/json'
        },
        body: form
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 请求成功的处理逻辑
			return body
        }


})
return res_data
}
