import React from "react";

function Server() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="server-container">
        <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default Server;