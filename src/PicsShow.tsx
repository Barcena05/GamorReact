import './index.css'
export default PicsShow
function PicsShow() {
    return (
      <div id="PicsShow" className="contentCol">
        <h2
          style={{
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            width: "60%",
            fontFamily: "Arial, Helvetica, sans-serif",
            textAlign: "center",
            marginTop: 40
          }}
        >
          Fortnite New Season
        </h2>
        <h4
          style={{
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            width: "60%",
            fontFamily: "Arial, Helvetica, sans-serif",
            textAlign: "center",
            marginTop: 40
          }}
        >
          Join Live Stream
        </h4>
        <div
          style={{
            borderStyle: "hidden",
            borderRadius: 20,
            backgroundColor: "white",
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 40,
            padding: "0.5px 0"
          }}
        >
          <p style={{ color: "var(--main_background)", textAlign: "center" }}>
            11:45
          </p>
        </div>
      </div>
  
    );
  };