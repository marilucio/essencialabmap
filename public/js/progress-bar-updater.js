/**
 * Script para atualizar barras de progresso baseadas no contador de escassez
 * Sincroniza com o scarcity-counter.js
 */

(function() {
    'use strict';

    /**
     * Atualiza barras de progresso baseadas no valor do contador
     */
    function updateProgressBars() {
        // Aguardar o ScarcityCounter estar disponível
        if (typeof window.ScarcityCounter === 'undefined') {
            setTimeout(updateProgressBars, 100);
            return;
        }

        const currentValue = window.ScarcityCounter.getCurrentValue();
        const progressBars = document.querySelectorAll('.scarcity-progress-bar');
        
        progressBars.forEach(bar => {
            // Calcular porcentagem baseada no valor atual (47 = 100%, 9 = 0%)
            const maxValue = 47;
            const minValue = 9;
            const percentage = Math.max(0, Math.min(100, ((currentValue - minValue) / (maxValue - minValue)) * 100));
            
            // Atualizar a largura da barra
            bar.style.width = `${percentage}%`;
            
            // Adicionar classes baseadas na urgência
            bar.classList.remove('bg-green-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500');
            
            if (percentage <= 25) {
                bar.classList.add('bg-red-500');
            } else if (percentage <= 50) {
                bar.classList.add('bg-orange-500');
            } else if (percentage <= 75) {
                bar.classList.add('bg-yellow-500');
            } else {
                bar.classList.add('bg-green-500');
            }
        });
    }

    /**
     * Observer para detectar mudanças nos contadores de escassez
     */
    function observeScarcityCounters() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    const target = mutation.target;
                    if (target.hasAttribute && target.hasAttribute('data-scarcity-counter')) {
                        updateProgressBars();
                    }
                }
            });
        });

        // Observar mudanças nos contadores
        const counters = document.querySelectorAll('[data-scarcity-counter]');
        counters.forEach(counter => {
            observer.observe(counter, {
                childList: true,
                characterData: true,
                subtree: true
            });
        });
    }

    /**
     * Inicialização
     */
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Aguardar um pouco para garantir que o scarcity-counter.js foi carregado
        setTimeout(() => {
            updateProgressBars();
            observeScarcityCounters();
        }, 500);
    }

    // Inicializar
    init();

    // API pública
    window.ProgressBarUpdater = {
        update: updateProgressBars
    };

})();