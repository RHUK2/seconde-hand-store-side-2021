const searchArea = document.getElementById('jsSearchArea');
const uploadMap = document.getElementById('jsUploadMap');
const uploadMapData = document.getElementById('jsUploadMapData');

const mapOption = {
  center: new kakao.maps.LatLng(37.566826, 126.9786567),
  level: 3
};
const umap = new kakao.maps.Map(uploadMap, mapOption);
const geocoder = new kakao.maps.services.Geocoder();
const marker = new kakao.maps.Marker();

uploadMapData.addEventListener('keydown', preventSubmit);
uploadMapData.addEventListener('paste', preventSubmit);
uploadMapData.addEventListener('focus', preventSubmit);
uploadMapData.addEventListener('mousedown', preventSubmit);
searchArea.addEventListener('keydown', handleInputText);
kakao.maps.event.addListener(umap, 'click', mouseEvent => {
  searchDetailAddrFromCoords(mouseEvent.latLng, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const addr = result[0].address.address_name;
      uploadMapData.value = addr;
      marker.setPosition(mouseEvent.latLng);
      marker.setMap(umap);
    }
  });
});
function preventSubmit(e) {
  if (e.keyCode !== 9)
    // ignore tab
    e.preventDefault();
}
function handleInputText(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const location = event.target.value;
    geocoder.addressSearch(location, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        umap.setCenter(coords);
      }
    });
  }
}
function searchDetailAddrFromCoords(coords, callback) {
  // 좌표로 법정동 상세 주소 정보를 요청합니다
  geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}
async function sendAddress(address) {
  const boardId = window.location.href.split('/detail')[0].split('/board/')[1];
  const response = await axios({
    url: `/api/${boardId}/comment`,
    method: 'POST',
    data: {
      address
    }
  });
}
