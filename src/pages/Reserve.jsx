"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight } from "lucide-react";
import Layout from "../Layout";
import { bg } from "../assets/Explore";
import NotificationModal from "../components/Notification/NotificationModal";

const data = [
  { date: "02/15", usdt: 40000000 },
  { date: "02/16", usdt: 42000000 },
  { date: "02/17", usdt: 46000000 },
  { date: "02/18", usdt: 47000000 },
  { date: "02/19", usdt: 47233750 },
  { date: "02/20", usdt: 50000000 },
  { date: "02/21", usdt: 52000000 },
  { date: "02/22", usdt: 55000000 },
  { date: "02/23", usdt: 40000000 },
];

const Reserve = () => {
    const [isOpen, setIsOpen] = useState(true);

  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
        <div>
            {isOpen && <NotificationModal onClose={() => setIsOpen(false)} />}
        </div>
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-4 px-4 lg:px-16 pt-25">
          <h1 className="text-4xl font-bold ">Reserve</h1>
        </div>

        {/* Main Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 bg-white p-6">
          {/* Chart Section */}
          <div className="md:col-span-2 p-4 border rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">50 - 150</h2>
              <div className="flex items-center text-green-500 font-medium">
                <ArrowUpRight className="mr-1" size={18} />
                <span>IRR 7.5 %</span>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm mb-2">USDT</div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="date" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="usdt"
                  stroke="#3498db"
                  fillOpacity={0.3}
                  fill="#3498db"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Section */}
          <div className="bg-white border rounded-lg shadow-md p-4 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-700 text-center">
                <p className="text-sm text-gray-500">Today Earnings</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50 text-green-700 text-center">
                <p className="text-sm text-gray-500">Cumulative Income</p>
                <p className="text-2xl font-bold">2.29</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-orange-50 text-orange-700 text-center">
                <p className="text-sm text-gray-500">Reservation range</p>
                <p className="text-2xl font-bold">50 ~ 150</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 text-blue-700 text-center">
                <p className="text-sm text-gray-500">Wallet Balance</p>
                <p className="text-2xl font-bold">18.28</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-gray-900 text-white text-center">
              <p className="text-sm">Balance for Reservation</p>
              <p className="text-2xl font-bold">18.28</p>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-md p-4">
              <div className="flex space-x-6 border-b pb-2 mb-4">
                <button className="text-gray-500 font-medium">Reserve</button>
                <button className="text-blue-500 font-medium border-b-2 border-blue-500 pb-1">
                  Today's
                </button>
                <button className="text-gray-500 font-medium">
                  Collection
                </button>
              </div>

              <div className="flex justify-center items-center h-32">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-red-500 text-5xl">×</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reserve;
