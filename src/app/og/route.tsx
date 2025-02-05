import { ImageResponse } from 'next/og'

export const runtime = 'edge';

export async function GET(request: Request) {
    const font = fetch(
        new URL('../../../public/fonts/Inter.ttf', import.meta.url)
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
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '4rem',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        color: 'white',
                    }}>
                     <div
                         style={{
                                fontSize: '8rem',
                                lineHeight: '8rem',
                                letterSpacing: '-0.05em',
                                whiteSpace: 'pre-wrap',
                                textWrap: 'balance',
                         }}>
                         AI & Web Design Agency
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