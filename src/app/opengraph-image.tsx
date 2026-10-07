import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name} | ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          backgroundColor: "#07070b",
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(124,58,237,0.55), rgba(7,7,11,0) 55%), radial-gradient(circle at 100% 80%, rgba(6,182,212,0.4), rgba(7,7,11,0) 50%)",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 44, marginTop: 16, color: "#e4e4e7" }}>
          Software Engineer building with AI
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#a1a1aa" }}>
          {`${profile.company} · matthew-tran.com`}
        </div>
      </div>
    ),
    size,
  );
}
