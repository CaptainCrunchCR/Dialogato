export const MAINTENANCE_MODE = {
  enabled: false,
  endDate: "2026-02-02T00:00:00",
};

export function isMaintenanceMode(): boolean {
  if (!MAINTENANCE_MODE.enabled) {
    return false;
  }

  const endDate = new Date(MAINTENANCE_MODE.endDate);
  const now = new Date();

  return now < endDate;
}
