# next-weapp-parallel
> Async/parallel for weapp based on next.


## apis:
| api     | args        | description           |
|---------|-------------|-----------------------|
| request | request api | Instead of wx.request |


## usage:
```js
import NxWeappParallel from 'next-weapp-parallel';

NxWeappParallel.request({
  url: 'test.php', // 仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success(res) {
    console.log(res.data)
  },
  complete(){
  }
})
```


## resources:
- https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html
- thanks to `wepy` mq-request
