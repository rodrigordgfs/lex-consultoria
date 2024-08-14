'use client'

import { LineWave } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-screen max-w-full h-screen max-h-full bg-[#1F2732] flex flex-row items-center justify-center">
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#CCAA60"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}
