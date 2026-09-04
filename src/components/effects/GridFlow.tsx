"use client";

import { useEffect, useRef, useCallback } from "react";

interface FlowNode { x: number; y: number; r: number; pulse: number; pulseSpeed: number; }
interface FlowConnection { a: number; b: number; }
interface FlowParticle { conn: number; t: number; speed: number; size: number; opacity: number; }

const NODES = [
  { x: 0.05, y: 0.10, r: 3, speed: 0.8 }, { x: 0.18, y: 0.22, r: 4, speed: 1.2 },
  { x: 0.32, y: 0.08, r: 3, speed: 0.6 }, { x: 0.48, y: 0.28, r: 5, speed: 1.0 },
  { x: 0.62, y: 0.12, r: 3, speed: 0.9 }, { x: 0.78, y: 0.32, r: 4, speed: 1.1 },
  { x: 0.92, y: 0.15, r: 3, speed: 0.7 }, { x: 0.15, y: 0.55, r: 4, speed: 1.3 },
  { x: 0.35, y: 0.48, r: 3, speed: 0.5 }, { x: 0.55, y: 0.60, r: 5, speed: 0.9 },
  { x: 0.72, y: 0.52, r: 3, speed: 1.0 }, { x: 0.88, y: 0.70, r: 4, speed: 0.8 },
  { x: 0.08, y: 0.78, r: 3, speed: 1.2 }, { x: 0.28, y: 0.82, r: 4, speed: 0.7 },
  { x: 0.50, y: 0.88, r: 3, speed: 0.9 }, { x: 0.68, y: 0.80, r: 5, speed: 1.1 },
  { x: 0.85, y: 0.92, r: 3, speed: 0.6 }, { x: 0.95, y: 0.55, r: 4, speed: 1.0 },
];

const CONNS: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[7,8],[8,9],[9,10],[10,11],
  [12,13],[13,14],[14,15],[15,16],[1,7],[3,9],[5,10],[6,17],[2,8],[4,9],[11,16],
];

export default function GridFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const animRef = useRef<number>(0);
  const visibleRef = useRef(true);
  const animateRef = useRef<() => void>(() => {});

  const animate = useCallback(() => {
    if (!visibleRef.current) { animRef.current = requestAnimationFrame(() => animateRef.current()); return; }
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    if (w === 0 || h === 0) { animRef.current = requestAnimationFrame(() => animateRef.current()); return; }
    canvas.width = w * dpr; canvas.height = h * dpr; ctx.scale(dpr, dpr);

    const isMobile = w < 768;
    const count = isMobile ? 14 : 35;
    const nodes: FlowNode[] = NODES.map(n => ({ x: n.x*w, y: n.y*h, r: n.r*(isMobile?0.65:1), pulse: Math.random()*Math.PI*2, pulseSpeed: n.speed*0.012 }));
    const conns: FlowConnection[] = CONNS.map(([a,b]) => ({a,b}));
    const particles: FlowParticle[] = Array.from({length: count}, () => ({ conn: Math.floor(Math.random()*conns.length), t: Math.random(), speed: 0.0003+Math.random()*0.0008, size: 1+Math.random()*1.5, opacity: 0.2+Math.random()*0.35 }));

    let lastTime = 0;

    function draw(timestamp: number) {
      if (!visibleRef.current) { animRef.current = requestAnimationFrame(draw); return; }
      if (isMobile && timestamp - lastTime < 50) { animRef.current = requestAnimationFrame(draw); return; }
      lastTime = timestamp;

      ctx!.clearRect(0,0,w,h);
      const mx = mouseRef.current.x-rect.left, my = mouseRef.current.y-rect.top;
      const hover = mx>=0&&mx<=w&&my>=0&&my<=h;

      // transmission lines
      ctx!.strokeStyle="rgba(59,130,246,0.08)"; ctx!.lineWidth=isMobile?0.5:0.7; ctx!.beginPath();
      for(const c of conns){ctx!.moveTo(nodes[c.a].x,nodes[c.a].y);ctx!.lineTo(nodes[c.b].x,nodes[c.b].y);} ctx!.stroke();

      // nodes with simple glow
      for(const n of nodes){n.pulse+=n.pulseSpeed;const pr=n.r+Math.sin(n.pulse)*n.r*0.4;
        ctx!.fillStyle="rgba(59,130,246,0.12)";ctx!.beginPath();ctx!.arc(n.x,n.y,pr*2,0,Math.PI*2);ctx!.fill();
        ctx!.fillStyle="rgba(96,165,250,0.55)";ctx!.beginPath();ctx!.arc(n.x,n.y,n.r*0.45,0,Math.PI*2);ctx!.fill();}

      // particles
      for(const p of particles){const c=conns[p.conn];const ax=nodes[c.a].x,ay=nodes[c.a].y,bx=nodes[c.b].x,by=nodes[c.b].y;
        p.t+=p.speed;if(p.t>1)p.t=0;const px=ax+(bx-ax)*p.t,py=ay+(by-ay)*p.t;let mx2=0,my2=0;
        if(hover){const d=Math.hypot(px-mx,py-my);if(d<140){const f=(140-d)/140*0.5;mx2=(mx-px)*f;my2=(my-py)*f;}}
        ctx!.fillStyle=`rgba(147,197,253,${p.opacity+0.2})`;ctx!.beginPath();ctx!.arc(px+mx2,py+my2,p.size,0,Math.PI*2);ctx!.fill();}

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
  },[]);

  useEffect(() => { animateRef.current = animate; }, [animate]);

  useEffect(()=>{
    const c=canvasRef.current;if(!c)return;

    // pause when not visible
    const io = new IntersectionObserver(([e])=>{visibleRef.current=e.isIntersecting;},{threshold:0.1});
    io.observe(c);

    const rs=()=>animate(),mm=(e:MouseEvent)=>{mouseRef.current={x:e.clientX,y:e.clientY};},tt=(e:TouchEvent)=>{if(e.touches.length)mouseRef.current={x:e.touches[0].clientX,y:e.touches[0].clientY};};
    window.addEventListener("resize",rs);window.addEventListener("mousemove",mm);window.addEventListener("touchmove",tt);
    const t=setTimeout(animate,200);
    return ()=>{io.disconnect();cancelAnimationFrame(animRef.current);window.removeEventListener("resize",rs);window.removeEventListener("mousemove",mm);window.removeEventListener("touchmove",tt);clearTimeout(t);};
  },[animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
}
