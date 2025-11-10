import React from "react";
import MockupiPhone from "@/components/ui/MockupiPhone";
import FeatureList from "@/components/ui/FeatureList";

export default function AboutLocketDio() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center">

      <section className="min-h-screen bg-base-200 text-base-content p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
          Giới thiệu về <span className="text-base-content">Locket PD.Kane</span>
        </h1>

        <p className="text-lg leading-8 text-base-content/80 mb-10 text-center max-w-3xl mx-auto">
          Locket PD.Kane - nền tảng mở rộng tiện lợi cho Locket Widget giúp bạn chia
          sẻ ảnh, video trực tiếp lên Locket với giao diện hiện đại và tiện lợi.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="w-full flex justify-center md:scale-90">
            <MockupiPhone />
          </div>
          <div className="-mt-7 md:scale-90">
            <FeatureList />
          </div>
        </div>

      </div>
    </section>
    </div>

  );
}
