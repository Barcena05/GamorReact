import './index.css'
export default Category;
function Category() {
    return (
      <div id="Categories">
        <div className="Category">
          <p>Action Games</p>
        </div>
        <div className="Category">
          <p>Sports Games</p>
        </div>
        <div className="Category">
          <p>Adventures Games</p>
        </div>
        <div className="Category">
          <p>Arcade Games</p>
        </div>
        <div className="Category">
          <p>Fantasy Games</p>
        </div>
        <div className="Category">
          <p>Strategy Games</p>
        </div>
        <div className="Category" id="Shooter">
          <p style={{ position: "absolute" }}>Shooter Games</p>
          <div id="ShooterIn"></div>
        </div>
        <div className="Category">
          <p>All Categories</p>
        </div>
      </div>
  
    );
  };