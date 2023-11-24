import './index.css'
export default Summary;
function Summary() {
    return (
      <div id="Summary" className="contentCol">
        <div
          style={{
            margin: 0,
            padding: 0,
            height: 350,
            paddingTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
            overflow: "auto"
          }}
        >
          <p style={{ fontFamily: "sans-serif", fontSize: 40 }}>
            Start{" "}
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: 40,
                color: "var(--categoryHover)"
              }}
            >
              Streaming
            </span>
            {" "}
            games differently
          </p>
          <p style={{ color: "darkgray" , fontFamily: "sans-serif"}}>
            Gamor now has{" "}
            <span
              style={{
                color: "var(--InText)",
                textDecoration: "underline",
                textDecorationColor: "var(--main_background)",
                textDecorationThickness: 2,
                textDecorationSkipInk: "none"
              }}
            >
              {" "}
              Stream party
            </span>{" "}
            plattform
          </p>
        </div>
        <div id="SummaryLoginArea">
          <div id="SummaryLogin">
            <button id="SummaryCreateAccount">Create account</button>
            <button id="SummarySignIn">Sign in</button>
          </div>
        </div>
      </div>
  
    );
  };