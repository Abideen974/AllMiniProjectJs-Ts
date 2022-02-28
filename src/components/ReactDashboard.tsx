import React from "react";
import "./ReactDashboard.css";
function ReactDashboard() {
  return (
    <div>
      <div className="container ">
        <div className="row p-2 ">
          <div className="col-12 bg-light h-50%">
            <p>Dashboard</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 BoxSec  p-2 bg-light d-flex justify-content-between">
            <div className="icon">
              <p><span className="bi bi-printer icon"></span></p>
            </div>
            <div className="">
             <span>booking  </span>

            </div>
            {/* <button type="submit" className="btn btn-primary"><span className="bi-search"></span> Search</button> */}
            
          </div>


          <div className="col-sm-3  mx-auto">
            <div className="BoxSec p-2 bg-light d-flex justify-content-between">
            <div className="icon">
              <span className="bi bi-pie-chart icon"></span>
            </div>

                <span className="h-50% ">total user</span>
            </div>
         
          </div>



          <div className="col-3 ">
             <div className="BoxSec p-2 bg-light d-flex justify-content-between">
             <div className="icon">
              <span className="bi bi-house icon"></span>
            </div>
               <span className="h-50% ">revenue</span>
         
              </div>
          </div>


          <div className="col-3 ">
            <div className="BoxSec p-2 bg-light d-flex justify-content-between">
            <div className="icon">
              <span className="bi bi-person-badge-fill icon"></span>
            </div>
                <span className="h-50% ">total user</span>
            </div>
           
           
          </div>
        </div>

        {/* <div className="row">
          <div className="col-sm-7">
              <div className="raised-block  ">
                  <h3>Facebook</h3>
              </div>
          </div>
          <div className="col-sm-5">
              <div className="raised-block">
                  <h3>Tweets</h3>
              </div>
          </div>
      </div> */}
      {/* <div className="row justify-content-between ">
        <div className="col-md-3 bg-success ml-auto">sdfa</div>
        <div className="col-md-3 bg-success ml-auto">adsf</div>
        <div className="col-md-3 bg-success ml-auto">fasd</div>
        <div className="col-md-3 bg-success ml-auto">adf</div>
      </div> */}

        <div className="row p-2">
          <div className="col-4 ">
          <div className="raised-block  bg-primary">

             <span className="h-50% ">total user</span>
        </div>
          </div>
          <div className="col-4 ">
          <div className="raised-block  bg-success h-50%">

<span className="h-50% ">total user</span>
</div>
          </div>
          <div className="col-4 ">
          <div className="raised-block  bg-dark">

<span className="h-50% ">total user</span>
</div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-8 bg-white">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4 bg-white">
            <h5>Order overview</h5>
            <p>24% this month</p>
            <div>
            <ul className="list-group">
                <li className="list-group-item disabled">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactDashboard;
