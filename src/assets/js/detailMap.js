import axios from 'axios';

const detailMap = document.getElementById('jsDetailMap');

const detailOption = {
  center: new kakao.maps.LatLng(37.566826, 126.9786567),
  level: 3
};

const dmap = detailMap ? new kakao.maps.Map(detailMap, detailOption) : null;

async function getMapCoords() {
  const boardId = window.location.href.split('/board/')[1].split('/detail')[0];
  const response = await axios({
    url: `/api/${boardId}/coords`,
    method: 'GET',
    data: {}
  });
  return response.data;
}
async function init() {
  const coords = await getMapCoords();
  dmap.setCenter(new kakao.maps.LatLng(coords.Ma, coords.La));
  const markerPosition = new kakao.maps.LatLng(coords.Ma, coords.La);
  const marker = new kakao.maps.Marker({
    position: markerPosition
  });
  marker.setMap(dmap);
}
if (detailMap) {
  init();
}
