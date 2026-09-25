
const API_BASE = "http://localhost:5000";

const WeatherAPI = {
  async submitReport(data, file) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value ?? ""));
    if (file) formData.append("photo", file);

    const res = await fetch(`${API_BASE}/api/reports`, { method: "POST", body: formData });
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    return res.json();
  },

  async getRecentReports(limit = 8) {
    const res = await fetch(`${API_BASE}/api/reports?limit=${limit}`);
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    return res.json();
  },

  async getDashboard() {
    const res = await fetch(`${API_BASE}/api/dashboard`);
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    return res.json();
  },

  photoUrl(path) {
    return path ? `${API_BASE}${path}` : null;
  },
};
