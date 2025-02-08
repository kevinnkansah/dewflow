import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(request: Request) {
    const font = fetch(
        new URL('../../../public/fonts/Aspekta.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData = await font;

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    padding: '8rem',
                    background: '#151515',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '2rem',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        color: 'white',
                    }}>
                    <div
                        style={{
                            fontSize: '7rem',
                            lineHeight: '7rem',
                            letterSpacing: '-0.05em',
                            whiteSpace: 'pre-wrap',
                            textWrap: 'balance',
                            background: 'linear-gradient(to right, #60A5FA, #34D399)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}>
                        DewFlow AI
                    </div>
                    <div
                        style={{
                            fontSize: '3.5rem',
                            lineHeight: '4rem',
                            color: '#94A3B8',
                            letterSpacing: '-0.02em',
                        }}>
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
                    name: 'Inter',
                    data: fontData,
                    style: 'normal',
                },
            ],
        }
    )
}