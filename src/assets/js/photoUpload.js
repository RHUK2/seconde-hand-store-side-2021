const boardUpload = document.getElementById('jsBoardUpload');
const photoUpload = document.getElementById('photo-upload');
const boardUploadPreview = document.getElementById('jsBoardUploadPreview');

const changePhoto = event => {
  const {
    target: { files }
  } = event;
  if (files.length > 4) {
    window.alert('이미지 파일은 4개까지 가능합니다.');
    return -1;
  }
  const image = boardUploadPreview.children;
  for (let i = 0; i < image.length; i++) {
    image
      .item(i)
      .setAttribute(
        'src',
        'https://shstore-side-project.s3.ap-northeast-2.amazonaws.com/assets/white-image.png'
      );
  }
  for (let i = 0; i < files.length; i++) {
    image
      .item(i)
      .setAttribute('src', URL.createObjectURL(event.target.files[i]));
  }
};

const init = () => {
  photoUpload.addEventListener('change', changePhoto);
};

if (boardUpload) {
  init();
}
