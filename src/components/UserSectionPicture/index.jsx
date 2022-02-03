/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Avatar from 'react-avatar-edit';
import { Modal, Button } from '@mantine/core';
import { fetchUpdateAvatarUser } from '../../store/actions/userActionsCreator';
import { getCurrentLocalStorage } from '../../store/utils/LocalStorageUtils';
import { fetchUser } from '../../store/actions/userActionsCreator';

const UserSectionPicture = () => {
  const user = useSelector((state) => state.user.user);
  const token = getCurrentLocalStorage('token');
  const dispatch = useDispatch();
  const defaultPicture =
    'https://user-images.githubusercontent.com/13368066/151895402-67d28c80-17a8-4a35-8bab-b0be177cbfda.png';

  const [opened, setOpened] = useState(false);

  const handleImgClick = () => {
    setOpened(true);
  };

  const [avatar, setAvatar] = useState(user?.picture ?? defaultPicture);
  const [previewState, setPreviewState] = useState({ preview: null });

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, []);

  // useEffect(() => {
  //   setAvatar(user?.picture ?? defaultPicture);
  // }, [user]);

  console.log(user);
  const onCrop = (preview) => {
    setPreviewState({ preview });
  };
  const onClose = () => {
    setPreviewState({ preview: null });
  };
  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 500000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  const handleCloseModal = () => {
    setOpened(false);
    setPreviewState({ preview: null });
  };

  // todo cloudinary
  const handleChangePicture = () => {
    const data = { folder: 'user/avatars', image: previewState.preview };

    // console.log(
    //   '🚀 ~ file: index.jsx ~ line 46 ~ handleChangePicture ~ data',
    //   data,
    // );
    dispatch(fetchUpdateAvatarUser(data, user._id, token));
    setAvatar(previewState.preview);
    handleCloseModal();
  };

  return (
    <div className="user-container__data--hero">
      <Modal
        opened={opened}
        onClose={handleCloseModal}
        title="Edita tu imagen de perfil"
        size="lg"
        centered
      >
        <div className="user__modal--avatar">
          <div className="user-container__data--hero-editor">
            <Avatar
              width={200}
              height={200}
              onCrop={onCrop}
              onClose={onClose}
              onBeforeFileLoad={onBeforeFileLoad}
              src={setPreviewState.src}
            />

            {previewState.preview ? (
              <div className="user-container__data--hero-pic">
                <img
                  src={previewState.preview}
                  alt={user?.username}
                  onClick={handleImgClick}
                />
              </div>
            ) : null}
          </div>

          <Button
            onClick={handleChangePicture}
            style={{
              marginTop: 15,
              maxWidth: 200,
              alignSelf: 'center',
            }}
            disabled={!previewState.preview}
          >
            {' '}
            Cambiar imagen
          </Button>
        </div>
      </Modal>
      <div className="user-container__data--hero-pic">
        {user?.picture ? (
          <img
            src={user.picture}
            alt={user.username}
            onClick={handleImgClick}
          />
        ) : (
          <img src={avatar} alt={user.username} onClick={handleImgClick} />
        )}
      </div>

      <div className="user-container__data--hero-username">
        {`@${user.username}`}
      </div>
    </div>
  );
};

export default UserSectionPicture;
