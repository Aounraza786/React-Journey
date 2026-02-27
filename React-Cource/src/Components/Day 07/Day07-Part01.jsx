import { useState } from "react";
function HowToNotFetchDataInReact() {
  const [apiData, setApiData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error) => console.log(error));

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
export default HowToNotFetchDataInReact;

//From this way we can fetch data but there is a problem that is state update and component rendered continously. There is no end to not render function. you can check it through  Network tab through inspect thats why this is wrong way to fetch data from an api.
