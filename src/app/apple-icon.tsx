import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '10px solid #e4e4e7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
          <div style={{ width: 14, height: 42, background: '#10b981', borderRadius: 4 }} />
          <div style={{ width: 14, height: 58, background: '#e4e4e7', borderRadius: 4 }} />
        </div>
      </div>
    </div>,
    { ...size },
  );
}
