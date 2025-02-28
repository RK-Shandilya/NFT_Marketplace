import React from "react";
import { useParams } from "react-router-dom";
import A1 from "../assets/Announcement/A1.avif";
import A2 from "../assets/Announcement/A2.avif";
import Layout from "../Layout";
import { bg } from "../assets/Explore";

const data = [
  {
    id: 1,
    title:
      "TreasureNFT Announcement: Reservation Trading Performance Optimization Completed",
    date: "2025-02-24",
    description:
      "Over the past two years, we have been dedicated to continuous technological upgrades and service improvements, providing a stable, secure, and efficient trading experience for tens of millions of users worldwide.\n\nNow, we have successfully completed the optimization and upgrade of our reservation trading matching system, significantly enhancing trading efficiency and user experience.\n\nKey Improvements:\n✅ Significantly improved capital utilization efficiency.\n✅ Noticeably increased reservation success rate.\n\nThis optimization has been fully implemented, greatly boosting trading and matching efficiency, making your reservation trades smoother and more efficient.\n\nTreasureNFT remains committed to moving forward with our users, continuously pushing boundaries to bring you a superior NFT trading experience!",
    image: A1,
  },
  {
    id: 2,
    title: "TreasureNFT 🌍 Community Exclusive Rewards🎁",
    date: "2025-02-24",
    description:
      "🎁 Recommend 1 valid fan, the first activation account funds reach $100...",
    image: A2,
  },
];

const AnnouncementDetail = () => {
  const { id } = useParams();
  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4 px-16 pt-30">
          Announcement
        </h1>
      <div className="bg-white py-10 text-black">
        <div className="flex flex-col gap-4 w-2/3 mx-auto justify-center items-center">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-2xl font-light">{data[id].title}</h1>
            <div>{data[id].date}</div>
          </div>
          <div>
            <img src={data[id].image} alt="" />
          </div>
          <div className="description">
            {data[id].description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < data[id].description.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnnouncementDetail;
