const boardUpload = document.getElementById('jsBoardUpload');
const photoUpload = document.getElementById('photo-upload');
const boardUploadPreview = document.getElementById('jsBoardUploadPreview');

const changePhoto = event => {
  const image = boardUploadPreview.children;
  for (let i = 0; i < image.length; i++) {
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
