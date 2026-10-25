
function ProfileImage({ profileData }) {
  return (
    <div className="profile-image-container">
      <img
        src={profileData?.image || "swetha.jpeg"}
        alt={profileData?.name || "Swetha D S"}
        className="profile-image"
      />
    </div>
  );
}

export default ProfileImage;
