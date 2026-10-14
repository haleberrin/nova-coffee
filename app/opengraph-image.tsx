
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

export const alt = "NOVA Coffee — Premium Coffee Experience";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";


export default async function OpenGraphImage() {
    const cupBuffer = await readFile(
      new URL("../public/coffee/cup.png", import.meta.url)
    );
  
    const cupSrc = `data:image/png;base64,${cupBuffer.toString("base64")}`;
  
    return new ImageResponse(
  
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 78% 45%, #4A2B1B 0%, #21130B 65%)",
          color: "#F6EEE3",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
            maxWidth: "650px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "55px",
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "12px",
              }}
            >
              NOVA
            </span>

            <span
              style={{
                fontSize: 19,
                letterSpacing: "9px",
                marginTop: "-6px",
              }}
            >
              COFFEE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 53,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-2px",
            }}
          >
            <span>Biraz yavaşla.</span>
            <span style={{ color: "#D7B89C" }}>
              Kahveni seç.
            </span>
          </div>

          <span
            style={{
              fontSize: 18,
              letterSpacing: "3px",
              marginTop: "45px",
              opacity: 0.7,
            }}
          >
            SLOW DOWN • SIP BETTER
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "70px",
            width: "540px",
            height: "540px",
            borderRadius: "50%",
            border: "1px solid rgba(246,238,227,0.16)",
          }}
        />


<img
  src={cupSrc}
  alt=""
  width={490}
  height={330}
  style={{
    position: "absolute",
    right: "-10px",
    top: "165px",
    objectFit: "contain",
    zIndex: 1,
  }}
/>


      </div>
    ),
    size
  );
}
