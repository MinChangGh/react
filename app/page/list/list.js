import React from '_react@15.6.2@react'

class List extends React.Component {
  constructor() {
    super()
    this.state = {
      list:[
        {
          category_id: 3,
          product_comment_num: 503,
          product_detail: "品牌: sibyl of no.17↵ 货号: C1510074↵ 服装版型: 斗篷型↵ 厚薄: 常规↵ 风格: 街头↵ 街头: 欧美↵ 衣长: 短款↵ 袖长: 长袖↵ 领子: 立领↵ 袖型: 其他↵ 衣门襟: 单排扣↵ 图案: 形状↵ 面料材质: 其他↵ 成分含量: 91%(含)-95%(含)↵ 填充物: 其他↵ 适用年龄: 25-29周岁↵ 年份/季节: 2015年冬季↵ 颜色分类: 白色 黑色↵ 尺码: S M L↵",
          product_hot: 1,
          product_id: 4,
          product_img_url: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
          product_name: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
          product_num: "100",
          product_price: 596,
          product_search_hot: 1,
          product_special: 0,
          product_uprice: 298,
          shop_id: 2
        }
      ]
    }
    this.PostToFa = this.PostToFa.bind(this)
  }

  componentWillMount() {

  }

  PostToFa(data) {
    this.props.toChild(data)
  }

  render() {
    const { list } = this.state
    return (
      <div className='list-page'>
        {
          list.map((item,index)=>{
            return(
              <div key={index}>
                <img src={item.product_img_url}/>
                <p>{item.product_price}</p>
                <p>{item.product_name}</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default List;
