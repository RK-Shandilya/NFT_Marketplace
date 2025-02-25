import React from "react";
import SingleAnnouncement from "../components/Announcement/SingleAnnouncement";
import Layout from "../Layout";
import { bg } from "../assets/Explore";
import A1 from '../assets/Announcement/A1.avif'
import A2 from '../assets/Announcement/A2.avif'

const announcements = [
  {
    id: 1,
    title: "TreasureNFT Announcement: Reservation Trading Performance Optimization Completed",
    date: "2025-02-24",
    description: "Over the past two years, we have been dedicated to continuous technological upgrades and service improvements, providing a stable, secure, and efficient trading experience for tens of millions of users worldwide.\n\nNow, we have successfully completed the optimization and upgrade of our reservation trading matching system, significantly enhancing trading efficiency and user experience.\n\nKey Improvements:\n✅ Significantly improved capital utilization efficiency.\n✅ Noticeably increased reservation success rate.\n\nThis optimization has been fully implemented, greatly boosting trading and matching efficiency, making your reservation trades smoother and more efficient.\n\nTreasureNFT remains committed to moving forward with our users, continuously pushing boundaries to bring you a superior NFT trading experience!",
    image: A1,
  },
  {
    id: 2,
    title: "TreasureNFT 🌍 Community Exclusive Rewards🎁",
    date: "2025-02-24",
    description: "🎁 Recommend 1 valid fan, the first activation account funds reach $100...",
    image: A2,
  },
 ];

const Announcements = () => {
  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4 px-16 pt-30">
          Announcement
        </h1>
       <div className="bg-white w-full p-4 lg:p-14">
          <h2 className="text-xl font-semibold mt-4">Notification List</h2>
          <div className="mt-4 space-y-4">
            {announcements.map((announcement) => (
              <SingleAnnouncement key={announcement.id} data={announcement} />
            ))}
          </div>
        </div> 
      </div>
    </Layout>
  );
};

export default Announcements;