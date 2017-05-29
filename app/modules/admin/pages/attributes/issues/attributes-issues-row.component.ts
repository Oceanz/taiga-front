import {Component, Input, Output, EventEmitter} from "@angular/core";
import * as Immutable from "immutable";

@Component({
    selector: "tg-admin-attributes-issues-row",
    template: require("./attributes-issues-row.pug")(),
})
export class AdminAttributesIssuesRow {
    @Input() value: Immutable.Map<string, any>;
    @Input() type: string;
    @Output() edit: EventEmitter<number>;

    constructor() {
        this.edit = new EventEmitter();
    }
}
