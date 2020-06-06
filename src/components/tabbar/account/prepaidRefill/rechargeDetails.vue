<template>
    <div class="recharge-details">
        <balance-header title="账单详情"></balance-header>
        <div class="recharge-body">
            <p class="h1">- GHS 99.00</p>
            <p class="h2">交易关闭</p>
            <div class="field">
                <div class="field-left fl-left">订单编号</div>
                <div class="field-right fl-right">596461661616166165</div>
            </div>
            <div class="field">
                <div class="field-left fl-left">充值号码</div>
                <div class="field-right fl-right">596461661616166165</div>
            </div>
            <div class="field">
                <div class="field-left fl-left">实际到账</div>
                <div class="field-right fl-right c-orange">GHS 100</div>
            </div>
            <div class="field">
                <div class="field-left fl-left">应付金额</div>
                <div class="field-right fl-right">596461661616166165</div>
            </div>
            <div class="field">
                <div class="field-left fl-left">实付金额</div>
                <div class="field-right fl-right">596461661616166165</div>
            </div>
            <div class="field">
                <div class="field-left fl-left">下单时间</div>
                <div class="field-right fl-right">596461661616166165</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import balanceHeader from './itemComponents/balanceHeader'
export default {
    props: {

    },
    data() {
        return {

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

    },
    components: {
        balanceHeader
    },
};
</script>

<style scoped lang="less">
.recharge-details{
    background-color: #fff;
    height: 100vh;
    .recharge-body{
        padding: 70px 30px 0;
        .h1{
            font-size:46px;
            color: #333;
            font-weight:bold;
            text-align: center;
        }
        .h2{
            margin:22px 0 87px;
            font-size:26px;
            text-align: center;
        }
        .field{
            height: 65px;
            font-size: 28px;
            .field-left{
                color: #999;

            }
        }
    }
}
</style>
