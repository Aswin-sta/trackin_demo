import assets from "../../assets/images";

const LogoComponent = () => {
  return (
    <div>
      <img
        src={assets.images.logo}
        alt="trackin logo"
        width="60%"
        style={{ verticalAlign: "middle" }}
      />
    </div>
  );
};

export default LogoComponent;
