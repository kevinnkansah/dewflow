import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(request: Request) {
  const fontData = await fetch(
    new URL('../../../public/fonts/Aspekta.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '8rem',
          background: '#151515'
        }}
      >
        <div
          style={{
            fontFamily: 'Aspekta, sans-serif',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              fontSize: '7rem',
              lineHeight: '7rem',
              letterSpacing: '-0.05em',
              whiteSpace: 'pre-wrap',
              background: 'linear-gradient(to right, #60A5FA, #34D399)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            DewFlow AI
          </div>
          <div
            style={{
              fontSize: '3.5rem',
              lineHeight: '4rem',
              color: '#94A3B8',
              letterSpacing: '-0.02em'
            }}
          >
            Data Analytics • AI Automation • Modern Web Solutions
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Aspekta',
          data: fontData,
          style: 'normal'
        }
      ]
    }
  );
}
