import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutDashboard from "../Layout/LayoutDashboard";
import { jobServices } from "../services/job-services";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState();

  const fetchData = async () => {
    await jobServices.getJobDetail(id).then((res) => {
      if (res.status === 200) {
        setDetail(res.data.jobs);

        console.log(res.data.jobs);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <LayoutDashboard>
      <button
        className="text-2xl bg-gray-300 rounded-2xl p-2 mb-3"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="p-3 border-2 border-gray-500">
        <div className="flex flex-col gap-3">
          <span className="text-gray-500 text-sm">
            {detail?.type}/{detail?.location}
          </span>
          <h1 className="font-semibold text-2xl">{detail?.title}</h1>
          <hr />
        </div>
        <div className="flex p-2 justify-between">
          <div className="w-2/3">
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: detail?.description }}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <div className="border p-2">
              <img
                src={detail?.company_logo}
                onError={(e) =>
                  (e.target.src =
                    "https://consultamo.com/wp-content/themes/consultix/images/no-image-found-360x260.png")
                }
                className="w-auto"
                alt=""
              />
            </div>
            <div className="p-2 border-2 h-auto border-gray-500 flex flex-col gap-2 items-center bg-red-100 ">
              <div className="border-b-2 border-black w-full text-center">
                <h1 className="text-2xl font-semibold">How to apply</h1>
              </div>
              <div className="flex items-center justify-center">
                {/* <div
                  className="text-clip overflow-hidden text-sm whitespace-nowrap w-64 h-32  "
                  dangerouslySetInnerHTML={{
                    __html: `Click to apply ${detail?.how_to_apply}`,
                  }}
                /> */}
                {/* <div className="w-64 h-32"> */}
                <h1
                  className="text-sm break-words text-center"
                  dangerouslySetInnerHTML={{
                    __html: `Click to apply ${detail?.how_to_apply}`,
                  }}
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}
