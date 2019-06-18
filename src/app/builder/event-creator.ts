import {EventBuilder} from "./event-builder";
import {Event} from "./event";

// Concrete Builder
export class EventCreator implements EventBuilder{
    private event = new Event();

    setSummary(summary: string): void {
        this.event.setSummary(summary);
    }    
    setDescription(description: string): void {
        this.event.setDescription(description);
    }
    setStartDate(date: string): void {
        this.event.setStartDate(date);
    }
    setEndDate(date: string): void {
        this.event.setEndDate(date);
    }
    setAssigne(assigne: string): void {
        this.event.setAssigne(assigne);
    }
    setReccurance(rrule: string): void {
        this.event.setRrule(rrule);
    }
    setTypeIssue(type: string): void {
        this.event.setTypeIssue(type);
    }
    setUsers(users: string[]): void {
        this.event.setUsers(users);
    }
    setReporter(reporter: string): void {
        this.event.setReporter(reporter)
    }
    getEvent(): string {
        return JSON.stringify(this.event);
    }

    

}