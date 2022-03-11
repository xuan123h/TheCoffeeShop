import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Tab trong material ui/core
// import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// show modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import { Typography } from "@mui/material";

const Header = () => {
  // show modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    color: "primary",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  // Tabs trong material ui/core
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // handle Cart Shop
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="list-none flex items-center h-[90px] bg-[#fff] shadow-sm border-b-orange-400">
      <div>
        <h2 className="w-[273px] h-[30px] text-[#A47343] text-[30px] font-body p-3 font-bold inline-block text-center capitalize cursor-pointer">
          {" "}
          Coffee Shop{" "}
        </h2>
      </div>
      <div className="flex items-center justify-center text-[22px] absolute top-5 left-[250px] text-[#000000] font-body leading-[46px] p-3 text-left font-semibold">
        <li className="w-[120px] h-[48px] cursor-pointer">
          <Link to="/"> Trang chủ</Link>
        </li>
        <li className="w-[120px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/coffee"> Sản phẩm </Link>
        </li>
        <li className="w-[190px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/show"> Xem đơn đặt hàng </Link>
        </li>
        <li className="w-[141px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/promotion"> Mã giảm giá </Link>
        </li>
        <li className="w-[112px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/information"> Giới thiệu </Link>
        </li>
      </div>
      <div className="flex items-center absolute top-12 right-[50px]">
        <span
          className="absolute right-[170px] text-center leading-6 border-none cursor-pointer"
          onClick={handleOpen}
        >
          <svg
            class="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
                          >
            <Box sx={{ ...style, width: 550, height: 550 }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Đăng nhập" value="1" />
                    <Tab label="Đăng ký" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[20px] outline-none border border-purple-400"
                    />{" "}
                    <br />
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Mật khẩu"
                        className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[30px] outline-none border border-purple-400"
                      />
                      <span className="absolute right-[100px] mt-[30px]">
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <br />
                    <button className="w-[300px] h-[45px] bg-[#1890FF] p-2 text-[#FFFFFF] text-[20px] ] mt-[30px] ml-[63px]">
                      {" "}
                      Đăng nhập{" "}
                    </button>
                    <br />
                    <div className="flex items-center list-none w-[271px] h-[48px] bg-[#FFFFFF] mt-[35px] ml-[80px] border border-orange-300 cursor-pointer">
                      <img
                        src="http://admarket.vn/wp-content/uploads/2018/05/lich-su-bieu-trung-google-16.png"
                        alt=""
                        className="w-[40px] h-[40px] object-cover ml-[43px]"
                      />
                      <li className="w-[259px] h-[42px] text-[#0000008A] text-[14px] p-2 font-bold">
                        {" "}
                        Login with google{" "}
                      </li>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div>
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[20px] outline-none border border-purple-400"
                    />{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[30px] outline-none border border-purple-400"
                    />{" "}
                    <br />
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Nhập mật khẩu"
                        className="w-[399px] h-[44px] bg-[#FFFFFF] p-2 mt-[30px] outline-none border border-purple-400"
                      />
                      <span className="absolute right-[100px] mt-[30px]">
                        <svg
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <br />
                    <div className="absolute top-[390px] left-[120px]">
                      <button className="w-[300px] h-[50px] bg-[#1890FF] p-2 text-[#FFFFFF] text-[20px]">
                        {" "}
                        Đăng ký{" "}
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </Modal>
        </span>
        <span className="absolute right-[70px] text-center leading-6">
          <Link to="/cart">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </Link>
          <span className="absolute w-[22px] h-[22px] top-[0px] left-[23px] rounded-full bg-orange-500 text-white flex items-center justify-center">
            {" "}
            {state.length}{" "}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
