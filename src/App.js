import React from 'react';
import './App.css';
import { PageHeader, Divider, Typography,Button, Result,Spin } from 'antd';
import 'antd/dist/antd.css';
import Video from './Video';
import logo from './static/logo.jpg';
import { useState, useEffect } from "react";

// function useCount() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((v) => v + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return {
//     count
//   };
// }
// const { count } = useCount();
const baseTime = [
  5,2,2,2
]

const picList=[
  './static/1/image1-00001.jpeg',
  './static/2/image2-00001.jpeg',
  './static/3/image3-00001.jpeg',
  './static/4/image4-00001.jpeg'
]

const randWord = [
  '跑步','踢腿','洗手','打太极','跳踢踏舞','投篮'
]

const title="电信 实时动作识别 评分系统"
const subTitle="实时 精确 互动 评分 多维信息"
const { Title, Paragraph, Text, Link } = Typography;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timer:0,
      status:0,
      cur:0,
      curRandLen:5,
      nextPic:'',
    };
  }
  componentDidMount() {
    console.log('计时器触发')
    this.timerID = setInterval(
      this.tick.bind(this),
      3000//每1秒轮询一次
    );
  }

  // updateVisable(status) {
  //   let sTool=[false,false,false,false];
  //   sTool[status]=true;
  //   this.setState({//todo 这里怎么不能用... []写啊，再试试
  //     visible1:sTool[0],
  //     visible2:sTool[1],
  //     visible3:sTool[2],
  //     visible4:sTool[3],
  //   });
  // }

  tick() {
    let cur = this.state.cur+1;
    let curRandLen = this.state.curRandLen;
    let status= this.state.status;
    let nextPic=this.state.nextPic;
    console.log(curRandLen,cur,status)
    if(cur>=baseTime[status]) {//本状态【本该】到时
      if(curRandLen>baseTime[this.state.status]) {//但本状态的下一状态的视频未到位 
        //循环播放当前视频
        // todo
        this.setState({
          cur,
        });
      } else { //本状态的下一状态的视频已到位，切换状态
        console.log('状态切换',curRandLen,cur,status)
        status=(status+1)%4;
        nextPic=picList[status]
        // this.updateVisable(status);
        cur=0;
        //随机生成新的curRandLen
        //todo 在线版本删掉这里的随机过程，增添查询or后端通知
        // curRandLen=baseTime[status]*(parseFloat((Math.random()*0.6).toFixed(1))+0.7);//从0.7-1.3的随机倍数
        curRandLen=baseTime[status]
        // console.log('状态',status+1,'延迟到来:',curRandLen>baseTime[status],',需要',curRandLen,'s。')
        
      }
    }
    console.log(curRandLen,cur,status)
    this.setState({
      status,
      cur,
      curRandLen,
    });
    return;
  }


  render() {
    return (
      <div className='App'>
        {/* {count} */}
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          backIcon={<img src={require('./static/logo.jpg')} alt="" height="30px"></img>}
          title={title}
          subTitle={subTitle}
        />
        <div className="activeArea">

          <div className='VideoArea' style={{display:this.state.status===0?'block':'none'}}>
            <img className='pic1' src={require('./static/1/image1-00001.jpeg')} alt="1111"></img>
            <div style={{height:'100px'}}></div>
              <Typography>
              <Title>基于深度学习的动作识别及评分系统介绍</Title>
              <Paragraph>
                基于深度学习的动作识别及评分系统介绍文案 基于深度学习的动作识别及评分系统介绍文案 基于深度学习的动作识别及评分系统介绍文案 基于深度学习的动作识别及评分系统介绍文案 
              </Paragraph>
            </Typography>
          </div>

          <div className='VideoArea'  style={{display:this.state.status===1?'block':'none'}}>
            <img className='pic1' src={require('./static/1/image1-00001.jpeg')} alt="1111"></img>
            <Result
              status="success"
              title="已捕捉到您的运动内容"
              subTitle="提取骨骼信息后，基于深度学习的解决方案将识别您的动作种类，并返回评分哦！"
            />
          </div>

          <div className='VideoArea'  style={{display:this.state.status===2?'block':'none'}}>
            <img className='pic1' src={require('./static/2/image2-00001.jpeg')} alt="1111"></img>
          </div>

          <div className='TwoVideoArea'  style={{display:this.state.status===3?'block':'none'}}>
            <div class="picDiv2-1">
              <img className='pic2-1' src={require('./static/1/image1-00001.jpeg')} alt="1111"></img>
              <div className='desc2'>
                <Spin/> 
                <Title level={4}>
                  您的动作识别为体操
                </Title >
                <Title level={5}>
                  
                </Title >
            </div>
              
            </div>
            
            <div class="picDiv2-2">
              <img className='pic2-2' src={require('./static/2/image2-00001.jpeg')} alt="1111"></img>
            </div>
          </div>
        </div>
        
        
      </div>
    )
  }
}

export default App;
