'use client'

import { LineWave } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="w-full max-w-full h-full max-h-full bg-[#1F2732] flex flex-row items-center justify-center">
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
