import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  getAllLeads,
  getLeadStats,
  getLeadById,
  updateLeadStatus,
  deleteLead,
  exportLeadsCsv,
  getWebinarStats,
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
  Globe,
  Loader2,
  Video,
  MousePointerClick,
  Timer,
} from "lucide-react";

const ADMIN_PASSWORD = "essencia2026";
const AUTH_KEY = "renal_admin_auth";

/* ------------------------------------------------------------------ */
/*  Status helpers                                                     */
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

const SOURCE_LABELS: Record<string, string> = {
  site: "Site",
  whatsapp_agent: "WhatsApp",
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
          <p className="text-sm text-gray-500 mt-1">Webinar Renal</p>
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

function LeadDetail(props: { leadId: string; onBack: () => void; onRefresh: () => void }) {
  const { leadId, onBack, onRefresh } = props;
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const data = await getLeadById(leadId);
    setLead(data);
    setLoading(false);
  }, [leadId]);

  useEffect(() => { load(); }, [load]);

  const handleStatusChange = async (status: string) => {
    await updateLeadStatus(leadId, status as LeadStatus);
    await load();
    onRefresh();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="size-6 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (!lead) return <p className="text-gray-500">Lead not found.</p>;

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
            <div>
              <strong>Origem:</strong>{" "}
              <Badge variant="secondary" className="text-xs">
                {lead.source === "whatsapp_agent" ? <><MessageCircle className="size-3 inline mr-1" />WhatsApp</> : <><Globe className="size-3 inline mr-1" />Site</>}
              </Badge>
            </div>
            <div><strong>Inscrito em:</strong> {new Date(lead.created_at).toLocaleString("pt-BR")}</div>
            <div><strong>Atualizado:</strong> {new Date(lead.updated_at).toLocaleString("pt-BR")}</div>
            {lead.utm_source && <div><strong>UTM Source:</strong> {lead.utm_source}</div>}
            {lead.utm_medium && <div><strong>UTM Medium:</strong> {lead.utm_medium}</div>}
            {lead.utm_campaign && <div><strong>UTM Campaign:</strong> {lead.utm_campaign}</div>}
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

      {/* Webinar data derived from events */}
      {lead.events && (() => {
        const webinarEvents = lead.events.filter(e => e.type === "webinar_progress" || e.type === "webinar_started" || e.type === "webinar_cta_click");
        if (webinarEvents.length === 0) return null;
        const maxMin = Math.max(0, ...lead.events.filter(e => e.type === "webinar_progress").map(e => (e.meta as Record<string, number>)?.minutes || 0));
        const clickedCta = lead.events.some(e => e.type === "webinar_cta_click");
        const ctaPlatform = lead.events.find(e => e.type === "webinar_cta_click")?.meta as Record<string, string> | undefined;
        return (
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Video className="size-5 text-purple-600" /> Webinar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Timer className="size-4 text-purple-500" />
                  <div>
                    <div className="text-lg font-bold">{maxMin} min</div>
                    <div className="text-xs text-gray-500">Assistidos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="size-4 text-purple-500" />
                  <div>
                    <div className="text-lg font-bold">Sim</div>
                    <div className="text-xs text-gray-500">Assistiu</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MousePointerClick className="size-4 text-purple-500" />
                  <div>
                    <div className={`text-lg font-bold ${clickedCta ? "text-emerald-600" : "text-gray-400"}`}>
                      {clickedCta ? `Sim (${ctaPlatform?.platform || "?"})` : "N\u00e3o"}
                    </div>
                    <div className="text-xs text-gray-500">Clicou no CTA</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })()}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Linha do Tempo</CardTitle>
        </CardHeader>
        <CardContent>
          {(lead.events && lead.events.length > 0) ? (
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
          ) : (
            <p className="text-sm text-gray-400">Nenhum evento registrado.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard                                                          */
/* ------------------------------------------------------------------ */

function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Awaited<ReturnType<typeof getLeadStats>> | null>(null);
  const [webinarStats, setWebinarStats] = useState<Awaited<ReturnType<typeof getWebinarStats>> | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterSource, setFilterSource] = useState<string>("all");
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    const [leadsData, statsData, wStats] = await Promise.all([getAllLeads(), getLeadStats(), getWebinarStats()]);
    setLeads(leadsData);
    setStats(statsData);
    setWebinarStats(wStats);
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const filtered = leads.filter((l) => {
    const matchSearch =
      !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.whatsapp.includes(search);
    const matchStatus = filterStatus === "all" || l.status === filterStatus;
    const matchSource = filterSource === "all" || (l.source || "site") === filterSource;
    return matchSearch && matchStatus && matchSource;
  });

  const handleExport = async () => {
    const csv = await exportLeadsCsv();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-renal-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este lead?")) return;
    await deleteLead(id);
    await refresh();
    if (selectedLeadId === id) setSelectedLeadId(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    window.location.reload();
  };

  if (selectedLeadId) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="border-b bg-white px-4 py-3">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <span className="text-lg font-bold text-emerald-700">Admin &mdash; Lead</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="size-4" />
              Sair
            </Button>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">
          <LeadDetail leadId={selectedLeadId} onBack={() => setSelectedLeadId(null)} onRefresh={refresh} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-lg font-bold text-emerald-700">Painel &mdash; Webinar Renal</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={refresh} disabled={loading}>
              <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
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
        {stats && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.total}</div>
                    <div className="text-xs text-gray-500">Total</div>
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
                    <div className="text-xs text-gray-500">Confirmaram</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.bySource?.site || 0}</div>
                    <div className="text-xs text-gray-500">Via Site</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.bySource?.whatsapp_agent || 0}</div>
                    <div className="text-xs text-gray-500">Via WhatsApp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Funnel */}
        {stats && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Funil de Conversa&#771;o</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-2">
                {LEAD_STATUS_ORDER.map((s) => {
                  const count = stats.byStatus[s];
                  const pct = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;
                  return (
                    <div key={s} className="flex-1 min-w-0">
                      <div className={`rounded-lg p-3 text-center ${STATUS_COLORS[s]}`}>
                        <div className="text-xl font-bold">{count}</div>
                        <div className="text-xs truncate">{LEAD_STATUS_LABELS[s]}</div>
                        <div className="text-xs opacity-70">{pct}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Webinar Stats */}
        {webinarStats && webinarStats.totalViewers > 0 && (
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Video className="size-5 text-purple-600" /> Webinar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Eye className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{webinarStats.totalViewers}</div>
                    <div className="text-xs text-gray-500">Assistiram</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Timer className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{webinarStats.avgMinutes} min</div>
                    <div className="text-xs text-gray-500">{"M\u00e9dia assistida"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <MousePointerClick className="size-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{webinarStats.ctaClicks}</div>
                    <div className="text-xs text-gray-500">Clicaram no download</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              {LEAD_STATUS_ORDER.map((s) => (
                <SelectItem key={s} value={s}>{LEAD_STATUS_LABELS[s]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterSource} onValueChange={setFilterSource}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Origem" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas origens</SelectItem>
              <SelectItem value="site">Site</SelectItem>
              <SelectItem value="whatsapp_agent">WhatsApp</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleExport}>
            <Download className="size-4" />
            CSV
          </Button>
        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="size-6 animate-spin text-emerald-600" />
              </div>
            ) : filtered.length === 0 ? (
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
                      <th className="px-4 py-3">Origem</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Webinar</th>
                      <th className="px-4 py-3">Data</th>
                      <th className="px-4 py-3 text-right">{"A\u00e7\u00f5es"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((lead) => (
                      <tr
                        key={lead.id}
                        className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => setSelectedLeadId(lead.id)}
                      >
                        <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                        <td className="px-4 py-3 text-gray-600">{lead.whatsapp}</td>
                        <td className="px-4 py-3">
                          <Badge variant="secondary" className="text-xs">
                            {PROFILE_LABELS[lead.profile] || lead.profile}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className="text-xs">
                            {(lead.source === "whatsapp_agent") ? "WhatsApp" : "Site"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[lead.status]}`}>
                            {STATUS_ICONS[lead.status]}
                            {LEAD_STATUS_LABELS[lead.status]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs">
                          {(() => {
                            const evts = lead.events || [];
                            const watched = evts.some(e => e.type === "webinar_started" || e.type === "webinar_progress");
                            if (!watched) return <span className="text-gray-300">&mdash;</span>;
                            const maxMin = Math.max(0, ...evts.filter(e => e.type === "webinar_progress").map(e => (e.meta as Record<string, number>)?.minutes || 0));
                            const clicked = evts.some(e => e.type === "webinar_cta_click");
                            return (
                              <span className="inline-flex items-center gap-1">
                                <Video className="size-3 text-purple-500" />
                                <span className="font-medium">{maxMin}min</span>
                                {clicked && <MousePointerClick className="size-3 text-emerald-500" />}
                              </span>
                            );
                          })()}
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
