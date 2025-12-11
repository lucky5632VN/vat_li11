"use client"

import React from 'react'
import {
    FlaskConical
} from 'lucide-react'

// RAW HTML CONTENT from su-chuyen-the.html
// This ensures exact behavior as requested by the user without import issues
const RAW_HTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mô Phỏng Sự Chuyển Thể</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        lab: {
                            cyan: '#06b6d4',
                            dark_cyan: '#0891b2',
                        }
                    },
                    fontFamily: {
                        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
                        sans: ['ui-sans-serif', 'system-ui', '-apple-system', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
                        tech: ['Orbitron', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Three.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
    <!-- MediaPipe -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"></script>
    <style>
        body { margin: 0; overflow: hidden; background-color: #0f172a; }
        #simulationCanvas { width: 100%; height: 100vh; display: block; outline: none; }
        .ui-panel {
            position: absolute; top: 20px; right: 20px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 0; border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            width: 380px; max-height: 90vh; overflow: hidden;
            resize: both; min-width: 300px; min-height: 200px;
            display: flex; flex-direction: column;
            transition: opacity 0.3s ease; z-index: 50;
        }
        .panel-header {
            padding: 12px 16px; background: rgba(0, 0, 0, 0.05);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            cursor: move; display: flex; justify-content: space-between; align-items: center; user-select: none;
        }
        .panel-content { padding: 16px; overflow-y: auto; flex: 1; }
        .dark .ui-panel {
            background: rgba(15, 23, 42, 0.9);
            border: 1px solid #334155; color: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .dark .panel-header {
            background: rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        #btnShowPanel {
            position: absolute; bottom: 20px; left: 20px; z-index: 40; display: none;
        }
        #webcam-feed {
            position: absolute; bottom: 20px; right: 20px; width: 160px; height: 120px;
            border-radius: 12px; border: 2px solid rgba(6, 182, 212, 0.5);
            z-index: 50; transform: scaleX(-1); object-fit: cover; opacity: 0.8; transition: all 0.3s ease;
            display: none;
        }
        #webcam-feed.active { border-color: #06b6d4; box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); opacity: 1; }
        .gesture-guide {
            position: absolute; bottom: 150px; right: 20px;
            background: rgba(15, 23, 42, 0.9); padding: 15px; border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1); color: white; font-size: 12px;
            z-index: 50; width: 200px; backdrop-filter: blur(8px);
            display: none;
        }
        .gesture-item { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .gesture-item:last-child { margin-bottom: 0; }
        .gesture-icon { font-size: 18px; width: 20px; text-align: center; }
        .status-dot { width: 8px; height: 8px; background: #64748b; border-radius: 50%; display: inline-block; margin-right: 6px; }
        .status-dot.active { background: #06b6d4; box-shadow: 0 0 8px #06b6d4; }
    </style>
</head>
<body class="dark overflow-hidden m-0 p-0 bg-gray-900">
    <!-- Theme Toggle -->
    <!-- Removed by request -->
    <div id="simulationCanvas"></div>
    <button id="btnShowPanel" onclick="togglePanel(true)" class="bg-lab-cyan hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110">
        <i data-lucide="settings-2"></i>
    </button>
    <div class="ui-panel" id="mainPanel">
        <div class="panel-header" id="panelHeader">
            <h1 class="text-lg font-bold font-tech uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
                <i data-lucide="flask-conical" class="text-lab-cyan w-5 h-5"></i> Phân Tích
            </h1>
            <div class="flex items-center gap-2">
                <div class="text-xs font-mono px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-500 dark:text-slate-300 font-bold" id="state-label">SOLID</div>
                <button onclick="togglePanel(false)" class="text-slate-400 hover:text-white"><i data-lucide="minus" class="w-5 h-5"></i></button>
            </div>
        </div>
        <div class="panel-content">
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label class="block text-xs font-semibold mb-1 text-slate-500 dark:text-slate-400">Chọn Chất</label>
                    <select id="materialSelect" class="w-full p-2 rounded-lg bg-slate-100 dark:bg-slate-700 border-none text-slate-700 dark:text-slate-200 text-sm outline-none focus:ring-2 focus:ring-lab-cyan">
                        <option value="water">Nước cất</option>
                        <option value="oil">Dầu thực vật</option>
                        <option value="iron">Sắt</option>
                        <option value="copper">Đồng</option>
                        <option value="custom">Tự chọn...</option>
                    </select>
                </div>
                <div></div>
            </div>
            <div id="customInputs" class="mb-4 grid grid-cols-2 gap-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg hidden">
                <div><label class="text-xs text-slate-500 mb-1 block">Nhiệt độ Nóng chảy (°C)</label><input type="number" id="inputTm" class="w-full p-1.5 bg-white dark:bg-slate-700 rounded text-sm border border-slate-200 dark:border-slate-600 focus:border-lab-cyan outline-none"></div>
                <div><label class="text-xs text-slate-500 mb-1 block">Nhiệt độ Sôi (°C)</label><input type="number" id="inputTb" class="w-full p-1.5 bg-white dark:bg-slate-700 rounded text-sm border border-slate-200 dark:border-slate-600 focus:border-lab-cyan outline-none"></div>
            </div>
            <div class="mb-4">
                <canvas id="graphCanvas" width="300" height="150" class="w-full bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 mb-2"></canvas>
                <div class="flex gap-2">
                    <button id="btnAutoHeat" class="flex-1 py-2 bg-lab-cyan dark:bg-lab-dark_cyan hover:bg-purple-600 dark:hover:bg-sky-600 text-white rounded font-bold transition-colors flex justify-center items-center gap-2"><i data-lucide="play-circle" class="w-5 h-5"></i> Gia nhiệt</button>
                    <button id="btnToggleGesture" onclick="toggleGestureControl()" class="w-12 h-[42px] bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-600 dark:text-slate-300 rounded flex items-center justify-center transition-colors" title="Bật/Tắt Điều khiển tay"><i data-lucide="hand" class="w-6 h-6"></i></button>
                </div>
            </div>
            <div class="mb-6">
                <label class="flex justify-between text-sm font-semibold mb-2 text-slate-600 dark:text-slate-300"><span>Nhiệt Độ (T)</span><span id="tempDisplay" class="font-mono text-lab-cyan text-lg">0°C</span></label>
                <input type="range" id="tempSlider" min="-273" max="3000" value="0" step="1" class="w-full h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer">
                <div class="flex justify-between mt-2 text-[10px] font-mono text-slate-400"><span id="minTempLabel">-273°C</span><span id="tmLabel" class="text-blue-400">Tm</span><span id="tbLabel" class="text-red-400">Tb</span><span id="maxTempLabel">3000°C</span></div>
            </div>
            <div id="phaseInfo" class="text-xs text-slate-500 dark:text-slate-400 italic">Trạng thái rắn: Các hạt dao động quanh vị trí cân bằng.</div>
        </div>
    </div>
    <video id="webcam-feed" autoplay playsinline muted></video>
    <div id="bigTempDisplay" class="fixed top-6 right-28 text-6xl font-bold text-white drop-shadow-lg hidden transition-transform z-40 font-mono pointer-events-none">0°C</div>
    <div class="gesture-guide">
        <div class="mb-2 font-bold text-cyan-400 flex items-center"><span class="status-dot" id="status-dot"></span> ĐIỀU KHIỂN TAY</div>
        <div class="gesture-item"><span class="gesture-icon">✊</span><div><strong>Nắm tay</strong><div class="text-xs text-slate-400">Gia nhiệt / Tiếp tục</div></div></div>
        <div class="gesture-item"><span class="gesture-icon">🖐</span><div><strong>Bỏ tay</strong><div class="text-xs text-slate-400">Tạm dừng</div></div></div>
        <div class="gesture-item"><span class="gesture-icon">👌</span><div><strong>Chụm (Kiểu L)</strong><div class="text-xs text-slate-400">Kéo ra/vào để Zoom</div></div></div>
        <div class="gesture-item"><span class="gesture-icon">🖐</span><div><strong>Mở tay</strong><div class="text-xs text-slate-400">Di chuyển để xoay</div></div></div>
        <div id="gesture-debug" class="mt-2 text-xs font-mono text-cyan-200 h-4"></div>
    </div>
    <script>
        lucide.createIcons();
        function toggleDarkMode() {
            const isDark = document.documentElement.classList.toggle('dark');
            const icon = document.getElementById('theme-icon');
            if(icon) {
                if(isDark) icon.setAttribute('data-lucide', 'sun');
                else icon.setAttribute('data-lucide', 'moon');
                lucide.createIcons();
            }
        }
        const container = document.getElementById('simulationCanvas');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0f172a);
        scene.fog = new THREE.Fog(0x0f172a, 10, 50);
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 6, 16);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; controls.maxDistance = 40; controls.minDistance = 5; controls.target.set(0, 2, 0);
        scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 12, 8); dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024; dirLight.shadow.mapSize.height = 1024;
        scene.add(dirLight);
        const gridHelper = new THREE.GridHelper(30, 30, 0x1e293b, 0x1e293b);
        scene.add(gridHelper);
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8, metalness: 0.2 }));
        plane.rotation.x = -Math.PI / 2; plane.receiveShadow = true; scene.add(plane);
        const glowLight = new THREE.PointLight(0xff4500, 0, 10);
        glowLight.position.set(0, 2, 0); glowLight.castShadow = true; scene.add(glowLight);
        const group = new THREE.Group(); scene.add(group);
        const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0, roughness: 0.1, transmission: 0.9, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
        const beaker = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 5, 32, 1, true), glassMat);
        beaker.position.y = 2.5; beaker.castShadow = true; group.add(beaker);
        const beakerBottom = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 0.2, 32), glassMat);
        beakerBottom.position.y = 0.1; beakerBottom.receiveShadow = true; group.add(beakerBottom);
        const substanceGroup = new THREE.Group(); group.add(substanceGroup);
        const solidGeo = new THREE.BoxGeometry(3, 3, 3);
        const solidMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.4, metalness: 0.1 });
        const solidMesh = new THREE.Mesh(solidGeo, solidMat);
        solidMesh.castShadow = true; solidMesh.receiveShadow = true; solidMesh.position.y = 1.7; substanceGroup.add(solidMesh);
        const liquidGeo = new THREE.CylinderGeometry(3.1, 3.1, 1, 32);
        const liquidMat = new THREE.MeshPhysicalMaterial({ color: 0x06b6d4, transmission: 0.6, opacity: 0.8, transparent: true, roughness: 0.1, metalness: 0.1 });
        const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
        liquidMesh.position.y = 1; liquidMesh.scale.y = 0.01; substanceGroup.add(liquidMesh);
        const steamCount = 200;
        const steamGeo = new THREE.SphereGeometry(0.2, 8, 8);
        const steamMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
        const steamParticles = [];
        const steamGroup = new THREE.Group(); group.add(steamGroup);
        for (let i = 0; i < steamCount; i++) {
            const mesh = new THREE.Mesh(steamGeo, steamMat);
            mesh.visible = false;
            mesh.userData = { velocity: new THREE.Vector3(0, 0, 0), age: 0, life: 100 };
            steamGroup.add(mesh); steamParticles.push(mesh);
        }
        const materials = {
            water: { name: "Nước", Tm: 0, Tb: 100, colorSolid: 0xa5f3fc, colorLiquid: 0x06b6d4, range: [-20, 150], cS: 2, cL: 4, cG: 2, Lf: 300, Lv: 800, densityRatio: 0.92 },
            oil: { name: "Dầu", Tm: -20, Tb: 200, colorSolid: 0xfef08a, colorLiquid: 0xeab308, range: [-50, 300], cS: 1.5, cL: 2, cG: 1.5, Lf: 200, Lv: 500, densityRatio: 1.0 },
            iron: { name: "Sắt", Tm: 1538, Tb: 2862, colorSolid: 0x475569, colorLiquid: 0xe64a19, range: [0, 3000], emissive: true, cS: 0.45, cL: 0.6, cG: 0.45, Lf: 270, Lv: 6000, densityRatio: 1.1 },
            copper: { name: "Đồng", Tm: 1085, Tb: 2562, colorSolid: 0xd97706, colorLiquid: 0xffedd5, range: [0, 2800], emissive: true, cS: 0.38, cL: 0.5, cG: 0.38, Lf: 205, Lv: 4800, densityRatio: 1.1 },
            custom: { name: "Tự chọn", Tm: 0, Tb: 100, colorSolid: 0xd8b4fe, colorLiquid: 0xa855f7, range: [-100, 200], cS: 2, cL: 3, cG: 2, Lf: 300, Lv: 800, densityRatio: 1.0 }
        };
        let currentMat = materials.water;
        const els = {
            matSelect: document.getElementById('materialSelect'),
            customInputs: document.getElementById('customInputs'),
            inputTm: document.getElementById('inputTm'),
            inputTb: document.getElementById('inputTb'),
            tempSlider: document.getElementById('tempSlider'),
            tempDisplay: document.getElementById('tempDisplay'),
            stateLabel: document.getElementById('state-label'),
            phaseInfo: document.getElementById('phaseInfo'),
            tmLabel: document.getElementById('tmLabel'),
            tbLabel: document.getElementById('tbLabel'),
            minTempLabel: document.getElementById('minTempLabel'),
            maxTempLabel: document.getElementById('maxTempLabel'),
            canvas: document.getElementById('graphCanvas'),
            btnHeat: document.getElementById('btnAutoHeat')
        };
        const ctx = els.canvas.getContext('2d');
        let graphData = []; let isHeating = false; let simTime = 0; let currentTemp = 0; let currentQ = 0; let phaseState = 0;
        let visualMeltProgress = 0; let visualBoilProgress = 0;
        function updateMaterialUI() {
            const key = els.matSelect.value;
            currentMat = materials[key];
            if (key === 'custom') {
                els.customInputs.classList.remove('hidden');
                els.inputTm.value = currentMat.Tm; els.inputTb.value = currentMat.Tb;
            } else { els.customInputs.classList.add('hidden'); }
            els.tempSlider.min = currentMat.range[0]; els.tempSlider.max = currentMat.range[1];
            els.minTempLabel.innerText = currentMat.range[0] + "°C"; els.maxTempLabel.innerText = currentMat.range[1] + "°C";
            els.tmLabel.innerText = "Tm: " + currentMat.Tm + "°C"; els.tbLabel.innerText = "Tb: " + currentMat.Tb + "°C";
            updateVisuals(); stopHeating(); updateSimulationState();
        }
        function stopHeating() {
            isHeating = false; simTime = 0; graphData = [];
            els.btnHeat.innerHTML = '<i data-lucide="play-circle" class="w-5 h-5"></i> Gia nhiệt';
            els.tempSlider.disabled = false; drawGraph();
        }
        function toggleHeating() {
            if (isHeating) { stopHeating(); } else {
                isHeating = true; els.btnHeat.innerHTML = '<i data-lucide="stop-circle" class="w-5 h-5"></i> Dừng';
                els.tempSlider.disabled = true; currentTemp = currentMat.range[0]; currentQ = 0;
                els.tempSlider.value = currentTemp; graphData = [{ t: 0, T: currentTemp }];
                lucide.createIcons(); visualMeltProgress = 0; visualBoilProgress = 0;
            }
        }
        function pauseHeating() {
            isHeating = false;
            els.btnHeat.innerHTML = '<i data-lucide="play-circle" class="w-5 h-5"></i> Tiếp tục';
            els.tempSlider.disabled = false;
        }

        function startHeatingGesture() {
            if(!isHeating) {
                 isHeating = true;
                 els.btnHeat.innerHTML = '<i data-lucide="stop-circle" class="w-5 h-5"></i> Dừng';
                 els.tempSlider.disabled = true;
                 if (graphData.length === 0) {
                     currentTemp = currentMat.range[0]; currentQ = 0;
                     graphData = [{ t: 0, T: currentTemp }];
                 }
            }
        }

        function updatePhysics() {
            if (!isHeating) return;
            const dt = 0.5; simTime += dt; const dQ = 5;
            const { Tm, Tb, cS, cL, cG, Lf, Lv } = currentMat;
            if (currentTemp < Tm) {
                phaseState = 0; currentTemp += dQ / cS * 0.1;
                if (currentTemp >= Tm) { currentTemp = Tm; currentQ = 0; }
            } else if (Math.abs(currentTemp - Tm) < 0.1 && phaseState <= 1) {
                phaseState = 1; currentQ += dQ;
                visualMeltProgress = Math.min(1, currentQ / Lf);
                if (currentQ >= Lf) { phaseState = 2; currentQ = 0; currentTemp += 0.5; visualMeltProgress = 1; }
            } else if (currentTemp < Tb) {
                phaseState = 2; currentTemp += dQ / cL * 0.1;
                if (currentTemp >= Tb) { currentTemp = Tb; currentQ = 0; }
            } else if (Math.abs(currentTemp - Tb) < 0.1 && phaseState <= 3) {
                phaseState = 3; currentQ += dQ; const scaledLv = Lv / 4;
                visualBoilProgress = Math.min(1, currentQ / scaledLv);
                if (currentQ >= scaledLv) { phaseState = 4; currentTemp += 0.5; visualBoilProgress = 1; }
            } else {
                phaseState = 4; currentTemp += dQ / cG * 0.1;
                if (currentTemp > currentMat.range[1]) currentTemp = currentMat.range[1];
            }
            els.tempSlider.value = currentTemp; updateSimulationState();
            if (simTime % 2 === 0) graphData.push({ t: simTime, T: currentTemp });
            drawGraph();
        }
        function drawGraph() {
            const w = els.canvas.width; const h = els.canvas.height;
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = document.documentElement.classList.contains('dark') ? "#1e293b" : "#f8fafc";
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1; ctx.beginPath();
            ctx.moveTo(30, 10); ctx.lineTo(30, h - 20); ctx.moveTo(30, h - 20); ctx.lineTo(w - 10, h - 20); ctx.stroke();
            ctx.fillStyle = "#64748b"; ctx.font = "10px monospace"; ctx.fillText("T°C", 5, 10); ctx.fillText("Time", w - 30, h - 5);
            if (graphData.length < 2) return;
            const maxTime = Math.max(200, graphData[graphData.length - 1].t);
            const minT = currentMat.range[0]; const maxT = currentMat.range[1]; const rangeT = maxT - minT;
            ctx.strokeStyle = "#06b6d4"; ctx.lineWidth = 2; ctx.beginPath();
            graphData.forEach((p, i) => {
                const x = 30 + (p.t / maxTime) * (w - 40);
                const y = (h - 20) - ((p.T - minT) / rangeT) * (h - 30);
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            });
            ctx.stroke();
            const last = graphData[graphData.length - 1];
            const cx = 30 + (last.t / maxTime) * (w - 40);
            const cy = (h - 20) - ((last.T - minT) / rangeT) * (h - 30);
            ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();
            ctx.fillText(Math.round(last.T) + "°C", cx + 5, cy - 5);
        }
        function updateVisuals() {
            solidMat.color.setHex(currentMat.colorSolid); liquidMat.color.setHex(currentMat.colorLiquid);
            if (currentMat.emissive) {
                liquidMat.transmission = 0; liquidMat.opacity = 1; liquidMat.metalness = 0.8; liquidMat.roughness = 0.3;
                solidMat.metalness = 0.6; solidMat.roughness = 0.7;
            } else {
                liquidMat.transmission = 0.6; liquidMat.opacity = 0.8; liquidMat.metalness = 0.1; liquidMat.roughness = 0.1;
                solidMat.metalness = 0.1; solidMat.roughness = 0.4;
            }
            solidMat.emissive.setHex(0x000000); liquidMat.emissive.setHex(0x000000);
            solidMat.emissiveIntensity = 0; liquidMat.emissiveIntensity = 0; glowLight.intensity = 0;
        }
        function updateSimulationState() {
            let temp = parseInt(els.tempSlider.value);
            if (els.matSelect.value === 'custom') {
                currentMat.Tm = parseInt(els.inputTm.value) || 0;
                currentMat.Tb = parseInt(els.inputTb.value) || 100;
                els.tmLabel.innerText = "Tm: " + currentMat.Tm + "°C"; els.tbLabel.innerText = "Tb: " + currentMat.Tb + "°C";
            }
            els.tempDisplay.innerText = temp + "°C"; const bigDisp = document.getElementById('bigTempDisplay'); if (bigDisp) bigDisp.innerText = temp + "°C";
            const { Tm, Tb } = currentMat;
            if (temp < Tm) {
                els.stateLabel.innerText = "SOLID"; els.phaseInfo.innerText = "Rắn: Giữ hình dạng cố định.";
                els.stateLabel.className = "text-xs font-mono px-2 py-1 rounded font-bold bg-blue-100 text-blue-600";
            } else if (temp >= Tm && temp < Tb) {
                els.stateLabel.innerText = "LIQUID"; els.phaseInfo.innerText = "Lỏng: Hình dạng theo bình chứa, bề mặt phẳng.";
                els.stateLabel.className = "text-xs font-mono px-2 py-1 rounded font-bold bg-cyan-100 text-cyan-600";
            } else {
                els.stateLabel.innerText = "GAS"; els.phaseInfo.innerText = "Khí: Bay hơi ra môi trường.";
                els.stateLabel.className = "text-xs font-mono px-2 py-1 rounded font-bold bg-red-100 text-red-600";
            }
        }
        function getBlackBodyColor(tempC) {
            const color = new THREE.Color(0x000000); if (tempC < 500) return color;
            const t = Math.min(tempC, 3000);
            if (t < 1000) { color.setRGB((t - 500) / 500, 0, 0); } else if (t < 2000) { const i = (t - 1000) / 1000; color.setRGB(1, i * 0.8, 0); }
            else { const i = (t - 2000) / 1000; color.setRGB(1, 0.8 + i * 0.2, i); } return color;
        }
        function animateMacroscopicState(time) {
            let temp = parseInt(els.tempSlider.value); const { Tm, Tb } = currentMat;
            const meltRange = 10; let meltProgress = 0;
            if (isHeating) {
                if (temp < Tm) meltProgress = 0; else if (phaseState === 1) meltProgress = visualMeltProgress; else if (temp >= Tm && phaseState >= 2) meltProgress = 1;
            } else {
                if (temp < Tm) meltProgress = 0; else if (temp > Tm + meltRange) meltProgress = 1; else meltProgress = (temp - Tm) / meltRange;
            }
            const solidScale = 1 - meltProgress;
            if (solidScale > 0.01) {
                solidMesh.visible = true; solidMesh.scale.setScalar(solidScale); solidMesh.position.y = 0.2 + (1.5 * solidScale); solidMesh.rotation.y = time * 0.0005;
            } else { solidMesh.visible = false; }
            let boilProgress = 0;
            if (isHeating) {
                if (temp < Tb) boilProgress = 0; else if (phaseState === 3) boilProgress = visualBoilProgress; else if (temp >= Tb && phaseState === 4) boilProgress = 1;
            } else {
                if (temp < Tb) boilProgress = 0; else if (temp > Tb + 10) boilProgress = 1; else boilProgress = (temp - Tb) / 10;
            }
            let liquidAmount = meltProgress * (1 - boilProgress);
            if (liquidAmount > 0.01) {
                liquidMesh.visible = true; let ratio = currentMat.densityRatio || 1.0;
                const targetHeight = 0.9 * ratio * liquidAmount; liquidMesh.scale.y = Math.max(0.01, targetHeight); liquidMesh.position.y = 0.2 + (targetHeight / 2);
            } else { liquidMesh.visible = false; }
            if (currentMat.emissive && temp > 400) {
                const glowColor = getBlackBodyColor(temp); const intensity = Math.min(2, Math.max(0, (temp - 400) / 600));
                solidMat.emissive.copy(glowColor); solidMat.emissiveIntensity = intensity;
                liquidMat.emissive.copy(glowColor); liquidMat.emissiveIntensity = intensity;
                glowLight.color.copy(glowColor); glowLight.intensity = intensity * 1.5;
            } else {
                solidMat.emissive.setHex(0x000000); liquidMat.emissive.setHex(0x000000); solidMat.emissiveIntensity = 0; liquidMat.emissiveIntensity = 0; glowLight.intensity = 0;
            }
            if (temp > Tb - 20) {
                const spawnRate = Math.max(0.1, (temp - (Tb - 20)) / 50); if (Math.random() < spawnRate) spawnSteam();
            }
            updateSteam(time * 0.001);
        }
        function spawnSteam() {
            const p = steamParticles.find(p => !p.visible); if (!p) return;
            p.visible = true; const theta = Math.random() * Math.PI * 2; const radius = Math.random() * 2.5;
            p.position.set(Math.cos(theta) * radius, liquidMesh.visible ? (liquidMesh.position.y * 2) + 0.2 : 0.5, Math.sin(theta) * radius);
            p.userData.age = 0; p.userData.life = 100 + Math.random() * 50;
            p.userData.velocity.set((Math.random() - 0.5) * 0.02, 0.05 + Math.random() * 0.05, (Math.random() - 0.5) * 0.02);
            p.scale.setScalar(0.5 + Math.random());
        }
        function updateSteam() {
            steamParticles.forEach(p => {
                if (!p.visible) return;
                p.position.add(p.userData.velocity); p.userData.age++;
                p.material.opacity = 0.4 * (1 - p.userData.age / p.userData.life);
                p.scale.multiplyScalar(1.005); if (p.userData.age >= p.userData.life) p.visible = false;
            });
        }
        function animate(time) {
            requestAnimationFrame(animate); updatePhysics(); animateMacroscopicState(time); controls.update(); renderer.render(scene, camera);
        }

        // Event Listeners
        els.btnHeat.addEventListener('click', toggleHeating);
        els.matSelect.addEventListener('change', updateMaterialUI);
        els.tempSlider.addEventListener('input', updateSimulationState);
        els.inputTm.addEventListener('input', updateSimulationState);
        els.inputTb.addEventListener('input', updateSimulationState);
        window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });
        window.addEventListener('theme-changed', (e) => {
            const isDark = e.detail.theme === 'dark';
            if (isDark) {
                scene.background.setHex(0x0f172a); scene.fog.color.setHex(0x0f172a); gridHelper.material.color.setHex(0x1e293b); glassMat.color.setHex(0x88CCFF); glassMat.opacity = 0.2;
            } else {
                scene.background.setHex(0xf8fafc); scene.fog.color.setHex(0xf8fafc); gridHelper.material.color.setHex(0xe2e8f0); glassMat.color.setHex(0xffffff); glassMat.opacity = 0.4;
            }
        });

        // Dragging Logic
        const mainPanel = document.getElementById('mainPanel');
        const panelHeader = document.getElementById('panelHeader');
        const btnShowPanel = document.getElementById('btnShowPanel');
        let isDragging = false; let dragOffset = { x: 0, y: 0 };
        window.togglePanel = function(show) {
            if(show) { mainPanel.style.display = 'flex'; btnShowPanel.style.display = 'none'; }
            else { mainPanel.style.display = 'none'; btnShowPanel.style.display = 'block'; }
        }
        panelHeader.addEventListener('mousedown', (e) => {
            isDragging = true; dragOffset.x = e.clientX - mainPanel.offsetLeft; dragOffset.y = e.clientY - mainPanel.offsetTop; panelHeader.style.cursor = 'grabbing';
        });
        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault(); mainPanel.style.left = (e.clientX - dragOffset.x) + 'px'; mainPanel.style.top = (e.clientY - dragOffset.y) + 'px'; mainPanel.style.right = 'auto';
            }
        });
        window.addEventListener('mouseup', () => { isDragging = false; panelHeader.style.cursor = 'move'; });

        // Init
        updateMaterialUI(); animate();

        // Hand Gesture Logic
        const videoElement = document.getElementById('webcam-feed');
        const statusDot = document.getElementById('status-dot');
        const debugText = document.getElementById('gesture-debug');
        const gestureGuide = document.querySelector('.gesture-guide');
        let prevHandPos = { x: 0, y: 0 }; let handTrackingEnabled = false; let cameraUtils = null; let hands = null;

        function getGesture(lm) {
             const dist = (i, j) => Math.hypot(lm[i].x - lm[j].x, lm[i].y - lm[j].y);
             const isFolded = (tip, pip) => dist(tip, 0) < dist(pip, 0);
             const indexOpen = !isFolded(8, 6); const middleOpen = !isFolded(12, 10);
             const ringOpen = !isFolded(16, 14); const pinkyOpen = !isFolded(20, 18);
             const pinchDist = dist(4, 8);
             const isLControl = !isFolded(8, 6) && isFolded(12, 10) && isFolded(16, 14) && isFolded(20, 18);
             const isFist = !indexOpen && !middleOpen && !ringOpen && !pinkyOpen;
             const isOpen = indexOpen && middleOpen && ringOpen && pinkyOpen;
             return { isLControl, isFist, isOpen, pinchDist };
        }
        function onResults(results) {
            if (!handTrackingEnabled) return;
            statusDot.classList.remove('active'); videoElement.classList.remove('active'); debugText.innerText = "No Hand";
            
            // Should stop heating if hand is removed
            if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
                 if(isHeating) pauseHeating();
                 return;
            }

            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                statusDot.classList.add('active'); videoElement.classList.add('active');
                const lm = results.multiHandLandmarks[0]; const g = getGesture(lm);
                const handX = 1 - lm[9].x; const handY = lm[9].y;

                // FIST -> RUN HEATING (RESUME) / OPEN -> PAUSE
                if (g.isFist) {
                    startHeatingGesture();
                    debugText.innerText = "✊ GIA NHIỆT";
                } else {
                    if (isHeating) pauseHeating();
                }

                // L-PINCH -> ZOOM
                if (g.isLControl) {
                    const pinchGap = g.pinchDist; const minP = 0.02; const maxP = 0.20;
                    const percent = Math.max(0, Math.min(1, (pinchGap - minP) / (maxP - minP)));
                    
                    // Zoom logic: Closer pinch = Zoom In (smaller dist), Wider pinch = Zoom Out (larger dist)
                    const minDist = 10; const maxDist = 35;
                    const targetDist = maxDist - (percent * (maxDist - minDist));
                    
                    const dir = new THREE.Vector3().copy(camera.position).sub(controls.target).normalize();
                    camera.position.copy(controls.target).add(dir.multiplyScalar(targetDist));
                    
                    debugText.innerText = "👌 ZOOM (L)";
                } else if (g.isOpen) {
                    debugText.innerText = "🔄 ROTATE";
                    const dx = handX - prevHandPos.x; const dy = handY - prevHandPos.y;
                    if (Math.abs(dx) > 0.002) {
                        const offset = new THREE.Vector3().copy(camera.position).sub(controls.target);
                        const spherical = new THREE.Spherical().setFromVector3(offset);
                        spherical.theta -= dx * 5; spherical.phi -= dy * 5;
                        spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
                        const newOffset = new THREE.Vector3().setFromSpherical(spherical);
                        camera.position.copy(controls.target).add(newOffset); camera.lookAt(controls.target);
                    }
                }
                prevHandPos = { x: handX, y: handY };
            }
        }
        async function initGesture() {
            hands = new Hands({ locateFile: (file) => "https://cdn.jsdelivr.net/npm/@mediapipe/hands/" + file });
            hands.setOptions({ maxNumHands: 2, modelComplexity: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
            hands.onResults(onResults);
            cameraUtils = new Camera(videoElement, { onFrame: async () => { await hands.send({ image: videoElement }); }, width: 320, height: 240 });
        }
        async function toggleGestureControl() {
            handTrackingEnabled = !handTrackingEnabled; const btn = document.getElementById('btnToggleGesture');
            if (handTrackingEnabled) {
                if (!hands) await initGesture(); cameraUtils.start(); videoElement.style.display = 'block'; gestureGuide.style.display = 'block'; document.getElementById('bigTempDisplay').classList.remove('hidden');
                btn.classList.add('text-cyan-500'); togglePanel(false);
            } else {
                if (cameraUtils) cameraUtils.stop(); videoElement.style.display = 'none'; gestureGuide.style.display = 'none'; document.getElementById('bigTempDisplay').classList.add('hidden');
                btn.classList.remove('text-cyan-500');
            }
        }
    </script>
</body>
</html>`

export default function PhaseChange3D() {
    return (
        <div className="w-full h-full bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700 relative">
            <iframe
                srcDoc={RAW_HTML}
                className="w-full h-full border-0"
                title="Sự chuyển thể 3D"
                allow="camera; microphone; fullscreen; clipboard-read; clipboard-write;"
                sandbox="allow-scripts allow-same-origin allow-forms"
            />
        </div>
    )
}