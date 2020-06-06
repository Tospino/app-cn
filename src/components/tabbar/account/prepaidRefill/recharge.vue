<template>
<!-- 账户余额 -->
    <div class="account-balance">
        <balance-header title="话费充值" title2="充值记录" @jumpRouter="jumpRouter" jumpName="话费充值记录"></balance-header>
        <div class="balance-bottom">
            <p class="bottom-p1">请输入充值的手机号</p>
            <div class="phone-input">
                <span class="quhao">+&nbsp; 233</span>
                <input type="number" class="phone-num" v-model="phone">
            </div>
            <div class="money-list">
                <div v-for="(prepaidMoney,index) in prepaidMoneyList" :key="index" :class="{active: index==currentIndex}" @click="choiceItem(prepaidMoney,index)">
                    <span class="mony1">{{prepaidMoney.money}}&nbsp;GHS</span><br>
                    <span class="mony2">售价:{{prepaidMoney.discountPrice}}&nbsp;GHS</span>
                </div>
                <div>
                    <span class="mony1">自定义</span>
                </div>
            </div>
            <div class="btn-next" @click="showyinhang">立即充值</div>
        </div>


        <!-- 确认付款弹窗 -->
        <!-- <action-sheet-paymen ref="paymen" @showpaymen="showpaymen"></action-sheet-paymen> -->
        
        <!-- 选择付款方式弹窗 -->
        <action-sheet-yinhang ref="yinhang" @showyinhang="showyinhang" @showpassword="showpassword" @showsucess="showsucess"></action-sheet-yinhang>

        <!-- 支付成功弹窗 -->
        <!-- <action-sheet-sucess ref="sucess" @showsucess="showsucess"></action-sheet-sucess> -->

        <!-- 支付密码 -->
        <!-- <action-sheet-password ref="password" @showpassword="showpassword"></action-sheet-password> -->

    </div>
</template>

<script>
import balanceHeader from './itemComponents/balanceHeader'
import actionSheetPaymen from "@/multiplexing/actionSheetPaymen"
import actionSheetYinhang from '@/multiplexing/actionSheetYinhang'
import actionSheetSucess from '@/multiplexing/actionSheetSucess'
import actionSheetPassword from '@/multiplexing/actionSheetPassword'
import {topupFlexiProductListApi,addPhoneRechargeOrderApi} from '@/api/prepaidRefill/index.js'
import {Toast} from 'vant'
export default {
    props: {

    },
    data() {
        return {
            prepaidMoneyList:[],
            showPaymen:false,
            phone:'',
            paidMoneyData:{
                userId:null,
                prepaidMoney:null,
                prepaidActuallyMoney:null,
                discount:null,
                paymentType:null
            },
            userinfoShop:{},
            currentIndex:null,
            currentItem:{}
        };
    },
    computed: {
        
    },
    created() {

    },
    mounted() {
        if(localStorage.userinfoShop){
            this.userinfoShop =  JSON.parse(localStorage.userinfoShop)
            this.paidMoneyData.userId = this.userinfoShop.userId
        }
        this.topupFlexiProductList()
    },
    watch: {

    },
    methods: {
        jumpRouter(name){
            this.$router.push({name})
        },
        //话费充值产品列表
        topupFlexiProductList(){
            topupFlexiProductListApi().then(res => {
                if(res.status_code == 200){
                    this.prepaidMoneyList = res.data.prepaidMoneyList
                }
                Toast.clear()
            })
        },
        //生成话费充值订单
        addPhoneRechargeOrder(data){
            addPhoneRechargeOrderApi(data).then(res => {
                if(res.status_code == 200){
                    
                }
                Toast.clear()
            })
        },
        //选择模块
        choiceItem(data,index){
            this.currentIndex = index
            this.currentItem = data
        },
        //弹出银行
        showyinhang(){
            this.$refs.yinhang.showAction = true
        },
        //弹出支付
        showpaymen(){
            this.$refs.paymen.showAction = true
        },
        //弹出支付成功
        showsucess(){
            this.$refs.sucess.showAction = true
        },
        //弹出密码框
        showpassword(){
            this.$refs.password.showAction = true
        },
    },
    components: {
        balanceHeader,
        actionSheetPaymen,
        actionSheetYinhang,
        actionSheetSucess,
        actionSheetPassword
    },
};
</script>

<style scoped lang="less">
.account-balance{
    .balance-bottom{
        padding: 39px 30px 0;
        .bottom-p1{
            font-size:20px;
            color: #666;
            margin-bottom: 19px;
        }
        .phone-input{
            padding: 20px 0;
            width: 690px;
            border-bottom: 1px solid #666666;
            margin-bottom: 60px;
            line-height: 80px;
            .quhao{
                font-size:30px;
                color: #666;
            }
            .phone-num{
                margin-left:20px;
                width: 500px;
                font-size: 50px;
                border: 0;
                background-color: #F8F8FA;
                font-weight: 800;
            }
        }
        .money-list{
            display: -webkit-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            div{
                width:220px;
                height:170px;
                border:2px solid #D2D2D2;
                border-radius:10px;
                // line-height: 60px;
                text-align: center;
                color: #333;
                margin: 0 6px 15px 0;
                &:nth-last-child(1){
                    margin-right:0
                }
            }
            .active{
                border:2px solid rgba(250,83,0,1);
                box-shadow:0px 4px 8px 0px rgba(228,76,0,0.3);
                color: #FA5300;
            }
            .mony1{
                display: inline-block;
                margin-top: 62px;
                font-size: 34px;
                font-weight:bold;
                margin-bottom: 9px;
                
            }
            .mony2{
                display: inline-block;
                font-size: 22px;
            }
        }
        .btn-next{
            height:88px;
            border-radius:10px;
            line-height: 88px;
            text-align: center;
            color: #fff;
            margin:20px 0 79px;
            font-size: 36px;
            background-color: #FA5300;
            margin-top: 200px;
        }
    }
}
</style>
