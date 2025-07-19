import { generateRecurringDates } from "@/utils/recurrenceLogic";

describe("generateRecurringDates", () => {
  it("should generate daily recurring dates", () => {
    const result = generateRecurringDates({
      startDate: "2025-01-01",
      endDate: "2025-01-05",
      frequency: "daily",
      interval: 1,
    });

    expect(result.length).toBe(5);
    expect(result[0].toISOString().startsWith("2025-01-01")).toBeTruthy();
    expect(result[4].toISOString().startsWith("2025-01-05")).toBeTruthy();
  });

  it("should generate weekly on selected weekdays", () => {
    const result = generateRecurringDates({
      startDate: "2025-01-01",
      endDate: "2025-01-15",
      frequency: "weekly",
      interval: 1,
      weekdays: ["Monday", "Wednesday"],
    });

    expect(result.some(date =>
      date.toLocaleDateString("en-US", { weekday: "long" }) === "Monday"
    )).toBeTruthy();
  });
});
