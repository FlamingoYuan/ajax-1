let n = 1;

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功2xx还是失败4xx
        if (request.readyState === 4) {
            //创建style标签
            if (request.status >= 200 && request.status < 300) {            //创建style标签
                const style = document.createElement('style');
                //填写style内容
                style.innerHTML = request.response;
                //插到头里面
                document.head.appendChild(style);
            } else {
                alert("加载CSS失败");
            }

        }
    };
    request.send();
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = () => {
        //创建scrip标签
        const script = document.createElement('script');
        //填写script内容
        script.innerHTML = request.response;
        //插到身体里
        document.body.appendChild(script);
    };
    request.onerror = () => {
    };
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {
        //创建div
        const div = document.createElement('div');
        //填写div内容
        div.innerHTML = request.response;
        //插入到身体里
        document.body.appendChild(div);
    };
    request.onerror = () => {
    };
    request.send();
};

getXML.onclick = ()=>{
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml');
  request.onreadystatechange = () => {
      if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300) {
              const dom = request.responseXML;
              const text = dom.getElementsByTagName('warning')[0].textContent;
              console.log(text.trim());
          } else {
              alert("加载XML失败");
          }
      }
  };
  request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response);
                myName.textContent = object.name;
            } else {
                alert("加载JSON失败");
            }
        }
    };
    request.send();
};

getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
             const array = JSON.parse(request.response);
             array.forEach(item => {
                 const li = document.createElement("li");
                 li.textContent = item.id;
                 xxx.appendChild(li);
             });
             n += 1;
        }
    };
    request.send();
};