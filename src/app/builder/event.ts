 export class Event {
    private summary: string;
    private description: string;
    private startDate: string;
    private endDate: string;
    private assigne: string;
    private rrule: string;
    private typeIssue: string;
    private users: string[];
    private reporter: string;

    public getSummary(): string {
        return this.summary;
    }

    public setSummary(summary: string): void {
        this.summary = summary;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public getStartDate(): string {
        return this.startDate;
    }

    public setStartDate(startDate: string) {
        this.startDate = startDate;
    }

    public getEndDate(): string {
        return this.endDate;
    }

    public setEndDate(endDate: string) {
        this.endDate= endDate;
    }

    public getAssigne(): string {
        return this.assigne;
    }

    public setAssigne(assigne: string) {
        this.assigne = assigne;
    }

    public getRrule(): string {
        return this.rrule;
    }

    public setRrule(rrule: string) {
        this.rrule = rrule;
    }

    public getTypeIssue(): string {
        return this.typeIssue;
    }

    public setTypeIssue(typeIssue: string) {
        this.typeIssue = typeIssue;
    }

    public getUsers(): string[] {
        return this.users;
    }

    public setUsers(users: string[]) {
        this.users = users;
    }

    public getReporter(): string {
        return this.reporter;
    }

    public setReporter(reporter: string) {
        this.reporter = reporter;
    }
}