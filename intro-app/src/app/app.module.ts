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
    MockPromptEmployeeFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
