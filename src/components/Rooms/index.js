import React from "react";
import RoomsWrraper from "./style";
import phongkhach from "../../assets/imgs/phongkhach.webp";
import phongan from "../../assets/imgs/phongan.webp";
import phongbep from "../../assets/imgs/phongbep.webp";
import phongngu from "../../assets/imgs/phongngu.webp";
import phonglamviec from "../../assets/imgs/phonglamviec.webp";
const Rooms = () => {
  return (
    <RoomsWrraper className="container">
      <div className="title">Không gian sống với MOHO</div>
      <div className="row">
        <div className="col-md-4 col-xs-12 col-sm-4">
          <div className="col-md-12 col-xs-6 col-sm-12">
            <img src={phongkhach}></img>
          </div>
          <div className="col-md-12 col-xs-6 col-sm-12">
            <img src={phongan}></img>
          </div>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-8">
          <div className="row">
            <div className="col-12">
              <img src={phongngu}></img>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xs-6 col-sm-6">
              <img src={phonglamviec}></img>
            </div>
            <div className="col-md-6 col-xs-6 col-sm-6">
              <img src={phongbep}></img>
            </div>
          </div>
        </div>
      </div>
    </RoomsWrraper>
  );
};
export default Rooms;
