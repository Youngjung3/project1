// 오늘날짜생성
let date=new Date();
// YYYYMMDD
let year=String(date.getFullYear());
let month=String(date.getMonth()+1.).padStart(2,"0");
let day=String(date.getDate()).padStart(2,"0");
let now=year+month+day;

const castBox=document.querySelector("#container")
let statusText,rainIcon,locText;
rainIcon = ['<i class="bi bi-brightness-high-fill"></i>', '<i class="bi bi-cloud-drizzle-fill"></i>', '<i class="bi bi-cloud-fog2-fill"></i>', '<i class="bi bi-lightning-fill"></i>', '<i class="bi bi-snow3"></i>'];

var url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";
let params={
  type:['getUltraSrtNcst','getVilageFcst'],
  key:'selMHZVUuZStmVQq9fGNK9oUN%2F%2B6HlnOTSorSUNn%2BVS3NpidZ4VMlp5ee%2BPjg88zxbjlg6ixLbtPQxPwz98lbw%3D%3D',
  pageNo:'1',
  numOfRows:'1000',
  dataType:'JSON',
  base_date:now,
  base_time:'0600',
  nx:'102',
  ny:'115',
}
url=`${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`
/*URL*/

  async function getPosts(){
    const res=await fetch(url);
    const data=await res.json();
    return data;
  }

  async function setPosts(){
    const posts=await getPosts();
    const datas=posts.response.body.items.item;
    const castEl=document.createElement('table');
    castEl.classList.add('table');
    const tr=document.createElement('tr');

    let cast={
      baseDate:datas[0].baseDate,
      rain:datas[0].obsrValue,
      rainInfo:function(){
        let info=this.rain;
        if(info == 0){
          statusText="맑음";
          rainIcon=rainIcon[0];
        }else{
          if(info==1){
            statusText="비";
            rainIcon=rainIcon[1];
        }
      }
      },
      temperature:datas[3].obsrValue,
      wind:datas[5].obsrValue,
      nx:datas[0].nx,
      ny:datas[0].ny,
      loc:function(){
        let point=[this.nx, this.ny];
        if(point[0]==102 && point[1]==115){
          locText="울진군"
        }
      }
    }
    cast.rainInfo();
    cast.loc();
    tr.innerHTML=`
      <td>${cast.baseDate}</td>
      <td>${locText}</td>
      <td>${statusText}${rainIcon}</td>
      <td>${cast.temperature}℃</td>
      <td>바람: ${cast.wind}/ms</td>
    `;
    castEl.appendChild(tr);
    castBox.appendChild(castEl);
  };
  setPosts();