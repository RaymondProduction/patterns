// Bulder interface. Set interface for create pasrts of object
export interface EventBuilder{
  setSummary(summary: string): void;
  setDescription(description: string): void;
  setStartDate(date: string): void;
  setEndDate(date: string): void;
  setAssigne(assigne: string): void;
  setReccurance(rrule: string): void;
  setTypeIssue(type: string): void;
  setUsers(users: string[]): void;
  setReporter(reporter: string): void;
  getEvent(): string;
}