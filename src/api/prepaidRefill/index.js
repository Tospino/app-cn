import {main, park} from '@/api/index'
//话费充值产品列表
export function topupFlexiProductListApi(params) {
    return park({
        url:`/appWallet/TopupFlexiProductList`,
        method: 'POST',
        data:params
    })
}

//生成话费充值订单
export function addPhoneRechargeOrderApi(params) {
    return park({
        url:`/appWallet/addPhoneRechargeOrder`,
        method: 'POST',
        data:params
    })
}
