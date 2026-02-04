const CONFIG = {
    typingSpeed: 5,
    animDuration: 800,
    scrollDuration: 1200
};

const I18N = {
    en: { 
        nav_data: "01_DATA", nav_media: "02_VIDEO", label_id: "profile / ", 
        label_archive: "notes", label_source: "source: ", footer_serial: "yvl/notes/", 
        btn_refresh: "[ UPDATE ]", label_telemetry: "live_sensors", link_mail: "MAIL",
        item_engine: "Porsche 911 GT3 Cup (992)", item_nurburg: "Red Bull RB19",
        item_aero: "Mazda 787B", item_max: "Audi Sport Quattro S1", 
        
        desc_gt3: "FLAT-6 NA // 510 HP", 
        desc_rb19: "V6 HYBRID // 15K RPM",
        desc_787: "4-ROTOR // LEMANS SPEC",
        desc_s1: "I5 TURBO // GRP.B AERO",
        status_ok: "LINK: STABLE",
        
        term_title: "console.log", input_placeholder: "RUN...", 
        cam_01: "cam_01", cam_02: "cam_02", cam_03: "cam_03", 
        cam_04: "cam_04", cam_05: "cam_05", cam_06: "cam_06",
        executing: "target:", sel_option: "select subsystem:",
        scanning: "INIT HANDSHAKE...",
        sync_complete: "LINK ESTABLISHED.",
        
        boot_1: ":: SYSTEM_READY",

        cmd_help: "COMMANDS: [clear] [date] [dump] [whoami] [exit]",
        cmd_whoami: "UID: 0x00 (ROOT)",
        cmd_unknown: "ERR_UNKNOWN_CMD. TRY [help]",
        read_addr: "READ_ADDR::",
        accessing: "ACCESSING::",
        dumping: "DUMPING HEAP...",
        
        KEY_MAP: {
            "ENGINE": "ENGINE", "AERO": "AERO", "CHASSIS": "CHASSIS", 
            "POWER": "POWER", "STRAT": "STRAT", "LEGACY": "LEGACY", 
            "FEEL": "FEEL", "DRIVE": "DRIVE", "MEMORY_DUMP": "MEMORY_DUMP",
            "TRANSMISSION": "TRANSMISSION", "SUSPENSION": "SUSPENSION", "ELECTRONICS": "ELECTRONICS",
            "POWER_UNIT": "POWER_UNIT", "AERO_DYNAMICS": "AERO_DYNAMICS", "STRATEGY": "STRATEGY",
            "ENGINE_ROTARY": "ROTARY_ENGINE", "LEGACY_DATA": "LEGACY_DATA", "BODYWORK": "BODYWORK", "THROTTLE_MAP": "THROTTLE_MAP",
            "TURBO_SYSTEM": "TURBO_SYSTEM", "DRIVETRAIN": "DRIVETRAIN", "AERO_PACKAGE": "AERO_PACKAGE", "HANDLING": "HANDLING",
            "POWER_OUTPUT": "POWER_OUTPUT", "DISPLACEMENT": "DISPLACEMENT", "WEIGHT_DRY": "WEIGHT_DRY", 
            "BRAKE_DISCS": "BRAKE_DISCS", "WHEELBASE": "WHEELBASE", "FUEL_CAPACITY": "FUEL_CAPACITY", "AERO_CONFIG": "AERO_CONFIG",
            "TOTAL_OUTPUT": "TOTAL_OUTPUT", "RPM_LIMIT": "RPM_LIMIT", "WEIGHT_MIN": "WEIGHT_MIN", "LATERAL_G": "LATERAL_G",
            "FUEL_FLOW": "FUEL_FLOW", "ENERGY_STORE": "ENERGY_STORE", "0_200_KMH": "0_200_KMH",
            "PEAK_POWER": "PEAK_POWER", "MAX_TORQUE": "MAX_TORQUE", "IDLE_RPM": "IDLE_RPM", "WEIGHT": "WEIGHT",
            "SOUND_LEVEL": "SOUND_LEVEL", "MPG_AVG": "MPG_AVG",
            "ENGINE_BLOCK": "ENGINE_BLOCK", "0_100_KMH": "0_100_KMH", "WEIGHT_DIST": "WEIGHT_DIST", "WHEEL_WIDTH": "WHEEL_WIDTH",
            "BOOST_LAG": "BOOST_LAG", "TOP_SPEED": "TOP_SPEED", "COOLING": "COOLING"
        }
    },
    es: { 
        nav_data: "01_DATOS", nav_media: "02_VÍDEO", label_id: "perfil / ", 
        label_archive: "notas", label_source: "fuente: ", footer_serial: "yvl/notas/", 
        btn_refresh: "[ ACTUALIZAR ]", label_telemetry: "sensores_vivos", link_mail: "CORREO",
        item_engine: "Porsche 911 GT3 Cup (992)", item_nurburg: "Red Bull RB19",
        item_aero: "Mazda 787B", item_max: "Audi Sport Quattro S1", 
        
        desc_gt3: "BÓXER-6 ATM // 510 CV", 
        desc_rb19: "V6 HÍBRIDO // 15K RPM",
        desc_787: "4-ROTORES // SPEC LEMANS",
        desc_s1: "5-CIL TURBO // GRP.B AERO",
        status_ok: "ENLACE: ESTABLE",

        term_title: "consola.log", input_placeholder: "EJECUTAR...", 
        cam_01: "cam_01", cam_02: "cam_02", cam_03: "cam_03", 
        cam_04: "cam_04", cam_05: "cam_05", cam_06: "cam_06",
        executing: "objetivo:", sel_option: "seleccionar subsistema:",
        scanning: "INICIANDO HANDSHAKE...",
        sync_complete: "ENLACE ESTABLECIDO.",

        boot_1: ":: SISTEMA_LISTO",

        cmd_help: "COMANDOS: [clear] [date] [dump] [whoami] [exit]",
        cmd_whoami: "UID: 0x00 (RAÍZ)",
        cmd_unknown: "ERR_COMANDO_DESCONOCIDO. PRUEBA [help]",
        read_addr: "LEER_DIR::",
        accessing: "ACCEDIENDO::",
        dumping: "VOLCANDO MEMORIA...",

        KEY_MAP: {
            "ENGINE": "MOTOR", "AERO": "AERO", "CHASSIS": "CHASIS", 
            "POWER": "POTENCIA", "STRAT": "ESTRATEGIA", "LEGACY": "LEGADO", 
            "FEEL": "SENSACIÓN", "DRIVE": "CONDUCCIÓN", "MEMORY_DUMP": "VOLCADO_MEMORIA",
            "TRANSMISSION": "TRANSMISIÓN", "SUSPENSIÓN": "SUSPENSIÓN", "ELECTRONICS": "ELECTRÓNICA",
            "POWER_UNIT": "UNIDAD_POTENCIA", "AERO_DYNAMICS": "AERODINÁMICA", "STRATEGY": "ESTRATEGIA",
            "ENGINE_ROTARY": "MOTOR_ROTATIVO", "LEGACY_DATA": "DATOS_LEGADO", "BODYWORK": "CARROCERÍA", "THROTTLE_MAP": "MAPA_ACELERADOR",
            "TURBO_SYSTEM": "SISTEMA_TURBO", "DRIVETRAIN": "TREN_MOTRIZ", "AERO_PACKAGE": "PAQUETE_AERO", "HANDLING": "MANEJO",
            "POWER_OUTPUT": "POTENCIA_SALIDA", "DISPLACEMENT": "CILINDRADA", "WEIGHT_DRY": "PESO_SECO", 
            "BRAKE_DISCS": "DISCOS_FRENO", "WHEELBASE": "DIST_EJES", "FUEL_CAPACITY": "CAP_COMBUSTIBLE", "AERO_CONFIG": "CONF_AERO",
            "TOTAL_OUTPUT": "POTENCIA_TOTAL", "RPM_LIMIT": "LIMITE_RPM", "WEIGHT_MIN": "PESO_MIN", "LATERAL_G": "G_LATERAL",
            "FUEL_FLOW": "FLUJO_COMB", "ENERGY_STORE": "ALM_ENERGIA", "0_200_KMH": "0_200_KMH",
            "PEAK_POWER": "PICO_POTENCIA", "MAX_TORQUE": "PAR_MAXIMO", "IDLE_RPM": "RALENTÍ", "WEIGHT": "PESO",
            "SOUND_LEVEL": "NIVEL_SONORO", "MPG_AVG": "CONSUMO_MED",
            "ENGINE_BLOCK": "BLOQUE_MOTOR", "0_100_KMH": "0_100_KMH", "WEIGHT_DIST": "DIST_PESO", "WHEEL_WIDTH": "ANCHO_RUEDA",
            "BOOST_LAG": "LAG_TURBO", "TOP_SPEED": "VEL_MAXIMA", "COOLING": "REFRIGERACION"
        }
    }
};

