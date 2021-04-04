const searchArea = document.getElementById('jsSearchArea');
const uploadMap = document.getElementById('jsUploadMap');
const uploadMapData = document.getElementById('jsUploadMapData');
const uploadMapCoords = document.getElementById('jsUploadMapCoords');

const uploadOption = {
  center: new kakao.maps.LatLng(37.566826, 126.9786567),
  level: 3
};

const umap = uploadMap ? new kakao.maps.Map(uploadMap, uploadOption) : null;
const geocoder = new kakao.maps.services.Geocoder();
const marker = new kakao.maps.Marker();

function preventSubmit(e) {
  if (e.keyCode !== 9) e.preventDefault();
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
  geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}
function init() {
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
        uploadMapCoords.value = JSON.stringify(mouseEvent.latLng);
        marker.setPosition(mouseEvent.latLng);
        marker.setMap(umap);
      }
    });
  });
}
if (uploadMap) {
  init();
}
