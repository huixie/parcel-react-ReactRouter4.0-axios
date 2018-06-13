import React, { Component } from 'react'
import './index.less'

export default class page1 extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      command:'￥ztLr0DQOuGX￥'
    }
  }
  
  componentDidMount() {
    
  } 

  render() {
    return (
      <div className="page page-tmall-20180618">
        <img src={require('../../images/tmall-20180618/01.png')} alt='headImg'/>
        <div className="content">
          <section className="command">
            <p>618天猫年中狂欢节！千万红包疯狂发，最高抢618元！<span>{this.state.command}</span> 复制本段文字，打开【手机淘宝】，马上抢红包！</p>
            <div className="btn-box">
              <a>一键复制</a>
              <a>生成推广图</a>
            </div>
          </section>
          <section className="tip">
            <h3>活动规则：</h3>
            <p>推广618超级红包，用户领取并下单后，商品佣金归红包发布者，具有“锁佣”作用，先到先得。即用户先领取了谁的红包并下单使用，佣金便归该用户所有。</p>
            <h3>友情提示：</h3>
            <p>超级红包使用后佣金会减半，适于分享进行全面覆盖“锁佣”。</p>
            <p>自购付款时记得关闭红包抵扣，切忌因为这几毛钱红包因小失大哦。</p>
          </section>
          <h2>分享给好友 仅需3步</h2>
          <section className="step">
            <img src={require('../../images/tmall-20180618/step1.png')} alt="step1"/>
          </section>
          <section className="step">
            <img src={require("../../images/tmall-20180618/step2.png")} alt="step2"/>
          </section>
          <section className="step">
            <img src={require("../../images/tmall-20180618/step3.png")} alt="step3"/>
          </section>
        </div>
      </div>
    )
  }
}
