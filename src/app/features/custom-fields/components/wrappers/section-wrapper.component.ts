import { Component } from "@angular/core";
import { FieldWrapper } from "@ngx-formly/core";

@Component({
  selector: "formly-section-wrapper",
  template: `
    <div class="w-full flex flex-col">
      <div class="w-full h-4 text-lg py-8 px-2 font-semibold bg-indigo-900 flex items-center">
        {{ to.label }}
      </div>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
  standalone: true,
})
export class SectionWrapper extends FieldWrapper {}
