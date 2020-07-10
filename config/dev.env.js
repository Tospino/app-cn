/*
 * @Author: your name
 * @Date: 2020-07-09 09:59:18
 * @LastEditTime: 2020-07-10 10:10:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app-cn\config\dev.env.js
 */

'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    //   SHOP_API:'"http://47.115.5.76:8082"',   //ERP api
    // SHOP_API:'"http://serviceapp.tospino.com"',   //ERP api
    // SHOP_API:'"http://192.168.3.107:93"',   //ERP api
    // SHOP_API: '"http://192.168.3.107:83"',   //ERP api 韦业斌
    SHOP_API: '"http://192.168.3.8:83"',   //ERP api 周弘恩
})
