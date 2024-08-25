import { enableProdMode, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from "./app/app-routing.module";
import { provideAnimations } from "@angular/platform-browser/animations";
import { PortalModule } from "@angular/cdk/portal";
import { Highlight, provideHighlightOptions } from "ngx-highlightjs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import("highlight.js"),
    }),
    importProvidersFrom(
      BrowserModule,
      MatCardModule,
      MatIconModule,
      AppRoutingModule,
      PortalModule,
      Highlight,
      MatSlideToggleModule
    ),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
