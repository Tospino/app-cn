<template>
    <div>
        <div class="balance-header">
            <van-icon name="arrow-left" class="arrow-left" @click="$router.go(-1)"/>
            <span class="header-t1">{{title}}</span>
        </div>
        <div class="place"></div>
    </div>
    
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            default: ''
        },
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
        title2Click(){
            this.$emit('aaa')
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.balance-header{
    width: 100%;
    height: 88px;
    background-color: #f2f3f5;
    text-align: center;
    position: fixed;
    top:0;
    left:0;
    line-height: 88px;
    z-index: 3;
    .arrow-left{
        position: absolute;
        top:20px;
        left:30px;
        font-size: 40px;
        
    }
    .header-t1{ 
        display: inline-block;
        line-height: 88px;
        font-size: 36px;
        color: #010101;
    }
    .header-t2{
        position: absolute;
        right: 30px;
        font-size: 30px;
    }
}
.place{
    height: 88px;
}
</style>
