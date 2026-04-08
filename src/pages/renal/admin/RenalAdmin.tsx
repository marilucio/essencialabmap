import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  getAllLeads,
  getLeadStats,
  updateLeadStatus,
  deleteLead,
  exportLeadsCsv,
  LEAD_STATUS_LABELS,
  LEAD_STATUS_ORDER,
  type Lead,
  type LeadStatus,
} from "../db";
import {
  Users,
  UserPlus,
  TrendingUp,
  Download,
  Search,
  Trash2,
  Clock,
  ArrowLeft,
  LogOut,
  MessageCircle,
  Eye,
  Smartphone,
  Play,
  RefreshCw,
} from "lucide-react";

const ADMIN_PASSWORD = "essencia2026";
const AUTH_KEY = "renal_admin_auth";

/* ------------------------------------------------------------------ */
/*  Status badge colors                                                */
/* ------------------------------------------------------------------ */

const STATUS_COLORS: Record<LeadStatus, string> = {
  inscrito: "bg-blue-100 text-blue-800",
  confirmou_whatsapp: "bg-green-100 text-green-800",
  assistiu_webinar: "bg-purple-100 text-purple-800",
  baixou_app: "bg-amber-100 text-amber-800",
  trial_ativo: "bg-emerald-100 text-emerald-800",
};

const STATUS_ICONS: Record<LeadStatus, React.ReactNode> = {
  inscrito: <UserPlus className="size-3" />,
  confirmou_whatsapp: <MessageCircle className="size-3" />,
  assistiu_webinar: <Eye className="size-3" />,
  baixou_app: <Smartphone className="size-3" />,
  trial_ativo: <Play className="size-3" />,
};

const PROFILE_LABELS: Record<string, string> = {
  paciente: "Paciente",
  cuidador: "Cuidador(a)",
  profissional: "Profissional",
  outro: "Outro",
};

/* ------------------------------------------------------------------ */
/*  Login                                                              */
/* ------------------------------------------------------------------ */

function LoginScreen(props: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      props.onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Painel Administrativo</CardTitle>
          <p className="text-sm text-gray-500 mt-1">Webinar Módulo Renal</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Input
              type="password"
              placeholder="Senha de acesso"
              value={pw}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPw(e.target.value);
                setError(false);
              }}
              onKeyDown={(e: React.KeyboardEvent) => e.key === "Enter" && submit()}
            />
            {error && <p className="text-sm text-red-600">Senha incorreta.</p>}
            <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={submit}>
              Entrar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lead detail                                                        */
/* ------------------------------------------------------------------ */

