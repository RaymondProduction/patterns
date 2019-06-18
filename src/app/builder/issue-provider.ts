import {EventBuilder} from "./event-builder";

export class IssueProvider {
    public static createEvent(builder: EventBuilder): string {
        builder.setAssigne('Raymond');
        builder.setStartDate('12-10-2019');
        builder.setEndDate('13-10-2019');
        builder.setTypeIssue('Story');

        return builder.getEvent();
    }
    
}