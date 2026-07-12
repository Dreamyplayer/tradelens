import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          border: '2.2px solid #e4e4e7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
          <div style={{ width: 2.5, height: 8, background: '#10b981', borderRadius: 1 }} />
          <div style={{ width: 2.5, height: 11, background: '#e4e4e7', borderRadius: 1 }} />
        </div>
      </div>
    </div>,
    { ...size },
  );
}
