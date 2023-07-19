// 页面加载时调用计数器接口
function loadCount(){
  fetch('/counter.php')
    .then(data => data.text()) 
    .then(count => {
      // 更新页面计数器
    })
}

// 页面离开时更新计数器
function updateCount(){
  fetch('/counter.php?increase=1') 
}

window.addEventListener('load', loadCount);
window.addEventListener('beforeunload', updateCount);