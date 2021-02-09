import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestFormComponent } from './test-form/test-form.component';
import { MockPromptComponent } from './mock-prompt/mock-prompt.component';
import { MockPromptWelcomeComponent } from './mock-prompt-welcome/mock-prompt-welcome.component';
import { MockPromptOperatingHoursComponent } from './mock-prompt-operating-hours/mock-prompt-operating-hours.component';
import { MockPromptBudgetHoursComponent } from './mock-prompt-budget-hours/mock-prompt-budget-hours.component';
import { MockPromptEmployeeCountComponent } from './mock-prompt-employee-count/mock-prompt-employee-count.component';
import { MockPromptShiftPriorityComponent } from './mock-prompt-shift-priority/mock-prompt-shift-priority.component';
import { MockPromptEmployeeFormsComponent } from './mock-prompt-employee-forms/mock-prompt-employee-forms.component';
import { DayPriorityListComponent } from './day-priority-list/day-priority-list.component';
import { DayListItemComponent } from './day-list-item/day-list-item.component';
import { MockFormsHomeComponent } from './mock-forms-home/mock-forms-home.component';
import { NgcontenttestComponent } from './ngcontenttest/ngcontenttest.component';
import { TestOnchangeComponentComponent } from './test-onchange-component/test-onchange-component.component';
import { ViewInitAndOnDestroyTestComponent } from './view-init-and-on-destroy-test/view-init-and-on-destroy-test.component';
import { DirectivesrecapComponent } from './directivesrecap/directivesrecap.component';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { RendererHighlightDirective } from './customDirectives/renderer-highlight.directive';
import { ListenerDirective } from './customDirectives/listener.directive';
import { UnlessDirective } from './customDirectives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestFormComponent,
    MockPromptComponent,
    MockPromptWelcomeComponent,
    MockPromptOperatingHoursComponent,
    MockPromptBudgetHoursComponent,
    MockPromptEmployeeCountComponent,
    MockPromptShiftPriorityComponent,
    MockPromptEmployeeFormsComponent,
    DayPriorityListComponent,
    DayListItemComponent,
    MockFormsHomeComponent,
    NgcontenttestComponent,
    TestOnchangeComponentComponent,
    ViewInitAndOnDestroyTestComponent,
    DirectivesrecapComponent,
    HighlightDirective,
    RendererHighlightDirective,
    ListenerDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
