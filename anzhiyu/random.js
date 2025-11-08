var posts=["2024/04/08/hello-world/","2025/11/08/CPP/COEN 329 Mid/","2024/03/30/CPP/指针与引用、数组前缀区别/","2024/03/30/CPP/源码、反码、补码及其实例/","2024/04/10/Course/CSEN 279 Assignment3/","2024/07/21/Docker/Docker(2)/","2024/07/20/Docker/Docker/","2024/08/12/Tools/VCPKG 使用/","2025/11/08/Tools/关于虚拟机 virtualBox VMware 和 wsl/","2024/04/10/Tools/换电脑部署hexo踩坑/","2025/11/08/Unreal/UE基础概念/","2025/11/08/Unreal/UE目录结构/","2025/11/08/Unreal/Unreal Hierarchy/","2025/11/08/Unreal/Unreal Shoot Game/","2025/11/08/Unreal/创建UEC++类文件的三种方式/","2025/11/08/Unreal/Unreal-GamePlay-框架/","2025/11/08/Unreal/面经/","2024/07/30/VideoAudioDev/FFMPE与SDL播放器架构/","2025/11/08/VideoAudioDev/OPENGL 和 FFMPEG 实现全景播放器/","2024/07/20/VideoAudioDev/视频播放器/","2024/04/16/Course/csen 272/CSEN 272  Basic concepts/","2024/04/16/Course/csen 272/CSEN 272 Web Search and Information Retrieval/","2025/11/08/graphics/Directx12/PSO/","2024/07/30/graphics/Games101/Games 101 Geometry/","2024/07/29/graphics/Games101/Games 101 Homework/","2024/07/27/graphics/Games101/Games 101 Materials and Appearances/","2024/07/28/graphics/Games101/Games 101 Illumination，Shading and Graphics Pipeline/","2024/07/26/graphics/Games101/Games 101 Rasterization/","2024/07/25/graphics/Games101/Games 101 Ray Tracing（1）/","2024/07/24/graphics/Games101/Games 101 Ray Tracing（2）/","2024/07/23/graphics/Games101/Games 101 Ray Tracing（3）/","2024/07/22/graphics/Games101/Games 101 Transformation/","2024/07/21/graphics/Games101/Games 101 补充 Shadow mapping/","2025/11/08/graphics/Games104/1引擎架构分层/","2025/11/08/graphics/Games202/Introduction/","2025/11/08/graphics/opengl/OpenGL Advance/","2024/08/02/graphics/opengl/Opengl/","2024/07/13/intern/HomeAssistantWithFrigate/HS 源码解析/","2024/07/12/intern/HomeAssistantWithFrigate/Home Assistant 集成 Frigate 功能展示/","2024/07/15/intern/VideoStreaming/RTSP 和 RTMP 原理 通过ffmpeg 实现将本地摄像头串流到RTSP服务器/","2024/07/16/intern/VideoStreaming/RTSP 客户端/","2024/07/17/intern/VideoStreaming/RTSP 服务器实现/","2024/07/18/intern/VideoStreaming/RTSP服务器 源码理解/","2024/07/14/intern/VideoStreaming/live555 源码阅读/","2024/07/19/intern/VideoStreaming/基于tcp的RTP传输服务器/","2025/03/12/interview/ Algorithm/AlgorithmBinarySearch/","2025/03/12/interview/ Algorithm/BFS And Topological Sorting/","2025/03/12/interview/ Algorithm/BinaryTreeDevideAndConquer/","2025/10/05/interview/ Algorithm/Graph/","2025/10/01/interview/ Algorithm/Heap + TopK/","2025/10/05/interview/ Algorithm/InterviewQuestions/","2025/10/05/interview/ Algorithm/TopK/","2025/10/05/interview/ Algorithm/Two Pointers & Linked List/","2025/03/12/interview/ Algorithm/algorithm/"];function toRandomPost(){
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