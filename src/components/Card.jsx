import React, { useState } from "react";
import Modal from "react-modal";
import ".././Layout.css";
const Card = (item) => {
  const [isModalOpen, setModalOpen] = useState(false);
  //console.log(item=item.capital)
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-12 col-12 m-1 card-color">
        {/* <p >Heading</p> */}
        {/* <p>{item.Name}</p>
                    <p>{item.Alpha2Code}</p> */}
        <div
          className="card mt-3 mb-3 mx-auto d-block card-color"
          onClick={() => setModalOpen(true)}
        >
          <img
            className="card-img-top w-100 h-75"
            src={item.Image}
            alt="Card image cap"
          />
          <div className="card-body ">
            <h5 className="card-title">{item.Name}</h5> <hr />
            <p className="card-text">Capital: {item.Capital}</p>
            <p className="card-text">Region: {item.Region}</p>
            <a className="btn btn-sm">See More</a>
          </div>
        </div>
        <Modal isOpen={isModalOpen}>
          <div className="text-center">
            <img
              className="card-img-top w-25"
              src={item.Image}
              alt="Card image cap"
            />

            <table className="table table-bordered mt-5">
              {/* <thead>
                                <tr>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                </tr>
                            </thead> */}
              <tbody>
                <tr>
                  <td>Country</td>
                  <td>{item.Name}</td>
                </tr>
                <tr>
                  <td>Capital</td>
                  <td>{item.Capital}</td>
                </tr>
                <tr>
                  <td>Region/Subregion</td>
                  <td>
                    {item.Region}/{item.Subregion}
                  </td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>{item.Population}</td>
                </tr>
                <tr>
                  <td>Calling Codes</td>
                  <td>"+{item.CallingCodes}"</td>
                </tr>
                <tr>
                  <td>Top Level Domain</td>
                  <td>{item.TopLevelDomain}</td>
                </tr>
                <tr>
                  <td>Time zones</td>
                  <td>{item.Timezones}</td>
                </tr>
                <tr>
                  <td>Currencies</td>
                  <td>{`${item.Currencies} ,`}</td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>{item.Languages}</td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>{`${item.Borders} ,`}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn btn-sm btn-danger text-center"
              onClick={() => setModalOpen(false)}
            >
              close
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Card;