function LeadDetail(props: { lead: Lead; onBack: () => void; onRefresh: () => void }) {
  const { lead, onBack, onRefresh } = props;

  const handleStatusChange = (status: string) => {
    updateLeadStatus(lead.id, status as LeadStatus);
    onRefresh();
  };

  return (
    <div className="space-y-6">
      <Button variant="outline" size="sm" onClick={onBack}>
        <ArrowLeft className="size-4" />
        Voltar
      </Button>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Dados do Lead</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div><strong>Nome:</strong> {lead.name}</div>
            <div><strong>WhatsApp:</strong> {lead.whatsapp}</div>
            <div><strong>Perfil:</strong> {PROFILE_LABELS[lead.profile] || lead.profile}</div>
            <div><strong>Inscrito em:</strong> {new Date(lead.created_at).toLocaleString("pt-BR")}</div>
            <div><strong>Última atualização:</strong> {new Date(lead.updated_at).toLocaleString("pt-BR")}</div>
            {lead.utm.utm_source && <div><strong>UTM Source:</strong> {lead.utm.utm_source}</div>}
            {lead.utm.utm_medium && <div><strong>UTM Medium:</strong> {lead.utm.utm_medium}</div>}
            {lead.utm.utm_campaign && <div><strong>UTM Campaign:</strong> {lead.utm.utm_campaign}</div>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Status atual</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={lead.status} onValueChange={handleStatusChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LEAD_STATUS_ORDER.map((s) => (
                  <SelectItem key={s} value={s}>{LEAD_STATUS_LABELS[s]}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Funnel progress */}
            <div className="mt-6 space-y-2">
              {LEAD_STATUS_ORDER.map((s, i) => {
                const currentIdx = LEAD_STATUS_ORDER.indexOf(lead.status);
                const reached = i <= currentIdx;
                return (
                  <div key={s} className="flex items-center gap-3">
                    <div className={`flex size-7 items-center justify-center rounded-full text-xs font-bold ${reached ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                      {i + 1}
                    </div>
                    <span className={`text-sm ${reached ? "font-semibold text-gray-900" : "text-gray-400"}`}>
                      {LEAD_STATUS_LABELS[s]}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Linha do Tempo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {lead.events.map((ev, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Clock className="size-3" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{ev.type}</div>
                  <div className="text-xs text-gray-500">{new Date(ev.ts).toLocaleString("pt-BR")}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard                                                          */
/* ------------------------------------------------------------------ */

function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>(() => getAllLeads());
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const refresh = useCallback(() => {
    setLeads(getAllLeads());
    if (selectedLead) {
      const updated = getAllLeads().find((l) => l.id === selectedLead.id);
      if (updated) setSelectedLead(updated);
    }
  }, [selectedLead]);

  const stats = getLeadStats();

  const filtered = leads.filter((l) => {
    const matchSearch =
      !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.whatsapp.includes(search);
    const matchStatus = filterStatus === "all" || l.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleExport = () => {
    const csv = exportLeadsCsv();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-renal-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este lead?")) return;
    deleteLead(id);
    refresh();
    if (selectedLead?.id === id) setSelectedLead(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    window.location.reload();
  };

  if (selectedLead) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="border-b bg-white px-4 py-3">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <span className="text-lg font-bold text-emerald-700">Admin — Lead</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="size-4" />
              Sair
            </Button>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">
          <LeadDetail lead={selectedLead} onBack={() => setSelectedLead(null)} onRefresh={refresh} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-lg font-bold text-emerald-700">Painel — Webinar Renal</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={refresh}>
              <RefreshCw className="size-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="size-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Users className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.total}</div>
                  <div className="text-xs text-gray-500">Total de leads</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <UserPlus className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.todayCount}</div>
                  <div className="text-xs text-gray-500">Hoje</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.byStatus.confirmou_whatsapp}</div>
                  <div className="text-xs text-gray-500">Confirmaram WhatsApp</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <TrendingUp className="size-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {stats.total > 0 ? Math.round((stats.byStatus.confirmou_whatsapp / stats.total) * 100) : 0}%
                  </div>
                  <div className="text-xs text-gray-500">Taxa de confirmação</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Funnel */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Funil de Conversão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              {LEAD_STATUS_ORDER.map((s, i) => {
                const count = stats.byStatus[s];
                const pct = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;
                const widthPct = stats.total > 0 ? Math.max(20, (count / stats.total) * 100) : 20;
                return (
                  <div key={s} className="flex-1 min-w-0">
                    <div
                      className={`rounded-lg p-3 text-center ${STATUS_COLORS[s]}`}
                      style={{ opacity: Math.max(0.4, widthPct / 100) }}
                    >
                      <div className="text-xl font-bold">{count}</div>
                      <div className="text-xs truncate">{LEAD_STATUS_LABELS[s]}</div>
                      <div className="text-xs opacity-70">{pct}%</div>
                    </div>
                    {i < LEAD_STATUS_ORDER.length - 1 && (
                      <div className="hidden sm:flex justify-center py-1 text-gray-300">→</div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              placeholder="Buscar por nome ou WhatsApp..."
              className="pl-9"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              {LEAD_STATUS_ORDER.map((s) => (
                <SelectItem key={s} value={s}>{LEAD_STATUS_LABELS[s]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleExport}>
            <Download className="size-4" />
            Exportar CSV
          </Button>
        </div>

        {/* Lead table */}
        <Card>
          <CardContent className="p-0">
            {filtered.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {leads.length === 0 ? "Nenhum lead registrado ainda." : "Nenhum resultado para este filtro."}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="px-4 py-3">Nome</th>
                      <th className="px-4 py-3">WhatsApp</th>
                      <th className="px-4 py-3">Perfil</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Data</th>
                      <th className="px-4 py-3 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => setSelectedLead(lead)}
                      >
                        <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                        <td className="px-4 py-3 text-gray-600">{lead.whatsapp}</td>
                        <td className="px-4 py-3">
                          <Badge variant="secondary" className="text-xs">
                            {PROFILE_LABELS[lead.profile] || lead.profile}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[lead.status]}`}>
                            {STATUS_ICONS[lead.status]}
                            {LEAD_STATUS_LABELS[lead.status]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs">
                          {new Date(lead.created_at).toLocaleDateString("pt-BR")}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              handleDelete(lead.id);
                            }}
                          >
                            <Trash2 className="size-4 text-red-500" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function RenalAdmin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === "1");

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;
  return <Dashboard />;
}
