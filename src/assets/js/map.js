const detailMap = document.getElementById('jsDetailMap');
const uploadMap = document.getElementById('jsUploadMap');

const options = {
  // 지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
  level: 3 // 지도의 레벨(확대, 축소 정도)
};

const deMap = new kakao.maps.Map(detailMap, options);
const upMap = new kakao.maps.Map(uploadMap, options);

// kakao.maps.event.addListener(deMap, 'click', mouseEvent => {
//   // 클릭한 위도, 경도 정보를 가져옵니다
//   const latlng = mouseEvent.latLng;

//   let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
//   message += '경도는 ' + latlng.getLng() + ' 입니다';

//   const resultDiv = document.getElementById('result');
//   resultDiv.innerHTML = message;
// });
