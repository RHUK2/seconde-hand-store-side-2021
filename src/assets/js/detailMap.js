const detailMap = document.getElementById('jsDetailMap');

const options = {
  // 지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.5642135, 127.0016985), // 지도의 중심좌표.
  level: 3 // 지도의 레벨(확대, 축소 정도)
};

const dmap = new kakao.maps.Map(detailMap, options);
