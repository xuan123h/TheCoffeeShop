import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { addCart, delCart } from "../redux/action";

// show modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Cart = () => {
  // handle Cart Shopping
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

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

  // component
  const emptyCart = () => {
    return (
      <div className="absolute top-[300px] left-[650px]">
        <h2 className="text-orange-600 text-[22px] ml-[30px]">
          {" "}
          Bạn chưa có sản phẩm nào trong giỏ hàng{" "}
        </h2>
        <button className="w-[500px] h-[80px] bg-red-400 text-white mt-[20px]">
          <Link to="/"> Quay về trang chủ </Link>
        </button>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="absolute top-[160px] left-[350px]">
          <div className="flex items-center justify-between w-[1160px]">
            <h2 className="w-[200px] h-[40px] text-[#000000D9] text-[30px]">
              {" "}
              Giỏ hàng{" "}
            </h2>
            <p className="w-[200px] h-[40px] text-[#000000D9] text-[30px]">
              {" "}
              {state.length} Sản phẩm{" "}
            </p>
          </div>
          <div className="mt-[30px]">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[377px] text-left h-[56px] text-[#000000D9] text-[14px] bg-[#FAFAFA] p-4">
                    {" "}
                    TÊN THỨC UỐNG{" "}
                  </th>
                  <th className="w-[216px] h-[56px] text-[#000000D9] text-[14px] bg-[#FAFAFA] p-4">
                    {" "}
                    HÌNH ẢNH{" "}
                  </th>
                  <td className="w-[416px] h-[56px] text-[#000000D9] text-[14px] bg-[#FAFAFA] p-4">
                    {" "}
                    SỐ LƯỢNG + SỐ TIỀN{" "}
                  </td>
                  <th className="w-[116px] h-[56px] text-[#000000D9] text-[14px] bg-[#FAFAFA] p-4 ">
                    {" "}
                    Chọn{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="text-[#000000D9] text-[20px] w-[400px]">
                    {" "}
                    {product.name}{" "}
                  </td>
                  <td className="w-[200px]">
                    {" "}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[100px] h-[100px] object-cover ml-[60px] mt-[20px]"
                    />{" "}
                  </td>
                  <td className="w-[400px]">
                    <div className="flex items-center">
                      <span onClick={() => handleDel(product)}>
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
                            d="M20 12H4"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        {" "}
                        {product.qty} *{" "}
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.price)}
                        =
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.qty * product.price)}{" "}
                      </span>
                      <span onClick={() => handleAdd(product)}>
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <span onClick={() => handleDel(product)}>
                        <Link to="/cart">
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </Link>
                      </span>
                      <li
                        className="w-[36px] h-[20px] text-[#939CA3] text-[12px] cursor-pointer font-bold list-none mt-[7px] ml-[20px]"
                        onClick={() => handleDel(product)}
                      >
                        {" "}
                        Xóa{" "}
                      </li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="absolute top-[1500px] left-[650px] w-[600px] h-[60px] bg-purple-800 text-white flex items-center justify-center cursor-pointer">
          <Button onClick={handleOpen} color="inherit">
            <Typography fontSize={12} absolute>
              Tiến hành đặt hàng
            </Typography>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 1100, height: 750 }}>
              <h2 className="w-[952px] h-[78px] text-[#000000D9] text-[30px] font-bold font-three">
                {" "}
                HOÀN THÀNH ĐƠN HÀNG{" "}
              </h2>{" "}
              <br />
              <iframe
                className="w-[1030px] h-[230px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125389.79851028735!2d106.68312450989689!3d10.854771127673814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85e042bf04b%3A0xbb26baec1664394d!2zVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1646836147719!5m2!1svi!2s"
              ></iframe>
              <br />
              <div className="w-[1040px] h-[44px] bg-[#FFFFFF] p-1 flex items-center mt-2">
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  className="w-full h-full outline-none border border-orange-500 p-[30px] "
                />
                <span className="absolute ml-1 ">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
              </div>
              <br />
              <div className="flex items-center mt-3">
                <div className="w-[471px] h-[40px] bg-[#FFFFFF] p-1 flex items-center ml-[10px]">
                  <input
                    type="text"
                    placeholder="Tên đầy đủ người đặt hàng"
                    className="w-full h-full outline-none border-orange-500 p-[30px] border"
                  />
                  <span className="absolute ml-1">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="w-[471px] h-[40px] bg-[#FFFFFF] p-1 flex items-center ml-[100px]">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="w-full h-full outline-none border-orange-500 p-[30px] border"
                  />
                  <span className="absolute ml-1">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <br />
              <div className="w-[1040px] h-[40px] bg-[#FFFFFF] p-1 flex items-center mt-4">
                <input
                  type="text"
                  placeholder="Note"
                  className="w-full h-full outline-none border-orange-500 p-[30px] border"
                />
              </div>
              <br />
              <div className="flex items-center list-none mt-5 ml-[150px]">
                <div className="flex items-center">
                  <span>
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <li className="w-[117px] h-[32px] text-[#000000D9] text-[16px] mt-2 ml-2 font-bold font-five">
                    {" "}
                    Select Product{" "}
                  </li>
                </div>
                <p> __________________________ </p>
                <div className="flex items-center">
                  <span>
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>
                  <li className="w-[81px] h-[32px] text-[#000000D9] text-[16px] mt-2 ml-2 font-bold">
                    {" "}
                    Fill order{" "}
                  </li>
                </div>
                <p> __________________________ </p>
                <div className="w-[71px] h-[36px] flex items-center">
                  <span>
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
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      ></path>
                    </svg>
                  </span>
                  <li className="w-[38px] h-[32px] text-[#00000073] text-[16px] mt-2 ml-2 font-bold">
                    {" "}
                    Done{" "}
                  </li>
                </div>
              </div>
              <button className="w-[141px] h-[28px] text-[14px] absolute left-[920px] top-[680px] bg-purple-300 text-green-900 font-bold flex items-center justify-center hover:bg-purple-600 hover:text-white">
                {" "}
                Thanh toán{" "}
              </button>
            </Box>
          </Modal>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        {state.length === 0 && emptyCart()}
        <div>
          <Header></Header>
          {state.length !== 0 && state.map(cartItems)}
        </div>
        {state.length !== 0 && buttons()}
      </div>
    </>
  );
};

export default Cart;
