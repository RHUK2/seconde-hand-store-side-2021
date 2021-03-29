const userEdit = document.getElementById('jsUserEdit');
const avatarUpload = document.getElementById('avatar-upload');
const userEditPreview = document.getElementById('jsUserEditPreview');

const handleChange = event => {
  userEditPreview.setAttribute(
    'src',
    URL.createObjectURL(event.target.files[0])
  );
};

const init = () => {
  avatarUpload.addEventListener('change', handleChange);
};

if (userEdit) {
  init();
}
