<template>
  <div class="detail" id="detail">
    <div class="detail-wrap">
        <div class="intro">
            <p class="intro-tit">今日认购总额（元）</p>
            <h2 class="intro-tit">￥20,000</h2>
            <ul class="intro-total">
                <li><a class="btn"><em>借款金额</em><b>￥200,000</b></a></li>
                <li><a class="btn"><em>起投金额</em><b>￥100</b></a></li>
                <li><a class="btn"><em>借款期限</em><b>30天</b></a></li>
                <li><a class="btn"><em>利率</em><b>10%</b></a></li>
            </ul>
        </div>
        <div class="product">
            <div class="pro-tit g-tit" @click="toggle()">
              <a class="btn l" href="javascript:;"><i class="iconfont icon-wodedingdan"></i><em>项目详情</em></a>
              <a class="btn r" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
            </div>
            <div class="pro-info" v-show="show">
                <p><span>融资方：</span>融资方为八戒宝战略合作机构：中汇银和融资租赁有限公司，注册资本3000万美元。业务涉及融资租赁业务、租赁业务、向国内外购买租赁财产、租赁财产的残值处理及维修、租赁交易的咨询。中汇银和融资租赁有限公司拥有高效的经营管理架构、完善的财务治理结构以及较强的风险管控能力，努力实现组织系统化、决策科学化、管理规范化和作业标准化。中汇银和融资租赁有限公司将全程监控企业资金流向，并实地勘验该企业真实运营情况，保障资金安全，并将回款优先偿还项目本息。</p>
                <p><span>借款方：</span>借款企业成立于2005年，注册资本1100万元。主营业务：交通安全设施销售与安装；公路工程施工、园林绿化工程设计及施工。企业经营近10年，产品遍布全省十多个地、市、区，是全省较早的专业性厂家，业绩在同行中位属前列。</p>
                <p><span>资金托管：</span>投资资金由第三方机构托管，资金账户与八戒宝公司账户风险隔离。</p>
                <p><span>还款及收益说明：</span>天天赚采用“每日返息，到期还本”的收益方式，即每日赚得固定利息，并由八戒宝先行垫付。最后一期回收全部本金。</p>
                <p><span>加入规则：</span>投资者可在八戒宝官网进行充值投资。认购金额最低50元，50元递增，本期认购无上限，直至投满为止。</p>
                <p><span>相关费用：</span>天天赚产品0加入费，用户只需承担提现所产生的费用。单笔提现金额小于5万元的，每笔收取1元提现手续费；单笔提现金额大于等于5万元，每笔收取5元提现手续费。</p>
            </div>
        </div>
        <div class="product">
            <div class="pro-tit g-tit">
              <a class="btn l" href="javascript:;"><i class="iconfont icon-wodejuhuasuan"></i><em>认购记录</em></a>
              <a class="btn r" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
            </div>
            <div class="pro-info">
                <table class="tab-wrap" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <th>用户</th>
                        <th>日期</th>
                        <th>金额</th>
                    </tr>
                    <tr>
                        <td>138****1122</td>
                        <td>11-21</td>
                        <td>50,000</td>
                    </tr>
                    <tr>
                        <td>158****3366</td>
                        <td>11-28</td>
                        <td>80,000</td>
                    </tr>
                    <tr>
                        <td>138****1122</td>
                        <td>11-21</td>
                        <td>50,000</td>
                    </tr>
                    <tr>
                        <td>158****3366</td>
                        <td>11-28</td>
                        <td>80,000</td>
                    </tr>
                    <tr>
                        <td>138****1122</td>
                        <td>11-21</td>
                        <td>50,000</td>
                    </tr>
                    <tr>
                        <td>158****3366</td>
                        <td>11-28</td>
                        <td>80,000</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
    name: "myForm",
    components: {},
    data() {
        return {
            title: '产品详情',
            msg: 'msg',
            show:false
        }
    },
    mounted() {
        this.$parent.title = this.title;
        this.initScroll();
    },
    methods: {
        initScroll() {
            new BScroll(document.getElementById('detail'), {
                preventDefault:true,
                click:true
            });
        },
        toggle(){
            this.show =! this.show;
            this.$nextTick(function(){
                this.initScroll();
            });
        }
    }
}
</script>
<style lang="sass" scoped>
    /* @import 'detail.css'; */
.app-view{
    background-color: #f1f1f1;
}
.intro {
    min-height: 180px;
    padding-top: 10px;
    color: #fff;
    background-color: #f90;
    position: relative;
}
.intro-tit {
    line-height: 44px;
    text-align: center;
}
.intro-total {
    margin-top: 20px;
    overflow: hidden;
    li {
        float: left;
        width: 25%;
        text-align: center;
    }
    .btn {
        display: block;
        z-index: 1;
        cursor: pointer;
        position: relative;
    }
    em {
        display: block;
        border-right: 1px solid #fff;
    }
    b {
        display: block;
        font-weight: 600;
        margin-top: 5px;
        font-size: 16px;
    }
}
.product {
    background-color: #fff;
    margin-bottom: 10px;
}
.pro-tit {
  border-bottom: 1px solid #f1f1f1;
  .iconfont{
    display: inline-block;
    text-align: center;
    font-size: 18px;
    color: #333;
  }
  .r,
  .l{
    width: auto;
    font-size: 14px;
    color: #333;
  }
  .l{
    .iconfont{
      padding-right:5px;
    }
  }
  .r{
    .iconfont{
      font-size: 14px;
    }
  }
}
.pro-info {
    padding: 10px;
    overflow:hidden;
    p {
        color: #999;
        font-size: 12px;
        text-indent: 2em;
        line-height: 20px;
        margin-bottom: 20px;
    }
    span {
        color: #f90;
    }
}
.tab-wrap {
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    th,
    td {
        color: #666;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        border-collapse: collapse;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
}
</style>
