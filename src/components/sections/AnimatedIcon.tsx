import React from 'react';

interface AnimatedIconProps {
  type: 'learn' | 'practice' | 'compete' | 'ai' | 'expert';
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ type }) => {
  const renderIcon = () => {
    switch (type) {
      case 'learn':
        return (
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="learnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0088a9" />
                <stop offset="100%" stopColor="#00ccff" />
              </linearGradient>
              <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#00ccff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00ccff" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <style>
              {`
                @keyframes bookFloat {
                  0%, 100% { transform: translateY(0) rotate(0deg); }
                  25% { transform: translateY(-5px) rotate(1deg); }
                  75% { transform: translateY(5px) rotate(-1deg); }
                }
                @keyframes light {
                  0%, 100% { opacity: 0.5; filter: blur(3px); }
                  50% { opacity: 1; filter: blur(5px); }
                }
                @keyframes pageTurn {
                  0%, 100% { transform: scaleX(1); }
                  50% { transform: scaleX(0.7); }
                }
                @keyframes brain {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.1); }
                }
                @keyframes pulse {
                  0% { transform: scale(1); opacity: 0.7; }
                  50% { transform: scale(1.05); opacity: 1; }
                  100% { transform: scale(1); opacity: 0.7; }
                }
                @keyframes orbit {
                  from { transform: rotate(0deg) translateX(12px) rotate(0deg); }
                  to { transform: rotate(360deg) translateX(12px) rotate(-360deg); }
                }
                @keyframes dash {
                  to { stroke-dashoffset: -1000; }
                }
                .book { animation: bookFloat 4s ease-in-out infinite; }
                .light { animation: light 3s ease-in-out infinite; }
                .page { animation: pageTurn 5s ease-in-out infinite alternate; }
                .brain { animation: brain 4s ease-in-out infinite; }
                .pulse { animation: pulse 2s infinite; }
                .electron { animation: orbit 5s linear infinite; }
                .electron2 { animation: orbit 7s linear infinite reverse; }
                .electron3 { animation: orbit 3s linear infinite; }
                .path { stroke-dasharray: 5; animation: dash 20s linear infinite; }
              `}
            </style>
            <circle cx="60" cy="60" r="50" fill="url(#glowGradient)" className="light" />
            <g className="book">
              {/* Book Base */}
              <path d="M25 30 L75 30 L75 90 L25 90 Z" fill="url(#learnGradient)" filter="url(#glow)" />
              <path d="M75 30 L95 40 L95 100 L75 90 Z" fill="#006688" />
              <path d="M25 90 L25 30 L75 30 L75 90 Z" fill="#004466" />
              <path className="page" d="M30 35 L70 35 L70 85 L30 85 Z" fill="#ffffff" opacity="0.9" />
              
              {/* Brain on page */}
              <g className="brain" transform="translate(50, 60)">
                <path d="M0,0 C5,-10 15,-10 20,0 C25,10 15,15 10,15 C5,15 -5,10 0,0 Z" fill="#00ccff" opacity="0.8" />
                <path d="M0,0 C-5,-10 -15,-10 -20,0 C-25,10 -15,15 -10,15 C-5,15 5,10 0,0 Z" fill="#00ccff" opacity="0.8" />
                <circle cx="0" cy="0" r="3" fill="#0ff8ff" />
              </g>
              
              {/* Orbiting particles */}
              <circle cx="50" cy="60" r="20" stroke="#0ff8ff" strokeWidth="1" fill="none" opacity="0.5" />
              <circle className="electron" cx="50" cy="60" r="3" fill="#0ff8ff" opacity="0.8" />
              <circle className="electron2" cx="50" cy="60" r="2" fill="#ffffff" opacity="0.8" />
              <circle className="electron3" cx="50" cy="60" r="1.5" fill="#00ccff" opacity="0.8" />
              
              {/* Connection lines */}
              <path className="path" d="M30 40 C40 35, 60 35, 70 40" stroke="#0ff8ff" strokeWidth="1" fill="none" />
              <path className="path" d="M30 80 C40 85, 60 85, 70 80" stroke="#0ff8ff" strokeWidth="1" fill="none" />
            </g>
          </svg>
        );
      
      case 'practice':
        return (
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#001e29" />
                <stop offset="100%" stopColor="#0088a9" />
              </linearGradient>
              <filter id="codeGlow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
              <clipPath id="screenClip">
                <rect x="20" y="20" width="80" height="60" rx="4" />
              </clipPath>
            </defs>
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0) rotate(0deg); }
                  50% { transform: translateY(-3px) rotate(0.5deg); }
                }
                @keyframes type {
                  0% { width: 0; }
                  50% { width: 40px; }
                  70% { width: 40px; }
                  80% { width: 0; }
                  100% { width: 0; }
                }
                @keyframes cursor {
                  0%, 100% { opacity: 0; }
                  50% { opacity: 1; }
                }
                @keyframes scan {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(60px); }
                }
                @keyframes codePulse {
                  0%, 100% { opacity: 0.7; transform: scale(1); }
                  50% { opacity: 1; transform: scale(1.02); }
                }
                @keyframes particleMove {
                  0% { transform: translate(0, 0); opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
                }
                .monitor { animation: float 3s ease-in-out infinite; }
                .scanline { animation: scan 2s linear infinite; }
                .typing { animation: type 4s infinite; }
                .cursor { animation: cursor 1s infinite; }
                .code { animation: codePulse 2s ease-in-out infinite; }
                .particle1 { --tx: 20px; --ty: -30px; animation: particleMove 5s infinite; }
                .particle2 { --tx: -30px; --ty: -20px; animation: particleMove 7s infinite 1s; }
                .particle3 { --tx: 25px; --ty: -25px; animation: particleMove 6s infinite 2s; }
                .particle4 { --tx: -20px; --ty: -30px; animation: particleMove 8s infinite 3s; }
              `}
            </style>
            
            <g className="monitor">
              {/* Monitor/Screen */}
              <rect x="20" y="20" width="80" height="60" rx="4" fill="url(#screenGlow)" stroke="#0088a9" strokeWidth="2" />
              <rect x="25" y="25" width="70" height="50" rx="2" fill="#001e29" />
              <rect x="20" y="80" width="80" height="5" rx="2" fill="#0088a9" />
              <rect x="50" y="85" width="20" height="10" rx="2" fill="#0088a9" />
              <rect x="40" y="95" width="40" height="2" rx="1" fill="#0088a9" />
              
              {/* Code on screen */}
              <g clipPath="url(#screenClip)">
                <rect className="scanline" x="20" y="20" width="80" height="1" fill="#0ff8ff" opacity="0.2" />
                
                <g className="code" filter="url(#codeGlow)">
                  <rect x="30" y="30" width="60" height="3" rx="1" fill="#0ff8ff" opacity="0.7" />
                  <rect x="30" y="36" width="40" height="3" rx="1" fill="#0ff8ff" opacity="0.7" />
                  <rect x="30" y="42" width="50" height="3" rx="1" fill="#0ff8ff" opacity="0.7" />
                  <rect x="35" y="48" width="45" height="3" rx="1" fill="#0ff8ff" opacity="0.5" />
                  <rect x="35" y="54" width="30" height="3" rx="1" fill="#0ff8ff" opacity="0.5" />
                  
                  <rect x="30" y="60" width="0" height="3" rx="1" fill="#ffffff" opacity="0.9" className="typing" />
                  <rect x="30" y="60" width="1" height="3" fill="#ffffff" opacity="0.9" className="cursor" />
                </g>
                
                {/* Particles */}
                <circle className="particle1" cx="60" cy="60" r="1.5" fill="#0ff8ff" />
                <circle className="particle2" cx="65" cy="65" r="1" fill="#0ff8ff" />
                <circle className="particle3" cx="55" cy="55" r="1.2" fill="#0ff8ff" />
                <circle className="particle4" cx="70" cy="50" r="1" fill="#0ff8ff" />
              </g>
            </g>
          </svg>
        );
      
      case 'compete':
        return (
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="60%" stopColor="#00ccff" />
                <stop offset="100%" stopColor="#0088a9" />
              </linearGradient>
              <filter id="trophyGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <radialGradient id="spotlightGradient" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <style>
              {`
                @keyframes spotlight {
                  0%, 100% { opacity: 0.3; transform: translateY(0) scale(1); }
                  50% { opacity: 0.6; transform: translateY(5px) scale(1.1); }
                }
                @keyframes trophyFloat {
                  0% { transform: translateY(0) rotate(-2deg); }
                  25% { transform: translateY(-5px) rotate(0deg); }
                  50% { transform: translateY(0) rotate(2deg); }
                  75% { transform: translateY(5px) rotate(0deg); }
                  100% { transform: translateY(0) rotate(-2deg); }
                }
                @keyframes shine {
                  0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
                  100% { transform: translateX(100%) translateY(100%) rotate(30deg); }
                }
                @keyframes starRotate {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                @keyframes starScale {
                  0%, 100% { transform: scale(0.8); }
                  50% { transform: scale(1.2); }
                }
                @keyframes fireParticle {
                  0% { transform: translateY(0) scale(1); opacity: 0; }
                  10% { opacity: 1; }
                  100% { transform: translateY(-40px) scale(0); opacity: 0; }
                }
                .spotlight { animation: spotlight 4s ease-in-out infinite; }
                .trophy { animation: trophyFloat 5s ease-in-out infinite; }
                .shine { animation: shine 3s ease-in-out infinite; }
                .star-rotate { animation: starRotate 10s linear infinite; }
                .star-scale { animation: starScale 2s ease-in-out infinite; }
                .fire1 { animation: fireParticle 2s ease-out infinite; }
                .fire2 { animation: fireParticle 2s ease-out infinite 0.5s; }
                .fire3 { animation: fireParticle 2s ease-out infinite 1s; }
              `}
            </style>
            
            {/* Spotlight effect */}
            <ellipse cx="60" cy="60" rx="45" ry="70" fill="url(#spotlightGradient)" className="spotlight" />
            
            <g className="trophy">
              {/* Trophy cup */}
              <path d="M45 85 L75 85 L70 75 L50 75 Z" fill="url(#trophyGradient)" filter="url(#trophyGlow)" />
              <path d="M50 40 L70 40 L75 75 L45 75 Z" fill="url(#trophyGradient)" filter="url(#trophyGlow)" />
              <path d="M45 35 L75 35 L75 40 L45 40 Z" fill="#0088a9" filter="url(#trophyGlow)" />
              
              {/* Trophy handles */}
              <path d="M75 38 C85 38, 90 42, 90 50 C90 60, 82 65, 75 55" fill="none" stroke="#00ccff" strokeWidth="3" strokeLinecap="round" />
              <path d="M45 38 C35 38, 30 42, 30 50 C30 60, 38 65, 45 55" fill="none" stroke="#00ccff" strokeWidth="3" strokeLinecap="round" />
              
              {/* Trophy stand */}
              <rect x="57" y="85" width="6" height="10" fill="#0088a9" />
              <rect x="52" y="95" width="16" height="3" rx="1" fill="#0088a9" />
              
              {/* Shine effect */}
              <rect x="55" y="45" width="3" height="25" fill="#ffffff" opacity="0.7" transform="rotate(30 60 60)" className="shine" />
              
              {/* Stars and fire particles */}
              <g className="star-rotate" transform="translate(60, 45)">
                <path d="M0,-15 L2,-5 L12,-5 L4,1 L7,10 L0,5 L-7,10 L-4,1 L-12,-5 L-2,-5 Z" fill="#ffffff" opacity="0.8" className="star-scale" />
              </g>
              
              <circle cx="55" cy="75" r="2" fill="#ffcc00" opacity="0.8" className="fire1" />
              <circle cx="60" cy="75" r="2" fill="#ffcc00" opacity="0.8" className="fire2" />
              <circle cx="65" cy="75" r="2" fill="#ffcc00" opacity="0.8" className="fire3" />
            </g>
            
            {/* Number 1 mark */}
            <g transform="translate(60, 57)">
              <circle cx="0" cy="0" r="8" fill="#001e29" stroke="#00ccff" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#00ccff" fontWeight="bold" fontSize="10">1</text>
            </g>
          </svg>
        );
      
      case 'ai':
        return (
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ccff" />
                <stop offset="100%" stopColor="#0088a9" />
              </linearGradient>
              <filter id="robotGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <radialGradient id="energyCore" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="20%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#0088a9" stopOpacity="0" />
              </radialGradient>
            </defs>
            <style>
              {`
                @keyframes hover {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-5px); }
                }
                @keyframes energyPulse {
                  0%, 100% { transform: scale(0.8); opacity: 0.7; }
                  50% { transform: scale(1.2); opacity: 1; }
                }
                @keyframes blink {
                  0%, 48%, 52%, 100% { opacity: 1; transform: scale(1); }
                  50% { opacity: 0.3; transform: scale(0.8); }
                }
                @keyframes antennaGlow {
                  0%, 100% { filter: drop-shadow(0 0 2px #00ffff); }
                  50% { filter: drop-shadow(0 0 8px #00ffff); }
                }
                @keyframes scan {
                  0%, 100% { height: 0; y: 45; opacity: 0.3; }
                  50% { height: 20; y: 45; opacity: 0.7; }
                }
                @keyframes circuitPulse {
                  0%, 100% { stroke-dashoffset: 0; }
                  50% { stroke-dashoffset: 10; }
                }
                @keyframes dataStream {
                  from { stroke-dashoffset: 1000; }
                  to { stroke-dashoffset: 0; }
                }
                .robot { animation: hover 3s ease-in-out infinite; }
                .energy-core { animation: energyPulse 2s ease-in-out infinite; }
                .eye { animation: blink 4s infinite; }
                .antenna { animation: antennaGlow 2s infinite; }
                .scan { animation: scan 3s infinite; }
                .circuit { stroke-dasharray: 5; animation: circuitPulse 3s linear infinite; }
                .data-stream { stroke-dasharray: 4 2; animation: dataStream 20s linear infinite; }
              `}
            </style>
            
            <g className="robot">
              {/* Robot body */}
              <rect x="35" y="40" width="50" height="45" rx="5" fill="url(#robotGradient)" filter="url(#robotGlow)" />
              <rect x="45" y="85" width="10" height="15" fill="url(#robotGradient)" />
              <rect x="65" y="85" width="10" height="15" fill="url(#robotGradient)" />
              
              {/* Energy core */}
              <circle cx="60" cy="65" r="10" fill="url(#energyCore)" className="energy-core" />
              
              {/* Eyes */}
              <g className="eyes">
                <circle cx="45" cy="50" r="8" fill="#001e29" stroke="#00ccff" strokeWidth="2" />
                <circle cx="75" cy="50" r="8" fill="#001e29" stroke="#00ccff" strokeWidth="2" />
                <circle cx="45" cy="50" r="4" fill="#00ffff" className="eye" />
                <circle cx="75" cy="50" r="4" fill="#00ffff" className="eye" />
              </g>
              
              {/* Antenna */}
              <g className="antenna">
                <line x1="60" y1="40" x2="60" y2="25" stroke="#00ccff" strokeWidth="2" />
                <circle cx="60" cy="20" r="5" fill="#00ffff" />
              </g>
              
              {/* Scan line */}
              <rect x="40" y="45" width="40" height="0" fill="#00ffff" opacity="0.5" className="scan" />
              
              {/* Circuit patterns */}
              <path className="circuit" d="M40 70 H55 V75 H65 V70 H80" stroke="#00ffff" strokeWidth="1" fill="none" />
              <path className="circuit" d="M40 80 H50 V75 H70 V80 H80" stroke="#00ffff" strokeWidth="1" fill="none" />
              
              {/* Data streams */}
              <path className="data-stream" d="M20 30 C30 40, 40 20, 50 30 S70 40, 80 30 S100 20, 110 30" stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.5" />
              <path className="data-stream" d="M20 100 C30 90, 40 110, 50 100 S70 90, 80 100 S100 110, 110 100" stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.5" />
            </g>
          </svg>
        );
      
      case 'expert':
        return (
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="certGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0088a9" />
                <stop offset="100%" stopColor="#004466" />
              </linearGradient>
              <filter id="paperShadow">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3" />
              </filter>
              <linearGradient id="medalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffcc00" />
                <stop offset="100%" stopColor="#00ccff" />
              </linearGradient>
              <filter id="medalGlow">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <style>
              {`
                @keyframes float {
                  0%, 100% { transform: translateY(0) rotate(-1deg); }
                  50% { transform: translateY(-5px) rotate(1deg); }
                }
                @keyframes medalSpin {
                  0% { transform: rotateY(0deg); }
                  50% { transform: rotateY(180deg); }
                  100% { transform: rotateY(360deg); }
                }
                @keyframes medalPulse {
                  0%, 100% { transform: scale(1); filter: brightness(1); }
                  50% { transform: scale(1.1); filter: brightness(1.3); }
                }
                @keyframes glint {
                  0%, 100% { opacity: 0; transform: translate(0, 0) scale(0.5); }
                  50% { opacity: 1; transform: translate(5px, -5px) scale(1); }
                }
                @keyframes stamp {
                  0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
                  10% { opacity: 1; transform: scale(1.05) rotate(5deg); }
                  20% { opacity: 1; transform: scale(1) rotate(0deg); }
                }
                @keyframes lineWrite {
                  0% { width: 0; }
                  100% { width: 100%; }
                }
                .certificate { animation: float 5s ease-in-out infinite; }
                .medal { animation: medalPulse 3s ease-in-out infinite; }
                .medal-front { animation: medalSpin 10s linear infinite; transform-origin: center; transform-style: preserve-3d; }
                .glint { animation: glint 2s ease-in-out infinite; }
                .stamp { animation: stamp 4s ease-in-out infinite; }
                .line1 { animation: lineWrite 2s ease-out; }
                .line2 { animation: lineWrite 2s ease-out 0.3s forwards; width: 0; }
                .line3 { animation: lineWrite 2s ease-out 0.6s forwards; width: 0; }
              `}
            </style>
            
            <g className="certificate">
              {/* Certificate paper */}
              <rect x="20" y="30" width="80" height="60" rx="3" fill="url(#certGradient)" filter="url(#paperShadow)" />
              <rect x="25" y="35" width="70" height="50" rx="2" fill="#ffffff" opacity="0.9" />
              
              {/* Lines of text */}
              <rect x="30" y="45" width="60" height="2" rx="1" fill="#0088a9" opacity="0.8" className="line1" />
              <rect x="30" y="55" width="60" height="2" rx="1" fill="#0088a9" opacity="0.7" className="line2" />
              <rect x="30" y="65" width="40" height="2" rx="1" fill="#0088a9" opacity="0.6" className="line3" />
              
              {/* Official stamp */}
              <g className="stamp" transform="translate(75, 70)">
                <circle cx="0" cy="0" r="10" stroke="#0088a9" strokeWidth="1" fill="none" />
                <path d="M-5,-5 L5,5 M-5,5 L5,-5" stroke="#0088a9" strokeWidth="1" />
                <circle cx="0" cy="0" r="5" stroke="#0088a9" strokeWidth="1" fill="none" />
              </g>
              
              {/* Decorative corners */}
              <path d="M25 35 L35 35 L35 45" fill="none" stroke="#00ccff" strokeWidth="1" />
              <path d="M95 35 L85 35 L85 45" fill="none" stroke="#00ccff" strokeWidth="1" />
              <path d="M25 85 L35 85 L35 75" fill="none" stroke="#00ccff" strokeWidth="1" />
              <path d="M95 85 L85 85 L85 75" fill="none" stroke="#00ccff" strokeWidth="1" />
            </g>
            
            {/* Medal */}
            <g className="medal" transform="translate(35, 35)">
              <g className="medal-front">
                <circle cx="0" cy="0" r="12" fill="url(#medalGradient)" filter="url(#medalGlow)" />
                <path d="M-6,0 L-2,4 L6,-4" stroke="#ffffff" strokeWidth="2" fill="none" />
                <circle cx="0" cy="0" r="8" fill="none" stroke="#ffffff" strokeWidth="1" />
              </g>
              
              {/* Medal ribbon */}
              <path d="M-6,12 L0,18 L6,12" fill="#00ccff" />
              
              {/* Glint effects */}
              <circle cx="-4" cy="-4" r="2" fill="#ffffff" opacity="0.8" className="glint" />
              <circle cx="3" cy="-2" r="1" fill="#ffffff" opacity="0.8" className="glint" />
            </g>
          </svg>
        );
      
      default:
        return (
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="40" fill="#0088a9" />
            <circle cx="60" cy="60" r="30" fill="#001e29" />
            <circle cx="60" cy="60" r="20" fill="#0ff8ff" opacity="0.5" />
          </svg>
        );
    }
  };

  return (
    <div className="w-28 h-28">
      {renderIcon()}
    </div>
  );
};

export default AnimatedIcon;