const DATA_STORE = {
    en: {
        PROFILES: [
            { 
                id: "01", source: "Terry A. Davis", path: "complexity.iso", 
                texts: [
                    "“Genius admires simplicity. Idiots admire complexity. If you make something so clusterfucked nobody understands it, they think you're a god.”",
                    "“An idiot admires complexity, a genius admires simplicity, a physicist tries to make it simple, for an idiot anything the more complicated it is the more he will admire it.”"
                ] 
            },
            { 
                id: "02", source: "Ayrton Senna", path: "gap.log", 
                texts: [
                    "“If you no longer go for a gap that exists, you are no longer a racing driver.”",
                    "“On a given day, a given circumstance, you think you have a limit. And you then go for this limit and you touch this limit, and you think, 'Okay, this is the limit'. As soon as you touch this limit, something happens and you suddenly can go a little bit further. With your mind power, your determination, your instinct, and the experience as well, you can fly very high.”"
                ] 
            },
            { 
                id: "03", source: "Michael Schumacher", path: "f2004_telemetry.log", 
                texts: [
                    "“I've always believed that you should never, ever give up and you should always keep fighting even when there's only a slightest chance.”",
                    "“The most important thing is to be yourself. You try to find the limit, you get close to the limit and you just go over it. It's a fine line. It's a search for perfection. You want to do it better than anyone else.”"
                ] 
            }
        ],
        CARS: {
            "GT3_CUP": { 
                "NAME": "911 GT3 Cup (992)",
                "ENGINE": "4.0L Water-Cooled Flat-6 Boxer. Dry-sump lubrication. 8400 RPM Redline.", 
                "TRANSMISSION": "Porsche 6-speed sequential dog-type. Pneumatic paddle shift.", 
                "SUSPENSION": "Front: Double wishbone axle. Rear: Multi-link axle. Adjustable camber/toe.",
                "ELECTRONICS": "Bosch MS 6.6 ECU. Cosworth ICD Color Display. Traction Control (TC).",
                "STATS": { "POWER_OUTPUT": "375 kW (510 hp)", "DISPLACEMENT": "3,996 cm³", "WEIGHT_DRY": "1,260 kg", "BRAKE_DISCS": "380mm Vented", "WHEELBASE": "2,459 mm", "FUEL_CAPACITY": "110 Liters (FT3)", "AERO_CONFIG": "Swan-neck rear wing (11 pos)" }
            },
            "RB19_F1": { 
                "NAME": "Oracle Red Bull RB19",
                "POWER_UNIT": "Honda RBPTH001 1.6L V6 Turbo Hybrid. MGU-K + MGU-H recovery systems.", 
                "AERO_DYNAMICS": "Ground effect venturi tunnels. DRAG REDUCTION SYSTEM (DRS). Blown diffuser.", 
                "CHASSIS": "Carbon-fibre composite monocoque with Halo cockpit protection system.",
                "STRATEGY": "Negative tire degradation profile. High-fuel load optimization.",
                "STATS": { "TOTAL_OUTPUT": "~1,050 hp", "RPM_LIMIT": "15,000 rpm", "WEIGHT_MIN": "798 kg", "LATERAL_G": "6.0G+ (Suzuka T1)", "FUEL_FLOW": "100 kg/hr (Max)", "ENERGY_STORE": "4 MJ/lap", "0_200_KMH": "~4.5 sec" }
            },
            "MAZDA_787B": { 
                "NAME": "Mazda 787B #55",
                "ENGINE_ROTARY": "Mazda R26B 4-Rotor Wankel. 2616cc. Variable Intake Telescopic Pipes.", 
                "LEGACY_DATA": "First Japanese manufacturer to win 24 Hours of Le Mans (1991).", 
                "BODYWORK": "Carbon fiber/kevlar composite. Renown livery serialization.",
                "THROTTLE_MAP": "Linear mechanical cable. No traction aids. Pure analog input.",
                "STATS": { "PEAK_POWER": "700 bhp @ 9000 rpm", "MAX_TORQUE": "608 Nm @ 6500 rpm", "IDLE_RPM": "3,000 rpm", "WEIGHT": "830 kg", "TRANSMISSION": "Porsche 5-speed manual", "SOUND_LEVEL": "125dB (At exhaust)", "MPG_AVG": "1.8 mpg" }
            },
            "AUDI_S1": { 
                "NAME": "Audi Sport Quattro S1 E2",
                "TURBO_SYSTEM": "KKK K27 Turbocharger at 2.1 bar. Recirculating anti-lag system (Bang-Bang).", 
                "DRIVETRAIN": "Quattro Permanent All-Wheel Drive. Torsen center differential.", 
                "AERO_PACKAGE": "Pikes Peak configuration. Massive front apron & rear double-wing.",
                "HANDLING": "Severe understeer characteristic requiring Scandinavian Flick entry.",
                "STATS": { "ENGINE_BLOCK": "Inline-5 DOHC 20v", "0_100_KMH": "3.1s (Gravel)", "WEIGHT_DIST": "55/45 Front/Rear", "WHEEL_WIDTH": "12 inches", "BOOST_LAG": "Significant <4k rpm", "TOP_SPEED": "220 km/h (Gearing ltd)", "COOLING": "Rear-mounted Radiator" }
            }
        }
    },
    es: {
        PROFILES: [
            { 
                id: "01", source: "Terry A. Davis", path: "complexity.iso", 
                texts: [
                    "“Un genio admira la simplicidad. Un idiota admira la complejidad. Si haces algo tan jodido que nadie lo entiende, creerán que eres un dios.”",
                    "“Un idiota admira la complejidad, un genio admira la simplicidad, un físico intenta hacerlo simple. Para un idiota, cuanto más complicado es algo, más lo admira.”"
                ] 
            },
            { 
                id: "02", source: "Ayrton Senna", path: "gap.log", 
                texts: [
                    "“Si ya no vas a por un hueco que existe, ya no eres un piloto de carreras.”",
                    "“En un día dado, en una circunstancia dada, piensas que tienes un límite. Y entonces vas a por ese límite y lo tocas, y piensas: 'Vale, este es el límite'. Tan pronto como tocas este límite, algo sucede y de repente puedes ir un poco más allá. Con tu poder mental, tu determinación, tu instinto y la experiencia también, puedes volar muy alto.”"
                ] 
            },
            { 
                id: "03", source: "Michael Schumacher", path: "f2004_telemetry.log", 
                texts: [
                    "“Siempre he creído que nunca hay que rendirse y que siempre hay que seguir luchando aunque sólo haya una mínima posibilidad.”",
                    "“Lo más importante es ser tú mismo. Intentas encontrar el límite, te acercas al límite y simplemente lo superas. Es una línea muy fina. Es una búsqueda de la perfección. Quieres hacerlo mejor que nadie.”"
                ] 
            }
        ],
        CARS: {
            "GT3_CUP": { 
                "NAME": "911 GT3 Cup (992)",
                "ENGINE": "4.0L Bóxer-6 Refrigerado por Agua. Cárter seco. Línea roja a 8400 RPM.", 
                "TRANSMISSION": "Secuencial Porsche 6-vel dog-type. Cambio neumático por levas.", 
                "SUSPENSIÓN": "Del: Eje doble horquilla. Tras: Eje multi-link. Caída y convergencia ajustable.",
                "ELECTRONICS": "ECU Bosch MS 6.6. Display Cosworth ICD Color. Control de Tracción (TC).",
                "STATS": { "POWER_OUTPUT": "375 kW (510 cv)", "DISPLACEMENT": "3,996 cm³", "WEIGHT_DRY": "1,260 kg", "BRAKE_DISCS": "Discos 380mm Ventilados", "WHEELBASE": "2,459 mm", "FUEL_CAPACITY": "110 Litros (FT3)", "AERO_CONFIG": "Alerón cuello cisne (11 pos)" }
            },
            "RB19_F1": { 
                "NAME": "Oracle Red Bull RB19",
                "POWER_UNIT": "Honda RBPTH001 1.6L V6 Turbo Híbrido. Sistemas MGU-K + MGU-H.", 
                "AERO_DYNAMICS": "Túneles venturi (Efecto suelo). DRS Activo. Difusor soplado.", 
                "CHASSIS": "Monocasco compuesto fibra de carbono con sistema Halo.",
                "STRATEGY": "Perfil de degradación negativa. Optimización alta carga combustible.",
                "STATS": { "TOTAL_OUTPUT": "~1,050 cv", "RPM_LIMIT": "15,000 rpm", "WEIGHT_MIN": "798 kg", "LATERAL_G": "6.0G+ (Suzuka T1)", "FUEL_FLOW": "100 kg/hr (Max)", "ENERGY_STORE": "4 MJ/vuelta", "0_200_KMH": "~4.5 seg" }
            },
            "MAZDA_787B": { 
                "NAME": "Mazda 787B #55",
                "ENGINE_ROTARY": "Mazda R26B 4-Rotores Wankel. 2616cc. Admisión telescópica variable.", 
                "LEGACY_DATA": "Primer fabricante japonés en ganar 24 Horas de Le Mans (1991).", 
                "BODYWORK": "Compuesto carbono/kevlar. Livery Renown serializada.",
                "THROTTLE_MAP": "Cable mecánico lineal. Sin ayudas. Input analógico puro.",
                "STATS": { "PEAK_POWER": "700 bhp @ 9000 rpm", "MAX_TORQUE": "608 Nm @ 6500 rpm", "IDLE_RPM": "3,000 rpm", "WEIGHT": "830 kg", "TRANSMISSION": "Porsche 5-vel manual", "SOUND_LEVEL": "125dB (Escape)", "MPG_AVG": "130 L/100km" }
            },
            "AUDI_S1": { 
                "NAME": "Audi Sport Quattro S1 E2",
                "TURBO_SYSTEM": "KKK K27 Turbo a 2.1 bar. Sistema anti-lag recirculante (Bang-Bang).", 
                "DRIVETRAIN": "Quattro Permanente AWD. Diferencial central Torsen.", 
                "AERO_PACKAGE": "Configuración Pikes Peak. Faldón delantero masivo y doble alerón trasero.",
                "HANDLING": "Subviraje severo requiriendo entrada 'Scandinavian Flick'.",
                "STATS": { "ENGINE_BLOCK": "5-Cilindros DOHC 20v", "0_100_KMH": "3.1s (Grava)", "WEIGHT_DIST": "55/45 Del/Tras", "WHEEL_WIDTH": "12 pulgadas", "BOOST_LAG": "Significativo <4k rpm", "TOP_SPEED": "220 km/h (Relación corta)", "COOLING": "Radiador trasero" }
            }
        }
    }
};

