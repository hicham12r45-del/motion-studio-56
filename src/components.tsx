import React from 'react';
import { COLORS, FONT } from './theme';

export const PhoneMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    width: 380, height: 800, borderRadius: 40, backgroundColor: COLORS.bg,
    border: `8px solid ${COLORS.surface}`, boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
    overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column'
  }}>
    {children}
  </div>
);

export const TouchPointer: React.FC<{ x: number; y: number; opacity: number; scale: number }> = ({ x, y, opacity, scale }) => (
  <div style={{
    position: 'absolute', left: x, top: y, width: 40, height: 40, borderRadius: 20,
    backgroundColor: 'rgba(6, 182, 212, 0.4)', border: `2px solid ${COLORS.cyan}`,
    opacity, transform: `translate(-50%, -50%) scale(${scale})`, pointerEvents: 'none'
  }}>
    <div style={{
      position: 'absolute', left: '50%', top: '50%', width: 12, height: 12,
      borderRadius: 6, backgroundColor: COLORS.cyan, transform: 'translate(-50%, -50%)'
    }} />
  </div>
);

export const HomeScreenUI: React.FC = () => (
  <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', fontFamily: FONT }}>
    <div style={{ color: COLORS.text, fontSize: 24, fontWeight: 'bold' }}>Motion Studio</div>
    <div style={{ color: COLORS.muted, fontSize: 12, marginBottom: 20 }}>Creative Motion Workspace</div>
    
    <div style={{ backgroundColor: COLORS.surface, padding: 20, borderRadius: 16, border: `1px solid ${COLORS.cyan}40`, marginBottom: 20 }}>
      <div style={{ color: COLORS.text, fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Create Something Amazing</div>
      <div style={{ backgroundColor: COLORS.cyan, padding: 12, borderRadius: 8, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>
        New Project +
      </div>
    </div>

    <div style={{ color: COLORS.text, fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Quick Actions</div>
    <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
      <div style={{ flex: 1, backgroundColor: COLORS.surface, padding: 15, borderRadius: 12, border: `1px solid ${COLORS.violet}40` }}>
        <div style={{ color: COLORS.violet, fontSize: 20, marginBottom: 8 }}>{"{ }"}</div>
        <div style={{ color: COLORS.text, fontSize: 12 }}>Open Editor</div>
      </div>
      <div style={{ flex: 1, backgroundColor: COLORS.surface, padding: 15, borderRadius: 12, border: `1px solid ${COLORS.cyan}40` }}>
        <div style={{ color: COLORS.cyan, fontSize: 20, marginBottom: 8 }}>◎</div>
        <div style={{ color: COLORS.text, fontSize: 12 }}>GitHub</div>
      </div>
    </div>
  </div>
);

export const CodeEditorUI: React.FC = () => (
  <div style={{ flex: 1, backgroundColor: '#0D1117', padding: 20, fontFamily: 'monospace', fontSize: 14 }}>
    <div style={{ color: COLORS.muted, marginBottom: 10 }}>Composition.tsx</div>
    <div style={{ color: COLORS.violet }}>import <span style={{color: COLORS.text}}>{"{ AbsoluteFill }"} </span><span style={{color: COLORS.violet}}>from</span> <span style={{color: COLORS.success}}>'remotion'</span>;</div>
    <br/>
    <div style={{ color: COLORS.violet }}>export const <span style={{color: COLORS.cyan}}>MyComposition</span> = () ={">"} {"{"}</div>
    <div style={{ color: COLORS.violet, paddingLeft: 20 }}>return (</div>
    <div style={{ color: COLORS.text, paddingLeft: 40 }}>{"<AbsoluteFill>"}</div>
    <div style={{ color: COLORS.success, paddingLeft: 60 }}>Hello, Remotion!</div>
    <div style={{ color: COLORS.text, paddingLeft: 40 }}>{"</AbsoluteFill>"}</div>
    <div style={{ color: COLORS.violet, paddingLeft: 20 }}>);</div>
    <div style={{ color: COLORS.violet }}>{"};"}</div>
  </div>
);