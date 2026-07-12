import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TradeLens — Day Trading Strategy Guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: '#0a0a0a',
        padding: '80px',
      }}
    >
      {/* Logo mark: lens ring with two candlesticks inside */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            border: '4px solid #e4e4e7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginRight: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
            <div style={{ width: 8, height: 22, background: '#10b981', borderRadius: 2 }} />
            <div style={{ width: 8, height: 30, background: '#e4e4e7', borderRadius: 2 }} />
          </div>
        </div>
        <span style={{ fontSize: 40, color: '#a1a1aa', fontWeight: 600 }}>TradeLens</span>
      </div>

      <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#fafafa', lineHeight: 1.15 }}>
        Day trading strategies,
      </div>
      <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#10b981', lineHeight: 1.15 }}>
        explained visually.
      </div>

      <div style={{ display: 'flex', fontSize: 26, color: '#71717a', marginTop: 30 }}>
        Price action · Trend following · Breakouts · Smart money concepts
      </div>
    </div>,
    { ...size },
  );
}
