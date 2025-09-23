// public/js/price-localizer.js
(() => {
  // Ativar apenas na versão ES
  if (!location.pathname.includes('/metodocalmaes')) return;

  const BASE_BRL = 19.90;

  // Elementos-alvo: adicione data-attrs nos spans/botões com preço
  // Ex.: <span data-price-localize data-base-brl="19.90">$19.90</span>
  const targets = Array.from(document.querySelectorAll('[data-price-localize]'));
  if (!targets.length) return;

  // Países prioritários e suas moedas
  const COUNTRY_TO_CURRENCY = {
    MX: 'MXN', // México
    CO: 'COP', // Colômbia
    PE: 'PEN', // Peru
    UY: 'UYU', // Uruguai
    ES: 'EUR'  // Espanha
    // demais países cairão no fallback USD
  };

  // Conversões aproximadas (atualize quando quiser).
  // FONTE: valores médios recentes. Apenas visual; o checkout Hotmart converte de verdade.
  const FX_BRL = {
    MXN: 3.40,   // 1 BRL ≈ 3.40 MXN
    COP: 820,    // 1 BRL ≈ 820 COP
    PEN: 0.74,   // 1 BRL ≈ 0.74 PEN
    UYU: 7.50,   // 1 BRL ≈ 7.50 UYU
    EUR: 0.18,   // 1 BRL ≈ 0.18 EUR
    USD: 0.19    // 1 BRL ≈ 0.19 USD
  };

  // Símbolos/formatos padrão por moeda
  const LOCALE_FOR = {
    MXN: 'es-MX',
    COP: 'es-CO',
    PEN: 'es-PE',
    UYU: 'es-UY',
    EUR: 'es-ES',
    USD: 'es-US'
  };

  // Arredondamento psicológico por moeda
  function psychologicalRound(value, currency) {
    // Valor numérico -> ajusta ".90" quando faz sentido
    if (currency === 'COP') {
      // Sem centavos; arredondar para centenas ou milhares mais próximos
      return Math.round(value / 100) * 100;
    }
    if (['MXN', 'PEN', 'UYU', 'USD'].includes(currency)) {
      // duas casas — força .90
      const int = Math.floor(value);
      return Number((int + 0.90).toFixed(2));
    }
    if (currency === 'EUR') {
      // Em EUR pode ficar .99 ou .90; usamos .90 para consistência
      const int = Math.floor(value);
      return Number((int + 0.90).toFixed(2));
    }
    return Number(value.toFixed(2));
  }

  function formatMoney(value, currency) {
    return new Intl.NumberFormat(LOCALE_FOR[currency] || 'es', {
      style: 'currency',
      currency,
      maximumFractionDigits: currency === 'COP' ? 0 : 2,
      minimumFractionDigits: currency === 'COP' ? 0 : 2
    }).format(value);
  }

  function convertFromBRL(brl, currency) {
    const fx = FX_BRL[currency];
    if (!fx) return null;
    return brl * fx;
  }

  function applyPriceToTargets(currency, approxLabel = '') {
    targets.forEach(el => {
      const base = Number(el.getAttribute('data-base-brl') || BASE_BRL);
      const converted = convertFromBRL(base, currency);
      if (!converted) return;

      const rounded = psychologicalRound(converted, currency);
      const formatted = formatMoney(rounded, currency);
      
      // Verifica se o elemento está dentro da seção de bônus (OfferSection)
      const isInOfferSection = el.closest('#offer-section') !== null;
      
      // Se estiver na seção de oferta, não adiciona "(aprox.)"
      const labelToUse = isInOfferSection ? '' : approxLabel;
      
      // Aplica o preço formatado com label opcional
      el.textContent = `${formatted} ${labelToUse}`.trim();
    });
  }

  // Detecção de país com fallback em cascata
  async function detectCountry() {
    // Primeiro, verifica se há parâmetro de teste na URL
    const urlParams = new URLSearchParams(location.search);
    const forceCountry = urlParams.get('force');
    if (forceCountry) {
      return forceCountry.toUpperCase();
    }

    // Tenta APIs de geolocalização em ordem de prioridade
    const apis = [
      'https://ipapi.co/json/',
      'https://ipwho.is/',
      'https://ipinfo.io/json'
    ];

    for (const apiUrl of apis) {
      try {
        const resp = await fetch(apiUrl);
        if (!resp.ok) throw new Error('geo failed');
        const data = await resp.json();
        
        // Diferentes APIs têm diferentes formatos de resposta
        let countryCode = null;
        if (data.country_code) {
          countryCode = data.country_code;
        } else if (data.country) {
          countryCode = data.country;
        }
        
        if (countryCode) {
          return String(countryCode).toUpperCase();
        }
      } catch (error) {
        console.warn(`Falha na API ${apiUrl}:`, error);
        continue;
      }
    }
    
    return null;
  }

  async function run() {
    const country = await detectCountry();
    const currency = COUNTRY_TO_CURRENCY[country] || 'USD';

    // Se for Brasil por engano, não altera (apenas garantia)
    if (country === 'BR') return;

    // Aplica com "aprox." para deixar claro que é estimativa visual
    applyPriceToTargets(currency, '(aprox.)');
  }

  // Defer para garantir que o DOM dos blocos já exista
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();