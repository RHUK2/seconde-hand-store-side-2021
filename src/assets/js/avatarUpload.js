const userEdit = document.getElementById('jsUserEdit');
const avatarUpload = document.getElementById('avatar-upload');
const userEditPreview = document.getElementById('jsUserEditPreview');

const changeAvatar = event => {
  userEditPreview.setAttribute(
    'src',
    URL.createObjectURL(event.target.files[0])
  );
};

const init = () => {
  avatarUpload.addEventListener('change', changeAvatar);
};

if (userEdit) {
  init();
}
