<template>
    <div class="recharge-flow">
        <balance-header title="充值记录"></balance-header>
        <div class="tips">仅展示近一年的记录</div>
        <div class="flow-con">
            <div class="flow-title">
                <div class="fl-left">2020-05</div>
                <div class="fl-right">支出 GHS 10.00</div>
            </div>
            <div class="flow-bill" @click="toDetail">
                <img src="@/assets/img/confirmOrder/huafei.png">
                <div class="bill-p1">
                    <div class="fl-left">充值号码:144 4755 4544</div>
                    <div class="fl-right">GHS 563.36</div>
                </div>
                <div class="bill-p1">
                    <div class="fl-left">实际到账:GHS 23.52</div>
                    <div class="fl-right">已取消</div>
                </div>
                <div class="bill-p2">2020-05-11 09:30:51</div>
                <div class="del-btn fl-right" @click="deleteItem">删除</div>
            </div>
        </div>
        <div class="place"></div>
        <zhezhao v-if="zhezhaoStatus">
            <div class="tankuang">
                <div class="tankuang-title">
                    <span>提示</span>
                    <div class="fl-right">
                        <van-icon name="cross" @click="zhezhaoStatus = false"/>
                    </div>
                </div>
                <div class="tankuang-con">
                    <p>删除后不能恢复,确认删除吗？</p>
                    <div class="btn-list">
                        <div class="fl-left qx" @click="zhezhaoStatus = false">取消</div>
                        <div class="fl-right qd" @click="confirm">确定</div>
                    </div>
                </div>
            </div>
        </zhezhao>
    </div>
</template>

<script>
import balanceHeader from './itemComponents/balanceHeader'
export default {
    props: {

    },
    data() {
        return {
            zhezhaoStatus:false
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        //删除按钮
        deleteItem(){
            this.zhezhaoStatus = true
        },
        //确地按钮
        confirm(){
            this.zhezhaoStatus = false
        },
        //到详情页
        toDetail(){
            this.$router.push({name:'话费充值详情'})
        }
    },
    components: {
        balanceHeader
    },
};
</script>

<style scoped lang="less">
.recharge-flow{
    .tips{
        font-size:24px;
        font-weight:800;
        color: #333;
        padding: 0 30px;
        margin:18px 0 34px;
    }
    .flow-con{
        .flow-title{
            overflow: hidden;
            margin:16px 30px;
        }
        .flow-bill{
            padding: 30px;
            background-color: #fff;
            line-height:27px;
            overflow: hidden;
            img{
                width: 44px;
                height: 44px;
                float: left;
            }
            .bill-p1{
                overflow: hidden;
                font-size:24px;
                margin-bottom: 11px;
                color: #333;
            }
            .bill-p2{
                font-size: 20px;
                color: #666;
                margin-left:44px;
            }
            .del-btn{
                padding: 10px 30px;
                border:1px solid rgba(102,102,102,1);
                border-radius:20px;
            }
        }
    }
    .tankuang{
        width: 560px;
        height: 360px;
        background-color: #fff;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        .tankuang-title{
            height: 100px;
            border-bottom: 1px solid #D4D5D7;
            line-height: 100px;
            font-size: 36px;
            font-weight:bold;
            color: #333;
            padding: 0 34px 0 40px;
        }
        .tankuang-con{
            padding-top: 60px;
            font-size: 28px;
            .btn-list{
                padding: 0px 80px;
                .qx{
                    padding: 15px 40px;
                    color: #999;
                    text-align: center;
                    border:1px solid rgba(153,153,153,1);
                }
                .qd{
                    padding: 15px 40px;
                    color: #fff;
                    text-align: center;
                    background:rgba(250,83,0,1);
                }
            }
            p{
                color: #333;
                margin-bottom: 40px;
                text-align: center;
            }
            
        }
    }
}
</style>
