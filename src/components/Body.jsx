import React from "react";

const Body = () => {
  return (
    <div>
      <div className="mt-8">
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/ads.png"
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="absolute top-[2220px]  text-center">
        <h3 className="text-[#000000] text-[40px] leading-[40px] p-1 absolute left-[250px] font-bold border-b-orange-500 border-[26px] font-body">
          {" "}
          Store{" "}
        </h3>
        <div>
          <div>
            <h4 className="text-white text-[24px] font-bold leading-6 absolute w-[240px] top-[350px] z-30 left-[280px] font-two">
              {" "}
              CHI NHÁNH THE COFFEE SHOP{" "}
            </h4>
            <div className="w-[296px] h-[360px] border border-orange-500 bg-orange-500 text-[#ffffff] list-none absolute left-[250px] top-[100px]">
              <div className="flex items-center w-[260px] h-[68px] text-[15px]">
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
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    ></path>
                  </svg>
                </span>
                <li className="mt-4 ml-3">
                  {" "}
                  115 Hai Bà Trưng, Bến Nghé, Quận 1, Hồ Chí Minh{" "}
                </li>
              </div>
              <div className="flex items-center w-[296px] h-[68px] text-[15px]">
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
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    ></path>
                  </svg>
                </span>
                <li className="ml-3"> Số 1, Võ Văn Ngân, Linh Châu, Thủ Đức</li>
              </div>
              <div className="flex items-center w-[296px] h-[68px] text-[15px]">
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
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    ></path>
                  </svg>
                </span>
                <li className="ml-1 mt-4">
                  {" "}
                  Số 53, Lê Hồng Phong, Quận 5, Hồ Chí Minh{" "}
                </li>
              </div>
            </div>
            <div className="absolute left-[550px] top-[100px]">
              <iframe
                className="w-[1080px] h-[360px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125389.79851028735!2d106.68312450989689!3d10.854771127673814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85e042bf04b%3A0xbb26baec1664394d!2zVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1646836147719!5m2!1svi!2s"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
