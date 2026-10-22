// 4. GitHub Integration (60s - 95s / 1800 - 2850 frames)
export const GitHubScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Path movement
  const progress = interpolate(frame, [30, 120], [0, 1], { extrapolateRight: 'clamp' });
  const pulseX = interpolate(progress, [0, 1], [300, 1620]);
  const pulseOpacity = interpolate(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  const textOpacity = interpolate(frame, [120, 150], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, alignItems: 'center', justifyContent: 'center' }}>
      {/* Path Line */}
      <div style={{ position: 'absolute', width: 1320, height: 4, backgroundColor: COLORS.surface, top: '50%', left: 300, borderRadius: 2 }}>
        <div style={{ width: `${progress * 100}%`, height: '100%', backgroundColor: COLORS.cyan, borderRadius: 2 }} />
      </div>

      {/* Pulse */}
      <div style={{ position: 'absolute', width: 20, height: 20, borderRadius: 10, backgroundColor: COLORS.cyan, left: pulseX, top: 'calc(50% - 8px)', boxShadow: `0 0 20px ${COLORS.cyan}`, opacity: pulseOpacity }} />

      {/* Left Side (Phone) */}
      <div style={{ position: 'absolute', left: 200, top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ width: 150, height: 300, border: `2px solid ${COLORS.surface}`, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.text, fontFamily: FONT }}>
          Local Code
        </div>
      </div>

      {/* Right Side (GitHub) */}
      <div style={{ position: 'absolute', right: 200, top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ width: 150, height: 150, border: `2px solid ${COLORS.violet}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.violet, fontSize: 40, fontFamily: FONT, fontWeight: 'bold' }}>
          Git
        </div>
      </div>

      {/* Educational Overlay */}
      <div style={{ position: 'absolute', bottom: 150, opacity: textOpacity, textAlign: 'center', width: 800, fontFamily: FONT }}>
        <h2 style={{ color: COLORS.cyan, fontSize: 36 }}>المزامنة السحابية (Push)</h2>
        <p style={{ color: COLORS.text, fontSize: 22, lineHeight: 1.5 }}>
          بضغطة زر واحدة، يتم رفع كود مشروعك تلقائياً إلى مستودعك على GitHub.
        </p>
      </div>
    </AbsoluteFill>
  );
};

// 5. Rendering Engine (95s - 140s / 2850 - 4200 frames)
export const RenderScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  const step1 = interpolate(frame, [30, 60], [0, 1], { extrapolateRight: 'clamp' });
  const step2 = interpolate(frame, [90, 120], [0, 1], { extrapolateRight: 'clamp' });
  const step3 = interpolate(frame, [150, 180], [0, 1], { extrapolateRight: 'clamp' });
  const loadingProgress = interpolate(frame, [180, 240], [0, 100], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      
      <h2 style={{ color: COLORS.text, fontSize: 40, fontFamily: FONT, marginBottom: 60, opacity: interpolate(frame, [0, 30], [0, 1]) }}>
        محرك التصيير السحابي (GitHub Actions)
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: 40, fontFamily: FONT }}>
        {/* Step 1: Source */}
        <div style={{ opacity: step1, transform: `translateY(${(1-step1) * 20}px)`, backgroundColor: COLORS.surface, padding: 30, borderRadius: 16, border: `1px solid ${COLORS.cyan}` }}>
          <div style={{ color: COLORS.cyan, fontSize: 24, fontWeight: 'bold' }}>1. Source Code</div>
        </div>

        {/* Arrow */}
        <div style={{ opacity: step1, color: COLORS.muted, fontSize: 30 }}>➔</div>

        {/* Step 2: Runner */}
        <div style={{ opacity: step2, transform: `translateY(${(1-step2) * 20}px)`, backgroundColor: COLORS.surface, padding: 30, borderRadius: 16, border: `1px solid ${COLORS.violet}` }}>
          <div style={{ color: COLORS.violet, fontSize: 24, fontWeight: 'bold' }}>2. Cloud Server</div>
          <div style={{ color: COLORS.muted, fontSize: 14, marginTop: 10 }}>Running Remotion...</div>
        </div>

        {/* Arrow */}
        <div style={{ opacity: step2, color: COLORS.muted, fontSize: 30 }}>➔</div>

        {/* Step 3: Video */}
        <div style={{ opacity: step3, transform: `translateY(${(1-step3) * 20}px)`, backgroundColor: COLORS.surface, padding: 30, borderRadius: 16, border: `1px solid ${COLORS.success}` }}>
          <div style={{ color: COLORS.success, fontSize: 24, fontWeight: 'bold' }}>3. Video Artifact</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginTop: 80, width: 800, height: 8, backgroundColor: COLORS.surface, borderRadius: 4, opacity: step3 }}>
        <div style={{ width: `${loadingProgress}%`, height: '100%', backgroundColor: COLORS.success, borderRadius: 4 }} />
      </div>
      <div style={{ marginTop: 20, color: COLORS.success, fontFamily: 'monospace', fontSize: 18, opacity: step3 }}>
        {loadingProgress < 100 ? `Rendering... ${Math.floor(loadingProgress)}%` : 'Render Completed Successfully.'}
      </div>
    </AbsoluteFill>
  );
};

// 6. Download & Outro (140s - 185s / 4200 - 5550 frames)
export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const phoneScale = spring({ frame: frame - 30, fps, config: { damping: 14 } });
  const textOpacity = interpolate(frame, [80, 120], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ transform: `scale(${phoneScale})`, display: 'flex', gap: 60 }}>
        {/* Phone with Success UI */}
        <PhoneMockup>
          <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: FONT }}>
             <div style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: `${COLORS.success}20`, border: `4px solid ${COLORS.success}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLORS.success, fontSize: 40, marginBottom: 20 }}>
               ✓
             </div>
             <div style={{ color: COLORS.text, fontSize: 24, fontWeight: 'bold' }}>Video Ready!</div>
             <div style={{ color: COLORS.muted, fontSize: 14, marginTop: 10, marginBottom: 30 }}>Saved to device gallery</div>
             <div style={{ backgroundColor: COLORS.cyan, padding: 15, borderRadius: 10, color: '#fff', fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
               Open Video
             </div>
          </div>
        </PhoneMockup>
      </div>

      <div style={{ position: 'absolute', bottom: 100, opacity: textOpacity, textAlign: 'center', width: '100%' }}>
        <h1 style={{ color: COLORS.text, fontFamily: FONT, fontSize: 50, margin: 0, letterSpacing: 4 }}>MOTION STUDIO</h1>
        <p style={{ color: COLORS.cyan, fontFamily: FONT, fontSize: 24, marginTop: 15 }}>Cinematic Motion. In Your Pocket.</p>
      </div>
    </AbsoluteFill>
  );
};