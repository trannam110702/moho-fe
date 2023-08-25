import React from "react";
import FooterWrapper from "./style";
import { geoIcon, phoneIcon } from "../../../assets/imgs/svgs";
const Footer = () => {
  return (
    <FooterWrapper>
      <div class="container text-center">
        <div class="row infor">
          <div class="col-sm-3">
            <div className="title">NỘI THẤT MOHO</div>
            <p>
              Nội Thất MOHO là thương hiệu đến từ Savimex với gần 40 năm kinh
              nghiệm trong việc sản xuất và xuất khẩu nội thất đạt chuẩn quốc
              tế.
            </p>
          </div>
          <div class="col-sm-3">
            <div className="title">DỊCH VỤ</div>
            <p>
              Chính Sách Bán Hàng Chính Sách Giao Hàng & Lắp Đặt Chính Sách Đổi
              Trả Chính Sách Bảo Hành & Bảo Trì Khách Hàng Thân Thiết – MOHOmie
              Review Hay Nhận Quà Ngay - MOHOment Chính Sách Đối Tác Bán Hàng
            </p>
          </div>
          <div class="col-sm-3">
            <div className="title">THÔNG TIN LIÊN HỆ</div>
            <div className="row">
              <div class="col-2">{geoIcon}</div>
              <div class="col-10">
                <p>
                  Showroom: 162 HT17, P. Hiệp Thành, Q. 12, TP. HCM <br />{" "}
                  <hr />
                  Experience Store 1: S05.03-S18 phân khu The Rainbow | Vinhomes
                  Grand Park, TP. Thủ Đức <br /> <hr /> Experience Store 2:
                  S3.03-Sh15 phân khu Sapphire | Vinhomes Smart City, Hà Nội{" "}
                  <br />
                  <hr />
                  Experience Store 3: S2.09-Sh19 phân khu Sapphire | Vinhomes
                  Ocean Park, Hà Nội <br /> <hr />
                </p>
              </div>
            </div>
            <div className="row">
              <div class="col-2">{phoneIcon}</div>
              <div class="col-10">
                <p>
                  097 114 1140 (Hotline/Zalo) <br /> 0902 415 359 (Đội Giao
                  Hàng)
                </p>
                <p>
                  cskh@moho.com.vn <br /> <hr />
                  Công Ty Cổ Phần Hợp Tác Kinh Tế Và Xuất Nhập Khẩu Savimex -
                  STK: 0071001303667 - Vietcombank CN HCM
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="title">FANPAGE</div>
          </div>
        </div>
      </div>

      <div class="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">Copyright © 2023 Nội Thất MOHO.</div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
