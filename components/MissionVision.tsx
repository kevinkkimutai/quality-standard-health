import { Eye, Target, HeartPulse } from "lucide-react";
import Image from "next/image";
import vission from "@/public/services/micro.jpg"
export default function MissionVision() {
  return (
    <section className="max-w-7xl mx-auto p-2">
      <div className="mx-auto grid max-w-content items-center gap-4 lg:grid-cols-2">
        <div>
          <p className="text-brand text-sm">OUR MISSION & VISION</p>
          <h2 className="max-w-md font-display text-2xl font-bold leading-tight sm:text-4xl">
            Guided by Purpose, <br /> Driven by Impact
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:pr-8 flex gap-2">
                <div className="rounded-full h-10 w-10 p-2 bg-purple-50">
              <Eye className="h-6 w-6 text-brand" strokeWidth={2} />
              </div>
             <div>
                 <h3 className="text-base font-semibold text-brand">
                Our Mission
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                To assist you as an organization to reduce future health
                impacts from your occupational hazards.
              </p>
             </div>
            </div>
            <div className="flex gap-2 border-t border-purple-100 pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                 <div className="rounded-full h-10 w-10 p-2 bg-purple-50">
 <Target className="h-6 w-6 text-brand" strokeWidth={2} />
                 </div>
              <div>
              <h3 className="text-base font-semibold text-brand">
                Our Vision
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                To be a leading provider of quality healthcare and
                occupational health services in Kenya and beyond, recognized
                for our excellence, innovation, and commitment to community
                well-being.
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative flex h-58 w-full items-center justify-center rounded-f bg-linear-to-br from-lavender-soft to-lavender sm:h-80 sm:w-full">
            <div className="flex h-32 items-center justify-center  bg-brand shadow-card">
              {/* <HeartPulse className="h-14 w-14 text-brand" strokeWidth={1.5} /> */}
              <Image src={vission} alt="Our Mission and Vision" fill className="object-cover rounded-[5px]" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}