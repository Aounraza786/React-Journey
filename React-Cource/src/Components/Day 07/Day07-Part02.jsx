import { useEffect, useState } from "react";
function HowToFetchDataInReact() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="table-container">
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>

          <tbody>
            {apiData.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <tr key={index}>
                    <td>{apiData[index]?.id}</td>
                    <td>{apiData[index]?.title}</td>
                    <td>{apiData[index + 1]?.id}</td>
                    <td>{apiData[index + 1]?.title}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default HowToFetchDataInReact;
