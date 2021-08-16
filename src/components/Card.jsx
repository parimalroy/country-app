import React, { useState } from "react";
import Modal from "react-modal";
import ".././Layout.css";
const Card = (item) => {
  const [isModalOpen, setModalOpen] = useState(false);
  //console.log(item=item.capital)
  Modal.setAppElement("#root");
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
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => {
            setModalOpen(false);
          }}
          style={{
            overlay: {
              background: "#E7E0C9",
            },
            content: {
              background: "#C1CFC0",
            },
          }}
        >
          <div className="text-center">
            <img
              className="card-img-top w-25"
              src={item.Image}
              alt="Card image cap"
            />

            <table className="table table-bordered table-hover mt-5">
              {/* <thead>
                                <tr>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                </tr>
                            </thead> */}
              <tbody>
                <tr>
                  <td scope="col">Country</td>
                  <td scope="col">{item.Name}</td>
                </tr>
                <tr>
                  <td scope="col">Capital</td>
                  <td scope="col">{item.Capital}</td>
                </tr>
                <tr>
                  <td scope="col">Region/Subregion</td>
                  <td scope="col">
                    {item.Region}/{item.Subregion}
                  </td>
                </tr>
                <tr>
                  <td scope="col">Population</td>
                  <td scope="col">{item.Population}</td>
                </tr>
                <tr>
                  <td scope="col">Calling Codes</td>
                  <td scope="col">"+{item.CallingCodes}"</td>
                </tr>
                <tr>
                  <td scope="col">Top Level Domain</td>
                  <td scope="col">{item.TopLevelDomain}</td>
                </tr>
                <tr>
                  <td scope="col">Time zones</td>
                  <td scope="col">{item.Timezones}</td>
                </tr>
                <tr>
                  <td scope="col">Currencies</td>
                  <td scope="col">{`${item.Currencies} ,`}</td>
                </tr>
                <tr>
                  <td scope="col">Languages</td>
                  <td scope="col">{item.Languages}</td>
                </tr>
                <tr>
                  <td scope="col">Borders</td>
                  <td scope="col">{`${item.Borders} ,`}</td>
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
