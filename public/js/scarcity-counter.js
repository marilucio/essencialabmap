/**
 * Script de Contador de Escassez Dinâmica
 * Decrementa um valor inicial de 47 até aproximadamente 20 baseado no usuário
 * Mantém controle por IP/cookie para cada usuário específico
 */

(function() {
    'use strict';

    // Configurações do contador
    const CONFIG = {
        INITIAL_VALUE: 47,
        MIN_VALUE: 9,
        TARGET_RANGE_MIN: 18,
        TARGET_RANGE_MAX: 23,
        DECREMENT_MIN: 3,
        DECREMENT_MAX: 6,
        COOKIE_NAME: 'scarcity_counter',
        COOKIE_EXPIRY_DAYS: 30,
        UPDATE_INTERVAL: 24 * 60 * 60 * 1000, // 24 horas em ms
        SELECTOR: '[data-scarcity-counter]'
    };

    /**
     * Gera um hash simples baseado no IP do usuário (simulado via fingerprinting)
     */
    function generateUserFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Fingerprint', 2, 2);
        
        const fingerprint = canvas.toDataURL().slice(-50);
        const userAgent = navigator.userAgent;
        const screen = `${window.screen.width}x${window.screen.height}`;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        return btoa(`${fingerprint}${userAgent}${screen}${timezone}`).slice(0, 16);
    }

    /**
     * Gera um número pseudo-aleatório baseado em uma seed
     */
    function seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    /**
     * Obtém ou cria dados do contador para o usuário
     */
    function getCounterData() {
        const fingerprint = generateUserFingerprint();
        const cookieData = getCookie(CONFIG.COOKIE_NAME);
        
        if (cookieData) {
            try {
                const data = JSON.parse(atob(cookieData));
                if (data.fingerprint === fingerprint) {
                    return data;
                }
            } catch (e) {
                console.warn('Erro ao decodificar cookie do contador:', e);
            }
        }

        // Criar novos dados para o usuário
        const seed = fingerprint.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const initialDecrement = Math.floor(seededRandom(seed) * (CONFIG.DECREMENT_MAX - CONFIG.DECREMENT_MIN + 1)) + CONFIG.DECREMENT_MIN;
        
        return {
            fingerprint: fingerprint,
            currentValue: CONFIG.INITIAL_VALUE - initialDecrement,
            lastUpdate: Date.now(),
            visitCount: 1
        };
    }

    /**
     * Salva dados do contador no cookie
     */
    function saveCounterData(data) {
        const encodedData = btoa(JSON.stringify(data));
        setCookie(CONFIG.COOKIE_NAME, encodedData, CONFIG.COOKIE_EXPIRY_DAYS);
    }

    /**
     * Atualiza o valor do contador baseado no tempo e visitas
     */
    function updateCounterValue(data) {
        const now = Date.now();
        const timeSinceLastUpdate = now - data.lastUpdate;
        
        // Se passou mais de 24h desde a última atualização, decrementar
        if (timeSinceLastUpdate >= CONFIG.UPDATE_INTERVAL) {
            const seed = data.fingerprint.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + data.visitCount;
            const decrement = Math.floor(seededRandom(seed) * (CONFIG.DECREMENT_MAX - CONFIG.DECREMENT_MIN + 1)) + CONFIG.DECREMENT_MIN;
            
            data.currentValue = Math.max(data.currentValue - decrement, CONFIG.MIN_VALUE);
            data.lastUpdate = now;
        }
        
        // Incrementar contador de visitas
        data.visitCount++;
        
        // Garantir que o valor não seja menor que o mínimo
        if (data.currentValue < CONFIG.MIN_VALUE) {
            data.currentValue = CONFIG.MIN_VALUE;
        }
        
        // Se o valor estiver muito alto, ajustar gradualmente
        if (data.currentValue > CONFIG.TARGET_RANGE_MAX) {
            const seed = data.fingerprint.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + now;
            const adjustment = Math.floor(seededRandom(seed) * 3) + 1;
            data.currentValue = Math.max(data.currentValue - adjustment, CONFIG.TARGET_RANGE_MIN);
        }
        
        return data;
    }

    /**
     * Aplica o valor do contador aos elementos da página
     */
    function applyCounterToElements(value) {
        const elements = document.querySelectorAll(CONFIG.SELECTOR);
        elements.forEach(element => {
            // Animar a mudança de valor
            const currentText = element.textContent;
            const currentValue = parseInt(currentText) || value;
            
            if (currentValue !== value) {
                animateValueChange(element, currentValue, value);
            } else {
                element.textContent = value;
            }
            
            // Adicionar classe para styling
            element.classList.add('scarcity-active');
            
            // Adicionar cor baseada na escassez
            if (value <= 15) {
                element.classList.add('scarcity-critical');
            } else if (value <= 25) {
                element.classList.add('scarcity-medium');
            } else {
                element.classList.add('scarcity-low');
            }
        });
    }

    /**
     * Anima a mudança de valor
     */
    function animateValueChange(element, fromValue, toValue) {
        const duration = 1000; // 1 segundo
        const steps = 20;
        const stepDuration = duration / steps;
        const valueStep = (toValue - fromValue) / steps;
        
        let currentStep = 0;
        
        const interval = setInterval(() => {
            currentStep++;
            const currentValue = Math.round(fromValue + (valueStep * currentStep));
            element.textContent = currentValue;
            
            if (currentStep >= steps) {
                clearInterval(interval);
                element.textContent = toValue;
            }
        }, stepDuration);
    }

    /**
     * Funções auxiliares para cookies
     */
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    /**
     * Adiciona estilos CSS para o contador
     */
    function addCounterStyles() {
        const style = document.createElement('style');
        style.textContent = `
            [data-scarcity-counter] {
                font-weight: bold;
                transition: all 0.3s ease;
            }
            
            .scarcity-critical {
                color: #dc2626 !important;
                animation: pulse-red 2s infinite;
            }
            
            .scarcity-medium {
                color: #f59e0b !important;
            }
            
            .scarcity-low {
                color: #059669 !important;
            }
            
            @keyframes pulse-red {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            .scarcity-counter-container {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
            }
            
            .scarcity-counter-icon {
                width: 1rem;
                height: 1rem;
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Inicializa o contador de escassez
     */
    function initScarcityCounter() {
        // Aguardar o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initScarcityCounter);
            return;
        }

        // Adicionar estilos
        addCounterStyles();

        // Obter dados do contador
        let counterData = getCounterData();
        
        // Atualizar valor baseado no tempo/visitas
        counterData = updateCounterValue(counterData);
        
        // Salvar dados atualizados
        saveCounterData(counterData);
        
        // Aplicar valor aos elementos
        applyCounterToElements(counterData.currentValue);
        
        // Log para debug (remover em produção)
        console.log('Scarcity Counter:', {
            value: counterData.currentValue,
            fingerprint: counterData.fingerprint.slice(0, 8) + '...',
            visits: counterData.visitCount
        });
    }

    /**
     * API pública para controle manual
     */
    window.ScarcityCounter = {
        getCurrentValue: function() {
            const data = getCounterData();
            return data.currentValue;
        },
        
        forceUpdate: function() {
            initScarcityCounter();
        },
        
        reset: function() {
            document.cookie = `${CONFIG.COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            initScarcityCounter();
        }
    };

    // Inicializar automaticamente
    initScarcityCounter();

})();