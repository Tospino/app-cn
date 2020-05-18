<template>
<!-- 平台介绍 -->
    <div class="introduce">
        <div class="title" v-if="showTitle">关于我们</div>
        <p>
            <br>经国家批准、国家工商总局核准，卜鸣（深圳）网络技术有限公司正式成立于2019年4月17日，公司总部位于广东省深圳市光明区。
            <br>
            <br>Tospino成立背景
            <br>“一带一路”是中国新一轮开放和走出去战略重点。秉承古代丝绸之路和平合作，开放包容，互学互鉴，互利共赢精神，国家主席习近平指出，一带一路建设主要做好五个互通：政策沟通，道路交通，贸易畅通，货币互通，民心相通。
            <br>商务外交在与中国开展经贸合作与关系，及全球发展中发挥着重要的影响与意义。
            <br>
            <br>
            <br>公司旨在利用互联网技术，通过“一带一路”的经贸纽带，使得中国与“一带一路”各国建立更加友好的国际关系，将中国过剩的产能走出去，中国需要的战略资源引进来，构建“人类命运共同体”。
            <br>
            <br>2020年1月9日，公司当选为中国商务部直属协会-------中国欧洲经济技术合作协会（以下简称中欧协会）副理事长单位、全球跨境电商产业促进委员会发起单位。同时，公司还在国家有关部门和相关协会的领导和授权下，搭建了“卜鸣集购平台”，即“Tospino（http://www.tospino.com/）”。
            <br>
            <br>关于Tospino：
            <br>Tospino是面向全球用户的跨境电子商务服务平台，主要由主页，类别，购物车和个人中心四个功能模块组成。它具有产品搜索、浏览、收藏、购买、在线付款/货到付款、订单查询、物流跟踪和售后服务等完整的在线功能。致力于为企业提供一站式智能跨境服务、降低成本、与海外商家无缝连接。
            <br>一键下单，送货上门，为用户提供更方便快捷的购物体验。
            <br>
            <br>资源优势：
            <br>在国家相关部门和协会的指导意见下，积极谋求与各地政府及境外机构合作，汇聚上游商家群体，组建跨区域、跨行业联盟，不断加强组织体系建设。
            <br>
            <br>平台优势
            <br>运营：全方位开店指导，落地式实训教学
            <br>团队：外派管理团队，线上线下同步推广
            <br>物流：FBT全程物流跟踪，订单实时监测
            <br>仓储：自建海外仓储，库存实时同步
            <br>曝光：Facebook、Twitter、Instagram、YouTube等平台全面覆盖
            <br>政策：响应国家“一带一路”政策，助力中国卖家走向世界
            <br>
            <br>
            <br>APP功能优势：
            <br>多方位产品推荐展示
            <br>六大移动搜索模式
            <br>国际化英语操作界面
            <br>精品热门推荐，提高购买率
            <br>实时订单管理，尊享售后服务
            <br>
            <br>Tospino官方客服联系电话:0755-2989-0666
            <br>入驻资讯微信：ShenzhenBooming1
            <br>卖家支持邮箱：business@tospino.com 
            <br>卖家帮助中心：<a href="http://www.tospino.com/help/issueList/2?classifyName">http://www.tospino.com/help/issueList/2?classifyName</a>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        showTitle:{
            type:Boolean,
            default:true
        }
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

    },
};
</script>

<style scoped lang="less">
.title{
    margin:72px 0 41px;
    font-weight:bold;
    font-size:32px;
    text-align: center;
}
p{
    padding: 0 30px 131px;
    font-size:26px;
    line-height:39px;
    color: #333;
}
.jiacu{
    font-size:30px;
    font-weight: bold;
}
</style>
