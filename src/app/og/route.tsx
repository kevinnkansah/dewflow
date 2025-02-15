import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {       
  const font = fetch(new URL("../../../public/fonts/Inter.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const fontData = await font;

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #00e5ff 0%, #00b8d4 100%)',
        fontFamily: 'Inter',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginRight: '16px',
          }}
        >
          {/* Logo dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
          </div>
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          DewFlow AI
        </div>
      </div>

      <div
        style={{
          fontSize: '48px',
          fontWeight: 500,
          lineHeight: 1.2,
          maxWidth: '800px',
        }}
      >
        AI Automation, Data Analytics
        <br />
        and Web Development
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}