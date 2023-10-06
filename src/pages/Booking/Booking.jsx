import React from "react";

export default function Booking() {
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-8 mb-4">
          <div style={{ width: "95%" }} className="mx-auto">
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-secondary">
              Seats are booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-dark">
              Seats not booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-primary">
              Seats are being booked
            </div>
            <div className="mr-1 mb-1 d-inline-block p-2 rounded text-white bg-warning">
              VIP seats
            </div>
          </div>
        </div>
        <div className="col-8">
          <div style={{ width: "95%" }} className="mx-auto">
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">01</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">02</button>
            <button disabled style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">
              03
            </button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">04</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">05</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">06</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">07</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">08</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">09</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">10</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">11</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">12</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-primary">13</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-primary">14</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">15</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-warning">16</button>
            <br />
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">17</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">18</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">19</button>
            <button style={{ width: 50, height: 50, padding: 0 }} className="mr-1 mb-1 btn btn-dark">20</button>
          </div>
        </div>
        <div className="col-4">
          <img
            style={{ width: 300, height: 400, objectFit: "cover" }}
            src="https://movienew.cybersoft.edu.vn/hinhanh/avatar-1_gp02.jpg"
            alt="#"
          />
          <h4 className="mb-0">Avatar</h4>
          <h5 className="mb-0">
            Number of seats:
            <div className="d-flex">
              <p className="badge badge-success mr-2 mb-0">13</p>
              <p className="badge badge-success mr-2 mb-0">14</p>
            </div>
          </h5>
          <h5>Total: 40000</h5>
          <button className="btn btn-warning">BOOK</button>
        </div>
      </div>
    </div>
  );
}