const Utils = {
    wait: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

    typeText: (element, text, speed = 10) => {
        const currentRequestId = Math.random().toString(36).substring(2, 9);
        element.dataset.typeId = currentRequestId;

        if (speed === 0) {
            element.textContent = text;
            return Promise.resolve();
        }

        return new Promise(resolve => {
            element.textContent = '';
            let i = 0;
            const type = () => {
                if (element.dataset.typeId !== currentRequestId) {
                    resolve();
                    return;
                }
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed + (Math.random() * 10));
                } else {
                    resolve();
                }
            };
            type();
        });
    },

    decryptText: (element, text, speed = 5) => {
        if (speed === 0) {
            element.textContent = text;
            return Promise.resolve();
        }

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*[]{}<>";
        let iterations = 0;
        const currentRequestId = Math.random().toString(36).substring(2, 9);
        element.dataset.typeId = currentRequestId;
        
        return new Promise(resolve => {
            const interval = setInterval(() => {
                if (element.dataset.typeId !== currentRequestId) {
                    clearInterval(interval);
                    resolve();
                    return;
                }

                element.textContent = text.split("")
                    .map((letter, index) => {
                        if (index < iterations) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");
                
                if (iterations >= text.length) {
                    clearInterval(interval);
                    resolve();
                }
                iterations += 1; 
            }, speed);
        });
    },

    scrollTo: (element, duration) => {
        const targetPos = element.getBoundingClientRect().top + window.pageYOffset;
        const startPos = window.pageYOffset;
        const distance = targetPos - startPos;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            let run;
            let t = timeElapsed / (duration / 2);
            if (t < 1) run = distance / 2 * Math.pow(2, 10 * (t - 1)) + startPos;
            else {
                t--;
                run = distance / 2 * (-Math.pow(2, -10 * t) + 2) + startPos;
            }
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        requestAnimationFrame(animation);
    }
};

const App = {
    state: {
        lang: 'en',
        profileIndex: 0,
        textVariant: 0,
        isBusy: false,
        activeCarId: null,
        terminalLogs: [] 
    },

    elements: {},

    init() {
        const savedLang = localStorage.getItem('yvl_lang');
        if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
            this.state.lang = savedLang;
        }

        this.cacheDOM();
        this.bindEvents();
        this.bindDraggables(); 
        this.renderProfile();
        this.updateLangButton();
        this.applyTranslations(false);
        this.systemBoot();
    },

    cacheDOM() {
        this.elements = {
            body: document.body,
            terminalOutput: document.getElementById('terminalOutput'),
            terminalInput: document.getElementById('terminalInput'),
            inputTrigger: document.getElementById('inputTrigger'),
            btnLang: document.getElementById('langToggle'),
            btnTheme: document.getElementById('themeToggle'),
            btnPrev: document.getElementById('btnPrevProfile'),
            btnNext: document.getElementById('btnNextProfile'),
            btnRewrite: document.getElementById('btnRewrite'),
            bioText: document.getElementById('bioText'),
            profileCard: document.getElementById('profileCard'),
            profileHeader: document.getElementById('profileHeader'),
            terminalWindow: document.getElementById('terminalWindow'),
            terminalHeader: document.getElementById('terminalHeader'),
            viewSection: document.getElementById('view-data'),
            brandTitle: document.querySelector('.brand-block')
        };
    },

    bindEvents() {
        document.querySelectorAll('.nav-main').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleNav(e));
        });

        if(this.elements.brandTitle) {
            this.elements.brandTitle.addEventListener('click', () => {
                window.location.reload();
            });
        }

        this.elements.btnLang.addEventListener('click', () => this.toggleLang());
        this.elements.btnTheme.addEventListener('click', () => this.toggleTheme());
        this.elements.btnNext.addEventListener('click', () => this.cycleProfile(1));
        this.elements.btnPrev.addEventListener('click', () => this.cycleProfile(-1));
        this.elements.btnRewrite.addEventListener('click', () => {
            this.state.textVariant++;
            this.renderProfile(); 
        });

        this.elements.inputTrigger.addEventListener('click', () => this.elements.terminalInput.focus());
        this.elements.terminalInput.addEventListener('keypress', (e) => this.handleCommand(e));

        document.querySelectorAll('.data-item').forEach(item => {
            item.addEventListener('click', () => this.handleDataRequest(item));
        });
    },

    bindDraggables() {
        const makeDraggable = (el, handle) => {
            let isDragging = false;
            let start = { x: 0, y: 0 };
            let offset = { x: 0, y: 0 }; 
            
            handle.addEventListener('mousedown', (e) => {
                isDragging = true;
                start.x = e.clientX - offset.x;
                start.y = e.clientY - offset.y;
                el.style.transition = 'none'; 
                el.style.zIndex = 100;
            });

            document.addEventListener('mouseup', () => {
                if (!isDragging) return;
                isDragging = false;
                el.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                el.style.transform = `translate3d(0px, 0px, 0)`;
                offset = { x: 0, y: 0 };
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const currentX = e.clientX - start.x;
                const currentY = e.clientY - start.y;
                const limit = 100; 
                if (Math.abs(currentX) < window.innerWidth && Math.abs(currentY) < window.innerHeight) {
                    offset.x = currentX;
                    offset.y = currentY;
                    el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
                }
            });
        };

        makeDraggable(this.elements.profileCard, this.elements.profileHeader);
        makeDraggable(this.elements.terminalWindow, this.elements.terminalHeader);
    },

    async addLog(type, content, prefix = '> ', effect = 'type', isTransient = false) {
        const entry = { type, content, prefix, effect, isTransient };
        this.state.terminalLogs.push(entry);
        await this.renderLogEntry(entry, true);
    },

    async renderLogEntry(entry, animate = true, langOverride = null) {
        let container = this.elements.terminalOutput;
        
        if (entry.content.type === 'dump') {
            await this.renderHexDump(container, animate);
            return;
        }

        const line = document.createElement('div');
        line.className = `line ${entry.type}`;
        container.appendChild(line);

        let textToDisplay = "";
        
        if (entry.content.key) {
            const currentLang = langOverride || this.state.lang;
            const langObj = I18N[currentLang] || I18N['en'];
            const t = langObj[entry.content.key] || entry.content.key;
            
            let params = entry.content.params || [];
            params = params.map(p => langObj.KEY_MAP?.[p] || p);
            
            textToDisplay = t + (params.length ? " " + params.join(" ") : "");
        } 
        else if (entry.content.carId) {
            const currentLang = langOverride || this.state.lang;
            const carData = DATA_STORE[currentLang].CARS[entry.content.carId];
            if (entry.content.isStat) {
                const val = carData?.STATS?.[entry.content.dataKey] || "N/A";
                const label = I18N[currentLang].KEY_MAP?.[entry.content.dataKey] || entry.content.dataKey;
                const hash = Math.floor(Math.random()*255).toString(16).toUpperCase().padStart(2,'0');
                textToDisplay = `0x${hash} [${label}] ${val}`;
                
            } else {
                const val = carData?.[entry.content.dataKey] || "N/A";
                textToDisplay = `>> ${val}`;
            }
        } 
        else if (entry.content.raw) {
            textToDisplay = entry.content.raw;
        }

        const fullText = (entry.prefix || "") + textToDisplay;
        const speed = animate ? (entry.effect === 'decrypt' ? 5 : CONFIG.typingSpeed) : 0;
        
        if (entry.effect === 'decrypt') {
            await Utils.decryptText(line, fullText, speed);
        } else {
            await Utils.typeText(line, fullText, speed);
        }

        this.elements.terminalOutput.scrollTop = this.elements.terminalOutput.scrollHeight;
    },

    async renderHexDump(target, animate = true) {
        const container = document.createElement('div');
        container.className = 'line system';
        container.style.fontSize = '10px';
        container.style.opacity = '0.7';
        container.style.lineHeight = '1.2';
        target.appendChild(container);

        for (let i = 0; i < 12; i++) {
            const addr = `0x${Math.floor(Math.random()*65535).toString(16).toUpperCase().padStart(4, '0')}`;
            const hex = Array(8).fill(0).map(() => Math.floor(Math.random()*255).toString(16).toUpperCase().padStart(2, '0')).join(" ");
            
            const line = document.createElement('div');
            line.textContent = `${addr}: ${hex}`;
            container.appendChild(line);
            
            if (animate) {
                this.elements.terminalOutput.scrollTop = this.elements.terminalOutput.scrollHeight;
                await Utils.wait(20);
            }
        }
    },

    renderFullTerminal(forcedLang = null) {
        const lang = forcedLang || this.state.lang;
        this.elements.terminalOutput.innerHTML = '';
        this.state.terminalLogs.forEach(entry => {
            this.renderLogEntry(entry, false, lang); 
        });

        if (this.state.activeCarId) {
            this.showCarOptions(this.state.activeCarId);
        }
    },

    async systemBoot() {
        await Utils.wait(500);
        await this.addLog('system', { key: 'boot_1' });
    },

    async handleDataRequest(item) {
        if (this.state.isBusy) return;
        this.state.isBusy = true;

        const carId = item.dataset.carId;
        this.state.activeCarId = carId;

        const list = item.closest('.data-list');
        list.classList.add('locked');
        item.classList.add('active-selection');

        Utils.scrollTo(document.getElementById('terminal-section'), CONFIG.scrollDuration);
        
        this.state.terminalLogs = []; 
        this.elements.terminalOutput.innerHTML = '';

        await this.addLog('user', { key: 'executing', params: [carId] }, '$ ');
        await Utils.wait(150);
        await this.addLog('system', { key: 'scanning' });
        await this.addLog('system', { type: 'dump' }); 
        await this.addLog('system', { key: 'sync_complete' }, '> ', 'decrypt');
        await Utils.wait(200);
        await this.addLog('system', { key: 'sel_option' }); 
        
        this.showCarOptions(carId);

        list.classList.remove('locked');
        item.classList.remove('active-selection');
        this.state.isBusy = false;
    },

    showCarOptions(carId) {
        const data = DATA_STORE[this.state.lang].CARS[carId];
        const t = I18N[this.state.lang];
        
        const oldContainer = document.querySelector('.cmd-options-wrapper');
        if (oldContainer) oldContainer.remove();

        const wrapper = document.createElement('div');
        wrapper.className = 'cmd-options-wrapper';
        this.elements.terminalOutput.appendChild(wrapper);

        const btnContainer = document.createElement('div');
        btnContainer.className = 'cmd-options';
        wrapper.appendChild(btnContainer);
        
        this.elements.terminalOutput.scrollTop = this.elements.terminalOutput.scrollHeight;

        const specsBtn = document.createElement('button');
        specsBtn.className = 'cmd-btn active-btn';
        specsBtn.textContent = t.KEY_MAP['MEMORY_DUMP'] || 'MEMORY_DUMP';
        specsBtn.onclick = () => this.handleSubsystem(carId, 'MEMORY_DUMP');
        btnContainer.appendChild(specsBtn);

        Object.keys(data).forEach(key => {
            if (key === 'STATS' || key === 'NAME' || key === 'NOMBRE') return;
            const btn = document.createElement('button');
            btn.className = 'cmd-btn';
            const label = t.KEY_MAP[key] || key;
            btn.textContent = label;
            btn.onclick = () => this.handleSubsystem(carId, key);
            btnContainer.appendChild(btn);
        });
    },

    async handleSubsystem(carId, key) {
        this.elements.terminalInput.focus();
        this.state.terminalLogs = this.state.terminalLogs.filter(log => !log.isTransient);
        this.renderFullTerminal();
        
        await this.addLog('user', { key: 'accessing', params: [key] }, '$ ', 'type', true);
        
        if (key === 'MEMORY_DUMP') {
            await this.addLog('user', { key: 'dumping', params: [carId] }, '$ ', 'type', true);
            
            const stats = DATA_STORE[this.state.lang].CARS[carId].STATS;
            for (const [statKey, value] of Object.entries(stats)) {
                await this.addLog('system', { carId, isStat: true, dataKey: statKey }, '', 'type', true);
                await Utils.wait(20);
            }
        } else {
            await this.addLog('system', { carId, isStat: false, dataKey: key }, '', 'type', true);
        }
    },

    cycleProfile(dir) {
        if (this.state.isBusy) return;
        const profiles = DATA_STORE[this.state.lang].PROFILES;
        this.state.profileIndex += dir;
        this.state.textVariant = 0; 
        if (this.state.profileIndex >= profiles.length) this.state.profileIndex = 0;
        if (this.state.profileIndex < 0) this.state.profileIndex = profiles.length - 1;
        this.renderProfile(); 
    },

    renderProfile(animate = true) {
        const p = DATA_STORE[this.state.lang].PROFILES[this.state.profileIndex];
        const t = I18N[this.state.lang];
        const currentText = p.texts[this.state.textVariant % p.texts.length];

        document.getElementById('headerId').textContent = t.label_id + p.id;
        document.getElementById('headerArchive').textContent = t.label_archive;
        document.getElementById('footerSerial').textContent = t.footer_serial + p.path;
        document.getElementById('archiveLabel').textContent = t.label_source + p.source;

        Utils.typeText(this.elements.bioText, currentText, animate ? 10 : 0);
    },

    updateLangButton() {
        this.elements.btnLang.textContent = this.state.lang === 'en' ? '[ ES ]' : '[ ENG ]';
    },

    applyTranslations(animate = true) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            if (animate) {
                el.classList.add('i18n-fade');
                setTimeout(() => {
                    const key = el.dataset.i18n;
                    if (I18N[this.state.lang][key]) el.textContent = I18N[this.state.lang][key];
                    el.classList.remove('i18n-fade');
                }, 200);
            } else {
                const key = el.dataset.i18n;
                if (I18N[this.state.lang][key]) el.textContent = I18N[this.state.lang][key];
            }
        });

        const inputPlaceholder = I18N[this.state.lang].input_placeholder;
        if (this.elements.terminalInput && inputPlaceholder) {
            this.elements.terminalInput.placeholder = inputPlaceholder;
        }
    },

    toggleLang() {
        const newLang = this.state.lang === 'en' ? 'es' : 'en';
        this.state.lang = newLang;
        localStorage.setItem('yvl_lang', newLang);
        
        this.updateLangButton();
        this.applyTranslations(true);
        this.renderProfile(false);
        this.renderFullTerminal(newLang);
    },

    toggleTheme() {
        this.elements.body.classList.toggle('dark-mode');
        const isDark = this.elements.body.classList.contains('dark-mode');
        this.elements.btnTheme.textContent = isDark ? '[ NIGHT ]' : '[ DAY ]';
    },

    handleNav(e) {
        document.querySelectorAll('.nav-main').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const targetId = e.target.dataset.target;
        document.querySelectorAll('.view-section').forEach(sec => {
            sec.classList.remove('active-view');
            if (sec.id === targetId) sec.classList.add('active-view');
        });
    },

    handleCommand(e) {
        if (e.key === 'Enter') {
            const val = e.target.value.trim().toLowerCase();
            if (!val) return;
            e.target.value = '';
            
            this.addLog('user', { raw: val }, '$ ');
            
            const t = I18N[this.state.lang];

            setTimeout(() => {
                if (val === 'help') this.addLog('system', { key: 'cmd_help' });
                else if (val === 'clear') {
                    this.state.terminalLogs = [];
                    this.elements.terminalOutput.innerHTML = '';
                    if (this.state.activeCarId) this.showCarOptions(this.state.activeCarId);
                }
                else if (val === 'date') this.addLog('system', { raw: new Date().toISOString() });
                else if (val === 'whoami') this.addLog('system', { key: 'cmd_whoami' });
                else if (val === 'dump') this.addLog('system', { type: 'dump' });
                else this.addLog('system', { key: 'cmd_unknown' });
            }, 300);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());