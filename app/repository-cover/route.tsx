import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const fontPromise = fetch(
  new URL('../assets/Lato-Bold.ttf', import.meta.url),
).then(res => res.arrayBuffer())

const bgPromise = fetch(new URL('./background.png', import.meta.url)).then(
  res => res.arrayBuffer(),
)

export async function GET(req: NextRequest) {
  try {
    const [fontData, bgData] = await Promise.all([fontPromise, bgPromise])

    const url = new URL(req.url)

    const title = url.searchParams.get('title')
    const subtitle = url.searchParams.get('subtitle')

    if (!title) {
      return new Response('`title` query param is required', {
        status: 400,
      })
    }

    if (!subtitle) {
      return new Response('`subtitle` query param is required', {
        status: 400,
      })
    }

    return new ImageResponse(
      (
        <div tw="flex flex-col justify-center h-full w-full">
          <img
            alt="avatar"
            // @ts-expect-error - src as ArrayBuffer is not recognized by TS
            src={bgData}
            tw="w-full h-full inset-0 absolute"
          />
          <div tw="flex flex-col px-[120px] w-full items-end">
            <h1 tw="text-white text-[88px] font-bold text-right">{title}</h1>
            <h2 tw="text-white text-[32px] font-bold -mt-[16px] text-right">
              {subtitle}
            </h2>
          </div>
        </div>
      ),
      {
        width: 1250,
        height: 703,
        fonts: [
          {
            name: 'Lato',
            data: fontData,
            weight: 700,
            style: 'normal',
          },
        ],
      },
    )
  } catch (e: any) {
    console.log(e)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
