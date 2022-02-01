/* eslint-disable react/prop-types */
const UserSectionPicture = ({ user }) => {
  const defaultPicture =
    'https://user-images.githubusercontent.com/13368066/151895402-67d28c80-17a8-4a35-8bab-b0be177cbfda.png';

  const img = user.picture ?? defaultPicture;
  return (
    <div className="user-container__data--hero">
      <div className="user-container__data--hero-pic">
        <img src={img} alt={user.username} />
      </div>
      <div className="user-container__data--hero-username">
        {`@${user.username}`}
      </div>
    </div>
  );
};

export default UserSectionPicture;
