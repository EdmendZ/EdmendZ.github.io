var posts=["2024/04/10/CSEN 279 Assignment3/","2024/04/08/hello-world/","2024/04/10/换电脑部署hexo踩坑/","2024/04/16/csen 272/CSEN 272  Basic concepts/","2024/04/16/csen 272/CSEN 272 Web Search and Information Retrieval/","2024/07/21/intern/Docker(2)/","2024/07/20/intern/Docker/","2024/07/30/intern/FFMPE与SDL播放器架构/","2024/07/13/intern/HS 源码解析/","2024/07/12/intern/Home Assistant 集成 Frigate 功能展示/","2024/07/15/intern/RTSP 和 RTMP 原理 通过ffmpeg 实现将本地摄像头串流到RTSP服务器/","2024/07/16/intern/RTSP 客户端/","2024/07/17/intern/RTSP 服务器实现/","2024/07/18/intern/RTSP服务器 源码理解/","2024/07/14/intern/live555 源码阅读/","2024/08/09/intern/关于虚拟机 virtualBox VMware 和 wsl/","2024/07/19/intern/基于tcp的RTP传输服务器/","2024/07/20/intern/视频播放器/","2024/07/30/graphics/Games101/Games 101 Geometry/","2024/07/29/graphics/Games101/Games 101 Homework/","2024/07/28/graphics/Games101/Games 101 Illumination，Shading and Graphics Pipeline/","2024/07/27/graphics/Games101/Games 101 Materials and Appearances/","2024/07/26/graphics/Games101/Games 101 Rasterization/","2024/07/25/graphics/Games101/Games 101 Ray Tracing（1）/","2024/07/24/graphics/Games101/Games 101 Ray Tracing（2）/","2024/07/23/graphics/Games101/Games 101 Ray Tracing（3）/","2024/07/22/graphics/Games101/Games 101 Transformation/","2024/07/21/graphics/Games101/Games 101 补充 Shadow mapping/","2024/04/12/graphics/Games101/三维变化/","2024/04/12/graphics/Games101/光栅化/","2024/08/09/graphics/opengl/OpenGL Advance/","2024/08/02/graphics/opengl/Opengl/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };