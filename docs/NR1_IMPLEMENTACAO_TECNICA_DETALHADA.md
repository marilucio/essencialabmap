# 🔧 NR-1 (2026): Implementação Técnica Detalhada do EssenciaLab

> **Documento técnico para equipes de SST, SESMT e TI**  
> Especificações técnicas, arquitetura de dados e processos de implementação

---

## 📌 Índice

1. [Arquitetura Técnica do Sistema](#1-arquitetura-técnica-do-sistema)
2. [Banco de Dados e Estrutura de Dados](#2-banco-de-dados-e-estrutura-de-dados)
3. [Fluxos de Dados e Processamento](#3-fluxos-de-dados-e-processamento)
4. [APIs e Integrações](#4-apis-e-integrações)
5. [Segurança e Conformidade LGPD](#5-segurança-e-conformidade-lgpd)
6. [Protocolos de Implementação Corporativa](#6-protocolos-de-implementação-corporativa)
7. [Dashboards e Relatórios para Gestão](#7-dashboards-e-relatórios-para-gestão)
8. [Troubleshooting e Suporte](#8-troubleshooting-e-suporte)

---

## 1. Arquitetura Técnica do Sistema

### 1.1 Stack Tecnológico

```
┌─────────────────────────────────────────────────────────────┐
│                    CAMADA DE APRESENTAÇÃO                    │
├─────────────────────────────────────────────────────────────┤
│  • React 18.2 + TypeScript 5.7.3                            │
│  • Vite 6.0.7 (build e hot reload)                          │
│  • Tailwind CSS (UI responsivo)                             │
│  • Radix UI (componentes acessíveis)                        │
│  • Framer Motion (animações)                                │
│  • i18next (PT-BR, EN, ES)                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    CAMADA DE LÓGICA                          │
├─────────────────────────────────────────────────────────────┤
│  • React Query (cache e sincronização)                      │
│  • Zustand (gerenciamento de estado)                        │
│  • Zod (validação de schemas)                               │
│  • React Hook Form (formulários)                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  CAMADA DE IA E PROCESSAMENTO                │
├─────────────────────────────────────────────────────────────┤
│  • MediaPipe 0.10.14 (análise facial - 478 pontos)         │
│  • OpenAI GPT-4 (análise de exames e recomendações)        │
│  • Tesseract.js + PaddleOCR (extração de texto)            │
│  • DSP.js + OpenCV.js (processamento de sinais rPPG)       │
│  • Hugging Face (modelos de emoção)                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    CAMADA DE DADOS                           │
├─────────────────────────────────────────────────────────────┤
│  • Supabase 2.47.10 (PostgreSQL 15)                         │
│  • Supabase Auth (autenticação + RLS)                       │
│  • Supabase Storage (exames, fotos, áudios)                 │
│  • Supabase Edge Functions (serverless)                     │
│  • Supabase Realtime (notificações push)                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    CAMADA MOBILE                             │
├─────────────────────────────────────────────────────────────┤
│  • Capacitor 7.4.4 (Android nativo)                         │
│  • Capgo Updater 7.27.3 (OTA updates)                       │
│  • PWA (iOS via Safari, Android via Chrome)                 │
│  • Google Play Billing (pagamentos in-app)                  │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Componentes Principais Relacionados à NR-1

| Componente | Arquivo | Função NR-1 |
|------------|---------|-------------|
| **Card de Saúde Preditiva** | `PredictiveIndicesPanel.tsx` | Exibe índices de risco cardiovascular, inflamatório, metabólico |
| **Dashboard de Saúde** | `HealthDashboard.tsx` | Painel principal com alertas, recomendações e tendências |
| **Análise Facial** | `SmartFacialAnalysisIntegration.tsx` | Captura e processa 478 pontos faciais (HRV, emoções, órgãos MTC) |
| **Sinais Vitais (rPPG)** | `VitalSignsMonitor.tsx` | Mede FC, HRV, PA, FR sem sensores |
| **Protocolo Respiratório** | `ProtocoloRespiratorio5x5x10/` | Exercício guiado 5-5-10 para reduzir estresse |
| **Áudios Neuroacústicos** | `NeuroAudioPlayer.tsx` | Player de frequências binaurais (sono, foco, relaxamento) |
| **Questionários** | `IntelligentQuestionnaire.tsx` | Entrada, sintomas e estilo de vida (card preditivo) |
| **Big Five** | `Testes/bigfive/` | Teste de personalidade validado (50 questões) |
| **Roda das Emoções** | `Testes/rodaemocoes/` | 8 primárias + 16 secundárias + 32 terciárias |
| **SOGI (MAP Profissional)** | `Professional/SOGISection.tsx` | Exclusivo para profissionais - 12 sistemas corporais |
| **Upload de Exames** | `prevention/ExamUpload.tsx` | OCR + IA para extrair biomarcadores |
| **Microchecagens** | `WeeklyCheckIn.tsx` + `BiweeklyCheckIn.tsx` | Check-in rápido (humor, energia, sono) |
| **Motor de Recomendações** | `integratedRecommendationService.ts` | Cruza dados e gera 15-20 recomendações ranqueadas |

---

## 2. Banco de Dados e Estrutura de Dados

### 2.1 Tabelas Principais (PostgreSQL)

#### **`preventive_health_exams`** (Exames Médicos)

```sql
CREATE TABLE preventive_health_exams (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  file_path TEXT, -- Caminho no Supabase Storage
  mime_type TEXT, -- application/pdf, image/jpeg, etc.
  text_extracted TEXT, -- Texto extraído por OCR
  extraction_status TEXT, -- pending | processing | completed | failed
  structured_data JSONB, -- Biomarcadores estruturados
  parameters_count INTEGER, -- Número de parâmetros extraídos
  processing_method TEXT, -- legacy | paddleocr | manual
  confidence_score NUMERIC(4,3), -- Confiança do OCR (0.000 a 1.000)
  ai_analysis_html TEXT, -- Análise gerada por GPT-4 em HTML
  tipo_exame TEXT, -- hemograma | bioquimico | hormonal | urina | outro
  nome_exame TEXT,
  laboratorio TEXT,
  medico_solicitante TEXT,
  observacoes_usuario TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Índices:**
- `idx_preventive_health_exams_user_id` (user_id)
- `idx_preventive_health_exams_tipo_exame` (tipo_exame)
- `idx_preventive_health_exams_structured_data_gin` (structured_data) - GIN index para queries JSON

**RLS (Row Level Security):**
- Usuários veem apenas seus próprios exames
- Admins/SESMT podem ver exames de colaboradores (com permissão)

#### **`biweekly_checkins`** (Microchecagens Quinzenais)

```sql
CREATE TABLE biweekly_checkins (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  energy_level INTEGER CHECK (energy_level BETWEEN 1 AND 5),
  mood_level INTEGER CHECK (mood_level BETWEEN 1 AND 5),
  sleep_quality INTEGER CHECK (sleep_quality BETWEEN 1 AND 5),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Análise agregada:**
```sql
-- Média de humor da empresa (últimos 30 dias)
SELECT 
  AVG(mood_level) as avg_mood,
  AVG(energy_level) as avg_energy,
  AVG(sleep_quality) as avg_sleep,
  COUNT(DISTINCT user_id) as participants
FROM biweekly_checkins
WHERE created_at >= NOW() - INTERVAL '30 days';

-- Identificar colaboradores em queda abrupta (alerta precoce)
WITH recent_checkins AS (
  SELECT 
    user_id,
    mood_level,
    energy_level,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) as rn
  FROM biweekly_checkins
)
SELECT user_id
FROM recent_checkins
WHERE rn <= 3
GROUP BY user_id
HAVING AVG(mood_level) < 2.5 OR AVG(energy_level) < 2.5;
```

#### **`sessoes_respiratorio`** (Protocolo Respiratório)

```sql
CREATE TABLE sessoes_respiratorio (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  data_inicio TIMESTAMPTZ,
  data_fim TIMESTAMPTZ,
  duracao_total INTEGER, -- segundos
  ciclos_completos INTEGER,
  pausas INTEGER DEFAULT 0,
  completou_protocolo BOOLEAN DEFAULT FALSE,
  observacoes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**View de estatísticas:**
```sql
CREATE VIEW vw_estatisticas_respiratorio_usuario AS
SELECT 
  user_id,
  COUNT(*) as total_sessoes,
  COUNT(*) FILTER (WHERE completou_protocolo) as sessoes_completas,
  ROUND(COUNT(*) FILTER (WHERE completou_protocolo)::numeric / NULLIF(COUNT(*), 0) * 100, 2) as taxa_conclusao_pct,
  SUM(duracao_total) as tempo_total_segundos,
  ROUND(SUM(duracao_total) / 60.0, 2) as tempo_total_minutos,
  SUM(ciclos_completos) as total_ciclos,
  MAX(data_inicio) as ultima_sessao
FROM sessoes_respiratorio
GROUP BY user_id;
```

#### **`facial_analysis_results`** (Análise Facial)

```sql
CREATE TABLE facial_analysis_results (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  foto_url TEXT, -- URL da foto no Storage
  vital_signs JSONB, -- { hr: 72, hrv: 45, bp_systolic: 120, rr: 16 }
  emotions JSONB, -- { joy: 0.1, sadness: 0.6, anger: 0.05, ... }
  organ_health_tcm JSONB, -- { liver: 65, heart: 78, lungs: 82, ... }
  skin_analysis JSONB, -- { hydration: 72, wrinkles: 3, age: 38 }
  landmarks_data JSONB, -- 478 pontos faciais (opcional)
  processing_time_ms INTEGER,
  model_version TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### **`predictive_indices`** (Índices Preditivos)

```sql
CREATE TABLE predictive_indices (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  exam_id UUID REFERENCES preventive_health_exams(id),
  indices_json JSONB, -- { nlr: 3.2, car: 0.8, tyg: 8.9, ... }
  combined_scores JSONB, -- { cardiovascular: 72, inflammatory: 68, ... }
  risk_level TEXT, -- low | medium | high | very_high
  interpretation TEXT,
  recommendations TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.2 Estrutura de Dados para Relatórios NR-1

#### **Relatório Agregado de Saúde Mental (Empresa)**

```sql
-- Query para gerar relatório trimestral de conformidade NR-1
WITH mental_health_metrics AS (
  SELECT 
    COUNT(DISTINCT wc.user_id) as total_participants,
    AVG(wc.mood_level) as avg_mood,
    AVG(wc.energy_level) as avg_energy,
    COUNT(*) FILTER (WHERE wc.mood_level <= 2) as low_mood_count,
    COUNT(*) FILTER (WHERE wc.energy_level <= 2) as low_energy_count
  FROM biweekly_checkins wc
  WHERE wc.created_at >= NOW() - INTERVAL '90 days'
),
stress_metrics AS (
  SELECT 
    COUNT(DISTINCT far.user_id) as users_analyzed,
    AVG((far.vital_signs->>'hrv')::numeric) as avg_hrv,
    COUNT(*) FILTER (WHERE (far.vital_signs->>'hrv')::numeric < 50) as high_stress_count
  FROM facial_analysis_results far
  WHERE far.created_at >= NOW() - INTERVAL '90 days'
),
course_completion AS (
  SELECT 
    COUNT(DISTINCT cp.user_id) as users_with_courses,
    COUNT(*) as total_courses_completed
  FROM course_purchases cp
  WHERE cp.completed_at IS NOT NULL
    AND cp.completed_at >= NOW() - INTERVAL '90 days'
)
SELECT 
  mh.total_participants,
  ROUND(mh.avg_mood, 2) as avg_mood_score,
  ROUND(mh.avg_energy, 2) as avg_energy_score,
  ROUND((mh.low_mood_count::numeric / NULLIF(mh.total_participants, 0)) * 100, 1) as pct_low_mood,
  sm.avg_hrv,
  ROUND((sm.high_stress_count::numeric / NULLIF(sm.users_analyzed, 0)) * 100, 1) as pct_high_stress,
  cc.users_with_courses,
  cc.total_courses_completed
FROM mental_health_metrics mh
CROSS JOIN stress_metrics sm
CROSS JOIN course_completion cc;
```

---

## 3. Fluxos de Dados e Processamento

### 3.1 Fluxo de Upload e Análise de Exame

```
1. USUÁRIO INICIA UPLOAD
   ↓
   Frontend: ExamUpload.tsx
   - Valida tipo de arquivo (PDF, JPG, PNG)
   - Comprime imagem se necessário
   - Mostra preview

2. UPLOAD PARA SUPABASE STORAGE
   ↓
   Bucket: exam_uploads
   Path: {user_id}/{timestamp}_{filename}
   Segurança: RLS ativo (usuário só acessa seus arquivos)

3. CRIA REGISTRO NO BANCO
   ↓
   INSERT INTO preventive_health_exams (
     user_id, file_path, extraction_status = 'pending'
   )

4. PROCESSAMENTO OCR (Assíncrono)
   ↓
   Se PDF: PaddleOCR API (servidor Python separado)
   Se Imagem: Tesseract.js (client-side) ou PaddleOCR
   
   Output: Texto bruto extraído
   UPDATE: extraction_status = 'processing'

5. ESTRUTURAÇÃO DE DADOS (IA)
   ↓
   OpenAI GPT-4 recebe:
   - Texto extraído
   - Prompt: "Extraia biomarcadores no formato JSON"
   
   Output exemplo:
   {
     "hemograma": {
       "hemoglobina": { "valor": 14.2, "unidade": "g/dL", "referencia": "12-16" },
       "leucocitos": { "valor": 7800, "unidade": "/mm³", "referencia": "4000-11000" },
       ...
     }
   }
   
   UPDATE: structured_data = {output}, extraction_status = 'completed'

6. CÁLCULO DE ÍNDICES PREDITIVOS
   ↓
   IntegratedHealthService.calculateAndSavePredictiveIndices()
   - Calcula NLR, CAR, TyG, RDW, etc.
   - Determina nível de risco (low | medium | high)
   - Gera interpretação em linguagem clara
   
   INSERT INTO predictive_indices (...)

7. GERAÇÃO DE RECOMENDAÇÕES
   ↓
   RecommendationEngine.generate()
   - Cruza índices com análise facial recente
   - Cruza com questionários (sintomas, estilo de vida, Big Five)
   - Ranqueia 15-20 recomendações por prioridade
   
   Output: Lista ordenada de ações
   [
     { type: 'protocol', title: 'Protocolo Respiratório', priority: 100 },
     { type: 'audio', title: 'Áudio Relaxamento', priority: 95 },
     { type: 'course', title: 'Código da Saúde Plena', priority: 90 },
     ...
   ]

8. NOTIFICAÇÃO AO USUÁRIO
   ↓
   Push Notification: "Seu exame foi analisado! Veja os resultados."
   Frontend: Atualiza Card de Saúde Preditiva

9. ALERTAS PARA GESTÃO (se risco alto)
   ↓
   Se risk_level = 'high' ou 'very_high':
   - Envia alerta para dashboard corporativo
   - (Opcional) Notifica SESMT/RH via email
```

### 3.2 Fluxo de Análise Facial para Detecção de Estresse

```
1. USUÁRIO ABRE CÂMERA
   ↓
   Frontend: SmartFacialAnalysisIntegration.tsx
   - Solicita permissão de câmera
   - Valida iluminação (mínimo requerido)
   - Orienta posicionamento do rosto

2. CAPTURA DE VÍDEO (30 segundos)
   ↓
   MediaPipe FaceLandmarker detecta:
   - 478 pontos faciais por frame (30 fps)
   - Rastreamento de movimento
   - Detecção de expressões

3. PROCESSAMENTO rPPG (Sinais Vitais)
   ↓
   Algoritmo (DSP.js + OpenCV.js):
   - Isola região de interesse (testa, bochechas)
   - Extrai variação de cor (fluxo sanguíneo)
   - Aplica filtros passa-banda (0.7-4 Hz)
   - Calcula frequência cardíaca (FC)
   - Calcula variabilidade cardíaca (HRV) via RMSSD
   
   Output: { hr: 72, hrv: 45, rr: 16 }

4. ANÁLISE EMOCIONAL
   ↓
   Modelo treinado (Hugging Face ou local):
   - Classifica expressão facial em 7 emoções
   - Calcula score de confiança
   
   Output: { joy: 0.1, sadness: 0.6, neutral: 0.2, ... }

5. ANÁLISE DE ÓRGÃOS (MTC)
   ↓
   Mapeamento facial → órgãos (baseado em literatura):
   - Testa → Coração
   - Nariz → Pulmões
   - Bochechas → Fígado/Baço
   - Queixo → Rins
   - Olhos → Fígado
   
   Análise de coloração, assimetrias, marcas
   
   Output: { liver: 65, heart: 78, lungs: 82, spleen: 70, kidneys: 75 }

6. ANÁLISE DE PELE
   ↓
   - Hidratação (textura)
   - Rugas (contagem e profundidade)
   - Manchas (hiperpigmentação)
   - Idade aparente (ML model)
   
   Output: { hydration: 72, wrinkles: 3, age: 38 }

7. SALVA RESULTADOS
   ↓
   INSERT INTO facial_analysis_results (...)
   - Foto opcional (com consentimento)
   - Todos os dados estruturados

8. AVALIAÇÃO DE RISCO
   ↓
   Se HRV < 50ms:
   - ALERTA: Estresse crônico detectado
   - Recomenda Protocolo Respiratório + Áudio Relaxamento
   
   Se múltiplos órgãos < 60:
   - ALERTA: Possível sobrecarga sistêmica
   - Recomenda Teste de Fungos + Consulta SESMT

9. ATUALIZAÇÃO DO CARD DE SAÚDE
   ↓
   Frontend: PredictiveIndicesPanel.tsx
   - Exibe novos dados
   - Mostra tendências (comparação com análises anteriores)
   - Destaca alertas prioritários
```

---

## 4. APIs e Integrações

### 4.1 APIs Externas Utilizadas

| API | Uso | Chave Necessária | Custo |
|-----|-----|------------------|-------|
| **OpenAI GPT-4** | Análise de exames, geração de recomendações | OPENAI_API_KEY | ~$0.01-0.03 por análise |
| **Google MediaPipe** | Análise facial (478 pontos) | Não (biblioteca local) | Gratuito |
| **PaddleOCR** | Extração de texto de exames (PDFs) | Não (self-hosted) | Custo de servidor |
| **Google Cloud TTS** | Text-to-Speech para Protocolo Respiratório | GOOGLE_APPLICATION_CREDENTIALS | ~$4 por 1M caracteres |
| **Supabase** | Banco, Auth, Storage, Functions | SUPABASE_URL + SUPABASE_ANON_KEY | $25/mês + uso |
| **Stripe** | Pagamentos (planos corporativos) | STRIPE_SECRET_KEY | 2.9% + $0.30 por transação |

### 4.2 Endpoints Relevantes para Integração Corporativa

#### **GET /api/corporate/health-dashboard**

Retorna dados agregados de saúde da empresa (SESMT/RH).

**Autenticação:** JWT + role = 'ADMIN' ou 'SESMT'

**Query Params:**
- `startDate` (ISO 8601)
- `endDate` (ISO 8601)
- `department` (opcional, filtro por setor)

**Response:**
```json
{
  "period": {
    "start": "2025-01-01T00:00:00Z",
    "end": "2025-03-31T23:59:59Z"
  },
  "aggregated_metrics": {
    "total_users": 500,
    "active_users": 427,
    "avg_mood": 3.8,
    "avg_energy": 3.6,
    "avg_sleep": 3.2,
    "avg_hrv": 52.3,
    "pct_high_stress": 18.5,
    "pct_low_mood": 12.3,
    "courses_completed": 134,
    "respiratory_sessions": 2847
  },
  "alerts": [
    {
      "type": "high_stress_sector",
      "severity": "medium",
      "message": "Setor Financeiro apresenta 42% dos colaboradores com HRV < 50ms",
      "affected_users": 21,
      "recommendation": "Implementar pausas obrigatórias com Protocolo Respiratório"
    }
  ],
  "trends": {
    "mood": { "current": 3.8, "previous_period": 3.5, "change_pct": 8.6 },
    "stress": { "current": 18.5, "previous_period": 24.2, "change_pct": -23.6 }
  }
}
```

#### **POST /api/corporate/bulk-enroll**

Cadastra múltiplos colaboradores de uma vez (onboarding).

**Autenticação:** JWT + role = 'ADMIN'

**Request Body:**
```json
{
  "users": [
    {
      "email": "colaborador1@empresa.com",
      "full_name": "João Silva",
      "department": "Financeiro",
      "employee_id": "EMP001"
    },
    {
      "email": "colaborador2@empresa.com",
      "full_name": "Maria Souza",
      "department": "RH",
      "employee_id": "EMP002"
    }
  ],
  "send_welcome_email": true,
  "assign_courses": ["d75acfec-5c00-411f-b14a-a51b3c9c1b19"] // IDs de cursos
}
```

**Response:**
```json
{
  "success": true,
  "enrolled": 2,
  "failed": 0,
  "details": [
    { "email": "colaborador1@empresa.com", "status": "success", "user_id": "uuid..." },
    { "email": "colaborador2@empresa.com", "status": "success", "user_id": "uuid..." }
  ]
}
```

#### **GET /api/corporate/compliance-report**

Gera relatório de conformidade NR-1 (PDF ou JSON).

**Autenticação:** JWT + role = 'ADMIN' ou 'SESMT'

**Query Params:**
- `startDate`, `endDate`
- `format` = 'pdf' | 'json'

**Response (JSON):**
```json
{
  "report_id": "uuid...",
  "generated_at": "2025-03-31T10:00:00Z",
  "compliance_status": "compliant",
  "nr1_requirements": {
    "mental_health_monitoring": {
      "status": "compliant",
      "evidence": "87% dos colaboradores fizeram análise facial nos últimos 90 dias"
    },
    "psychosocial_risk_assessment": {
      "status": "compliant",
      "evidence": "Questionários aplicados a 100% dos colaboradores; 18.5% identificados em risco médio/alto"
    },
    "wellness_promotion": {
      "status": "compliant",
      "evidence": "2847 sessões de Protocolo Respiratório realizadas; 134 cursos completos"
    },
    "training": {
      "status": "compliant",
      "evidence": "4 cursos educacionais disponíveis; 427 usuários ativos"
    },
    "preventive_monitoring": {
      "status": "compliant",
      "evidence": "Monitoramento contínuo via microchecagens semanais + análise preditiva"
    }
  },
  "recommendations": [
    "Aumentar engajamento no setor de Logística (apenas 62% de usuários ativos)",
    "Oferecer curso 'Resolva seu TDAH' para colaboradores com baixa concentração"
  ]
}
```

---

## 5. Segurança e Conformidade LGPD

### 5.1 Proteção de Dados Pessoais Sensíveis

#### **Dados de Saúde = Dados Sensíveis (Art. 11 LGPD)**

**Medidas implementadas:**

1. **Criptografia em trânsito:** TLS 1.3
2. **Criptografia em repouso:** AES-256 (Supabase)
3. **Row Level Security (RLS):** Usuário só acessa seus próprios dados
4. **Anonimização para relatórios corporativos:** Dados agregados sem identificação individual
5. **Consentimento explícito:** Termo de consentimento ao cadastrar
6. **Direito ao esquecimento:** Botão de exclusão total de conta

#### **Política de Acesso Corporativo**

```sql
-- RH/SESMT pode ver dados agregados, MAS NÃO dados individuais sem consentimento explícito
CREATE POLICY "Corporate admins see aggregated data only"
ON preventive_health_exams
FOR SELECT
TO authenticated
USING (
  -- Usuário vê seus próprios dados
  auth.uid() = user_id
  OR
  -- Admin só vê se usuário deu consentimento explícito
  (
    EXISTS (
      SELECT 1 FROM user_consents
      WHERE user_id = preventive_health_exams.user_id
        AND consent_type = 'share_with_employer'
        AND consented = true
    )
    AND
    auth.jwt() ->> 'role' IN ('ADMIN', 'SESMT')
  )
);
```

### 5.2 Auditoria e Logs

**Tabela de auditoria:**
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID,
  action TEXT, -- 'view_exam', 'export_report', 'share_data'
  resource_type TEXT,
  resource_id UUID,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Todos os acessos a dados sensíveis são logados.**

---

## 6. Protocolos de Implementação Corporativa

### 6.1 Checklist de Implementação (4 Semanas)

#### **Semana 1: Planejamento e Preparação**

- [ ] Reunião com RH, SESMT, CIPA, TI
- [ ] Definir escopo: quais departamentos entram primeiro (piloto)
- [ ] Solicitar aprovação de CIPA/SESMT
- [ ] Assinar contrato e configurar ambiente corporativo
- [ ] Configurar Single Sign-On (SSO) se necessário
- [ ] Preparar comunicação interna (email de lançamento)

#### **Semana 2: Cadastro e Onboarding**

- [ ] Importar lista de colaboradores (API bulk-enroll)
- [ ] Enviar emails de boas-vindas com instruções
- [ ] Realizar webinar de apresentação (30 min)
- [ ] Disponibilizar vídeos tutoriais
- [ ] Configurar suporte via WhatsApp/Email

#### **Semana 3: Diagnóstico Inicial**

- [ ] Incentivar análise facial + questionários (gamificar: sorteio de prêmio)
- [ ] Monitorar taxa de adesão (meta: > 70%)
- [ ] Identificar colaboradores com dificuldades técnicas (apoio TI)
- [ ] Coletar feedback inicial (formulário rápido)

#### **Semana 4: Análise e Ajustes**

- [ ] Gerar primeiro relatório de diagnóstico organizacional
- [ ] Apresentar resultados para liderança (dados agregados)
- [ ] Definir ações prioritárias (cursos, protocolos)
- [ ] Ajustar comunicação baseada no feedback

### 6.2 Treinamento de Equipes Internas

#### **Para RH:**

**Duração:** 2 horas

**Conteúdo:**
1. Visão geral da plataforma (30 min)
2. Dashboard corporativo (como ler métricas) (30 min)
3. Interpretação de alertas (quando intervir) (30 min)
4. Casos práticos (discussão) (30 min)

#### **Para SESMT:**

**Duração:** 3 horas

**Conteúdo:**
1. Base científica (índices preditivos, rPPG, etc.) (1h)
2. Integração com PCMSO/PPRA (30 min)
3. Interpretação de exames (como a IA analisa) (1h)
4. Condutas clínicas (quando encaminhar ao médico) (30 min)

#### **Para Gestores:**

**Duração:** 1 hora

**Conteúdo:**
1. Por que saúde mental importa (NR-1 + produtividade) (20 min)
2. Dashboard de equipe (como apoiar sem invadir) (20 min)
3. Como incentivar uso (gamificação, exemplo) (20 min)

---

## 7. Dashboards e Relatórios para Gestão

### 7.1 Dashboard Corporativo (RH/SESMT)

**URL:** `/corporate/dashboard`

**Métricas em Tempo Real:**

1. **Visão Geral:**
   - Total de usuários cadastrados
   - Taxa de engajamento quinzenal (%)
   - Score médio de saúde mental (1-5)
   - Tendência (últimos 90 dias): ↑ ↓ →

2. **Alertas Prioritários:**
   - 🔴 **Alto risco:** X colaboradores com múltiplos indicadores críticos
   - 🟡 **Médio risco:** X colaboradores com queda abrupta de humor/energia
   - 🟢 **Baixo risco:** X colaboradores estáveis

3. **Engajamento por Ferramenta:**
   - Microchecagens: X% fizeram na última semana
   - Análise facial: X% fizeram no último mês
   - Protocolo respiratório: X sessões totais
   - Cursos: X% completaram ao menos 1

4. **Distribuição por Setor:**
   - Mapa de calor: qual setor está mais/menos saudável
   - Ranking de setores por score de bem-estar

5. **Conformidade NR-1:**
   - ✅ Monitoramento mental: Ativo
   - ✅ Avaliação de riscos psicossociais: 427/500 avaliados
   - ✅ Promoção de bem-estar: 2847 ações realizadas
   - ✅ Capacitação: 134 cursos completados

### 7.2 Relatórios Automáticos

#### **Relatório Mensal (Email automático)**

**Destinatários:** RH, SESMT, Diretoria

**Conteúdo:**
- Resumo executivo (1 página)
- Gráficos de tendências (humor, energia, estresse)
- Top 3 conquistas do mês (ex: "28% de redução em estresse no setor financeiro")
- Top 3 áreas de atenção (ex: "Setor de logística com baixo engajamento")
- Recomendações de ação

#### **Relatório Trimestral de Conformidade NR-1**

**Destinatários:** SESMT, Jurídico, Auditoria

**Conteúdo:**
- Evidências de conformidade com cada pilar da NR-1
- Estatísticas de adesão
- Casos de sucesso (anônimos)
- Comparação com benchmarks do setor
- Plano de ação para próximo trimestre

---

## 8. Troubleshooting e Suporte

### 8.1 Problemas Comuns

#### **Problema:** Câmera não funciona para análise facial

**Diagnóstico:**
1. Permissão de câmera negada
2. Navegador não suportado (IE, Opera Mini)
3. Iluminação insuficiente

**Solução:**
1. Instruir usuário a permitir câmera
2. Recomendar Chrome/Safari
3. Pedir para fazer análise perto de janela ou luz artificial

#### **Problema:** OCR não extrai dados do exame

**Diagnóstico:**
1. PDF escaneado com baixa qualidade
2. Exame digitalizado em ângulo
3. Formato de exame não reconhecido

**Solução:**
1. Pedir para refazer foto com boa iluminação
2. Oferecer entrada manual de dados
3. Enviar exame para suporte (análise manual)

#### **Problema:** Colaborador não recebe notificações push

**Diagnóstico:**
1. Notificações desabilitadas no SO
2. PWA não instalado
3. Token de notificação expirado

**Solução:**
1. Instruir a habilitar notificações
2. Recomendar instalação do PWA
3. Fazer logout/login (regenera token)

### 8.2 Suporte Corporativo

**Canais:**
- **Email:** suporte-corporativo@essencialab.com
- **WhatsApp:** [número] (horário comercial)
- **Slack:** (para clientes enterprise)
- **Helpdesk:** Portal com tickets

**SLA:**
- Prioridade Alta (sistema indisponível): 4 horas
- Prioridade Média (funcionalidade comprometida): 24 horas
- Prioridade Baixa (dúvidas, melhorias): 72 horas

---

## 9. Conclusão Técnica

### ✅ **Checklist de Prontidão para NR-1**

- [x] Monitoramento de saúde mental (análise facial + microchecagens quinzenais)
- [x] Avaliação de riscos psicossociais (questionários + Big Five)
- [x] Promoção de bem-estar (protocolo respiratório + áudios + cursos)
- [x] Capacitação (4-5 cursos educacionais)
- [x] Monitoramento preventivo (índices preditivos + alertas)
- [x] Relatórios de conformidade (dashboards + exports)
- [x] Segurança e privacidade (LGPD compliant)
- [x] Escalabilidade (suporta 10-10.000 colaboradores)

### 🚀 **Próximas Evoluções Técnicas**

1. **Integração com wearables** (Apple Health, Google Fit)
2. **Chat com IA 24/7** (suporte psicológico não-clínico)
3. **Análise preditiva avançada** (ML para prever afastamentos)
4. **Gamificação corporativa** (desafios entre setores)
5. **Telemedicina integrada** (consultas com médicos do trabalho)

---

**Documento técnico criado por:** Equipe de Engenharia EssenciaLab  
**Versão:** 1.0  
**Última atualização:** Dezembro 2024  
**Contato técnico:** tech@essencialab.com


