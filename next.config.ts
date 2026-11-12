import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://okdasvnzxootmbzyicrq.supabase.co/storage/v1/object/public/Booking-Images/**",
      ),
    ],
  },
};

export default nextConfig;
